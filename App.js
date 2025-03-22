import React from "react";
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
       <Outlet/>  
        <Footer />
    </div>
    ); 
};

// const appBrowser = createBrowserRouter([
//     {
//         path: "/",
//         element : <App></App>
//     },
//     {
//         path: "/about",
//         element: <About></About>
//     }
// ])


// const root = createRoot(document.getElementById("root"));
// //root.render(<RouterProvider router={appBrowser }/>);


// root.render(
//   <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<App />}/>
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="*" element={<Error />} />
//         </Routes>
//   </BrowserRouter>
// );

// Create a router with errorElement
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
                
            }
      ],
      errorElement: <Error />, // To handle route errors
    }
  ]);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={router} />);