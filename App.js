import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { BrowserRouter, Route, Routes } from "react-router";
import About from "./src/About";
import Contact from "./src/Contact";
import Error from "./src/Error";
import RestaurantMenuCard from "./src/components/RestaurantMenuCard";
import UserContext from "./src/components/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/components/utils/appStore";
import Cart from "./src/components/Cart";


const Grocery = lazy(() => import("./src/Grocery"));


const Footer = () =>{
    return (
        <div className="footer"></div>
    );
};

const App = () => {
    const [username, setLoggedInUser] = useState("vandana");
    useEffect(() => {
        //api to call logged in user
        console.log(username);
        setLoggedInUser("Vandana")
    }, []);
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser : username, setLoggedInUser }}>
            <div className="App">
            <Header />
            <Outlet/>  
            <Footer />
          </div>
        </UserContext.Provider>
        </Provider>
    ); 
};

const router = createBrowserRouter([
    {
      path: "/",
        element: <App />,
        children: [
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/",
                element:<Body/>
            },
            {
                path: "/restaurant/:resId",
                element:<RestaurantMenuCard/>
                
            },
            {
                path: "/grocery",
                element: <Suspense fallback ={<h1>Loading...</h1>}><Grocery/></Suspense>
                
            },
            {
                path: "/cart",
                element :<Cart />
            }

      ],
      errorElement: <Error />, // To handle route errors
    }
  ]);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={router} />);