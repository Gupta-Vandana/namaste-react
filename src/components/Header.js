import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
    const [login, setLoginToggle] = useState(["login"]);
    
    return (
        <div className="header">
        <div className="logo"><img src="https://cdn-icons-png.flaticon.com/512/7139/7139899.png"/></div>
        <div className="nav-items">
            <ul>
                <li><Link to="/about">Home </Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/contact">Contact us</Link></li>
                    <li>Cart</li>
                    <button
                        className="login"
                        onClick={() =>{
                            login === "login" ?
                                setLoginToggle("logout") :
                                setLoginToggle("login")
                        }}>
                        {login}</button>
            </ul>
        </div>
        </div>
    );
};

export default Header; 