import { useState } from "react";

const Header = () => {
    const [login, setLoginToggle] = useState(["login"]);
    
    return (
        <div className="header">
        <div className="logo"><img src="https://cdn-icons-png.flaticon.com/512/7139/7139899.png"/></div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                    <li>Cart</li>
                    <button
                        className="login"
                        onClick={() =>
                        {
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