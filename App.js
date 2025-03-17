import React from "react";
import { createRoot } from "react-dom/client";


const Header = () =>{
    return (
        <div className="header">
        <div className="logo"><img src="https://cdn-icons-png.flaticon.com/512/7139/7139899.png"/></div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
    );
};
 
const styleCard = {
    backgroundColor: "f0f0f0"
};

const ResCard = () => {
    return (
        <div className="res-card" style={styleCard}>
        <div className="res-logo"><img className="res-logo-image" src="https://www.awesomecuisine.com/wp-content/uploads/2009/06/Plain-Dosa.jpg"></img></div>
        <div className="res-name"><h1>Anna's</h1></div>
        <div className="cuisine"><h2>South Indian</h2></div>
        <div className="star-rating"></div>
        <div className="delievery-time"> </div>
    </div>);
};

const Body = () =>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <ResCard />
                <ResCard />
                <ResCard />
                <ResCard />
                <ResCard />
                <ResCard />
                <ResCard />
            </div>
    </div>
    );
};

const Footer = () =>{
    return (<div className="footer">

    </div>);
};

const App = () =>{
    return(<div className="App ">
        <Header />
        <Body />
        <Footer />
    </div>); 
};


const root = createRoot(document.getElementById("root"));
root.render(<App />);