import ResCard from "./ResCard";
import { useEffect, useState } from "react";
import axios from 'axios';
import { url, payload } from "./utils/constants.js"
import Shimmer from "./Shimmer.js";

 
const Body =  () => {
    const [listOfRes, setListRes] = useState([]);
    const [listOfFilteredRes, setFilteredListRes] = useState([]);
    const [searchText, setSearchText] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch(url) 
        const json = await data.json(); 
        const restaurants = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        console.log(restaurants);
        setListRes(restaurants);
        setFilteredListRes(restaurants);
    }; 
    return (listOfRes.length === 0) ? (<Shimmer />) :
        
     (
        <div className="body">
                <div className="filter">
                    <div className="search">
                        <input type="text"
                            className="search-bar"
                            value={searchText}
                        onChange={(e) =>{setSearchText(e.target.value)}}/>
                        <button
                            className="search-button"
                            onClick={() =>
                            {
                          
                                const filteredList = listOfRes.filter((res) => {
                                    return res.info.name.toLowerCase().includes(searchText.toLowerCase())
                                });
                                setFilteredListRes(filteredList);
         
                            }}

                        >Search</button>
                    </div>
                <button onClick={() => {
                    const filteredList = listOfRes.filter(res => (res.info.totalRatingsString > 4));
                    setFilteredListRes(filteredList);
                }}>
                 Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {listOfFilteredRes .map(res => (
                    <ResCard key={res.info.id} resData={res}/>
               ))}
            </div>
    </div>
    );
};

export default Body;