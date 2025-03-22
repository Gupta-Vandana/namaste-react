import { use, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantMenuItem from "../RestaurantMenuList";
import { useParams } from "react-router";

const RestaurantMenuCard = () => {
    const [restaurantInfo, setRestaurant] = useState([]);
    const [restaurantFilteredVegOrNonVegList, setFilteredRestaurant] = useState([]);
    const { resId } = useParams();
    useEffect(() => {
        fetchListOfRestaurants();
    }, []);

    const fetchListOfRestaurants = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5642452&lng=73.7768511&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        const restaurantInfo = json.data;
        setRestaurant(restaurantInfo);
        setFilteredRestaurant(restaurantInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
        
    }
    if (restaurantInfo.length === 0) return (<div><Shimmer /></div>);
    console.log(restaurantInfo.cards[2].card.card.info);
    const { name, cloudinaryImageId, costForTwoMessage, cuisines, id } = restaurantInfo.cards[2].card.card.info;
    const mcBreakFastList = restaurantInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
    // setFilteredRestaurant(mcBreakFastList);
    
    return ((<div className="restaurant">
        {/* <img className="restaurant-logo" src=""></img> */}
        <h1>{name}</h1>
        <h2>{cuisines.join(", ")}</h2>
        <h2>{costForTwoMessage}</h2>
        <button className="veg" onClick={() => {
            const filteredVegList = mcBreakFastList.filter((item) => {
                return item.card.info.isVeg === 1;
            })
            setFilteredRestaurant(filteredVegList);
        }}> VEG</button>
        <button className="non-veg" onClick={() => {
            const filteredNonVegList = mcBreakFastList.filter((item) => {
                return item.card.info.isVeg === 0 || item.card.info.isVeg === undefined;
            })
            setFilteredRestaurant(filteredNonVegList);
        }}>NON-VEG</button>
        <div className="menu-list">
            {restaurantFilteredVegOrNonVegList.map(menuItem => (<RestaurantMenuItem key={menuItem.card.info.id} restaurantMenuItem={menuItem} />))};
        </div>
    </div>));
};
export default RestaurantMenuCard;