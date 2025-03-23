import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "./utils/useOnlineStatus";

const Header = () => {
    const [login, setLoginToggle] = useState(["login"]);
    const onlineStatus = useOnlineStatus();
    
    return (
        <div className="flex justify-between shadow-amber-300 sm:bg-amber-200 ">
        <div className="w-48"><img src="https://cdn-icons-png.flaticon.com/512/7139/7139899.png"/></div>
        <div className="nav-items">
                <ul className="p-5 flex m-4">
                <li className="p-4">{onlineStatus ? "green" : "red" }</li>
                <li className="p-4"><Link to="/">Home </Link></li>
                <li className="p-4"><Link to="/about">About us</Link></li>
                <li className="p-4"><Link to="/contact">Contact us</Link></li>
                <li className="p-4"><Link to="/grocery">Grocery</Link></li>
                <li className="p-4">Cart</li>
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