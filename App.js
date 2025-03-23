import React, { lazy, Suspense } from "react";
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


const Grocery = lazy(() => import("./src/Grocery"));


const Footer = () =>{
    return (
        <div className="footer"></div>
    );
};

const App = () =>{
    return(<div className="App">
        <Header />
       <Outlet/>  
        <Footer />
    </div>
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
                
            }

      ],
      errorElement: <Error />, // To handle route errors
    }
  ]);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={router} />);