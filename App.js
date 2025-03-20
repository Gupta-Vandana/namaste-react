import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./src/components/Headers";
import Body from "./src/components/Body";



 
const styleCard = {
    backgroundColor: "f0f0f0"
};


const Footer = () =>{
    return (
        <div className="footer"></div>
    );
};

const App = () =>{
    return(<div className="App ">
        <Header />
        <Body />
        <Footer />
    </div>
    ); 
};



const root = createRoot(document.getElementById("root"));
root.render(<App />);