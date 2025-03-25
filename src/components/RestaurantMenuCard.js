import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantMenuItem from "../RestaurantMenuList";
import { useParams } from "react-router";
import ResItemCategory from "./ResItemCategory";

const RestaurantMenuCard = () => {
    const [restaurantInfo, setRestaurant] = useState([]);
    const [restaurantFilteredVegOrNonVegList, setFilteredRestaurant] = useState([]);
    const [itemCategories, setItemCategories] = useState([]);
    const [showIndex, setShowIndex] = useState(0);
    const { resId } = useParams();
    useEffect(() => {
        fetchListOfRestaurants();
    }, []);

    const fetchListOfRestaurants = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5642452&lng=73.7768511&restaurantId="+resId);
        const json = await data.json();
       // console.log(json);
        console.log(json.data);
        const restaurantInfo = json.data;
        setRestaurant(restaurantInfo);
        setFilteredRestaurant(restaurantInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
        const groupedCard = restaurantInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
        //  console.log(restaurantInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);  
        const itemCategories = restaurantInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((itemCategory) => (
            itemCategory.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ));
        setItemCategories(itemCategories);
        console.log(itemCategories);
    }
    if (restaurantInfo.length === 0) return (<div><Shimmer /></div>);
   // console.log(restaurantInfo.cards[2].card.card.info);
    const { name, costForTwoMessage, cuisines } = restaurantInfo.cards[2].card.card.info;
    const mcBreakFastList = restaurantInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;
    // setFilteredRestaurant(mcBreakFastList);
    
    return ((<div className="text-center">
        {/* <img className="restaurant-logo" src=""></img> */}
        <h1 className="font-bold my-10 text-2xl">{name}</h1>
        <h2 className="font-bold text-lg">{costForTwoMessage}</h2>
        <h2 className="font-bold text-lg">{cuisines.join(", ")}</h2>

        <button className="my-10 mx-10 px-2 py-2 bg-green-400" onClick={() => {
            const filteredVegList = mcBreakFastList.filter((item) => {
                return item.card.info.isVeg === 1;
            })
            setFilteredRestaurant(filteredVegList);
        }}> VEG</button>
        <button className="my-10 mx-10 px-2 py-2 bg-red-400" onClick={() => {
            const filteredNonVegList = mcBreakFastList.filter((item) => {
                return item.card.info.isVeg === 0 || item.card.info.isVeg === undefined;
            })
            setFilteredRestaurant(filteredNonVegList);
        }}>NON-VEG</button> 


        {itemCategories.map((item, index) => (<ResItemCategory category={item.card.card} showIndex={showIndex===index ? true :false } updateIndex={()=>setShowIndex(index)} />))}
        
        {/* <div className="menu-list">
            {restaurantFilteredVegOrNonVegList.map(menuItem => (<RestaurantMenuItem key={menuItem.card.info.id} restaurantMenuItem={menuItem} />))};
        </div> */}
    </div>));
};
export default RestaurantMenuCard;