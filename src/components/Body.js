import ResCard, { withAvgRating } from "./ResCard";
import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { url, payload } from "./utils/constants.js"
import Shimmer from "./Shimmer.js";
import { Link } from "react-router";
import useOnlineStatus from "./utils/useOnlineStatus.js";
import UserContext from "./UserContext.js";

 
const Body =  () => {
    const [listOfRes, setListRes] = useState([]);
    const [listOfFilteredRes, setFilteredListRes] = useState([]);
    const [searchText, setSearchText] = useState([]);

    // this will return a component  with label inside it 
    const ResCardWithAvgRating = withAvgRating(ResCard);

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch(url) 
        const json = await data.json(); 
       // console.log(json.data);
        const restaurants = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
       // console.log(restaurants);
        setListRes(restaurants);
        setFilteredListRes(restaurants);
    }; 

    const isOffLine = useOnlineStatus();
    if (isOffLine === false) {
        return (<div>
            hey, looks like you are offline; 
        </div>);
    }
    const { loggedInUser,  setLoggedInUser  } = useContext(UserContext);
    return (listOfRes.length === 0) ? (<Shimmer />) :
        
     (<div className="">
                <div className="flex">
                    <div className="flex m-4 p-4">
                        <input type="text"
                            className="border-s-violet-400 border-solid  m-4 p-4"
                            value={searchText}
                        onChange={(e) =>{setSearchText(e.target.value)}}/>
                        <button
                            className="p-4 m-4 bg-teal-300 rounded-2xl"
                            onClick={() =>{
                                const filteredList = listOfRes.filter((res) => {
                                    return res.info.name.toLowerCase().includes(searchText.toLowerCase())
                                });
                                setFilteredListRes (filteredList);
                        }}>
                        Search
                    </button>
                    
                    <button className="bg-pink-300 flex p-4 m-4 rounded-2xl" onClick={() => {
                    const filteredList = listOfRes.filter(res => (res.info.totalRatingsString > 4));
                    setFilteredListRes(filteredList);
                }}>
                 Top Rated Restaurants
                    </button>
                    </div>
            </div>
            <div className="flex items-center ">
                <label className="p-2">
                    Username : 
                </label>
                <input className="border border-black"
                    value = {loggedInUser}
                    onChange={(e) => {
                    setLoggedInUser(e.target.value);
                }}>
                </input>
            </div>
            <div className="flex flex-wrap">
                {/**if promoted/ avg.rating is higher then show a diff card */}
                {
                    listOfFilteredRes.map(res => (
                        <Link key={res.info.id} to={"/restaurant/" + res.info.id}>
                            {res.info.avgRating > 4.5 ?
                                (<ResCardWithAvgRating resData={res} />) :
                                (<ResCard resData={res} />)}       
                        </Link> 
                    ))
                }
            </div>
    </div>
    );
};

export default Body;