import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot



const parent = React.createElement("div",
    { id: "div1" },
    React.createElement(
        "div",
        { id: "div2" },
        [
            React.createElement("h1", { id: "h1" }, "Namaste React"),
            React.createElement("h2", { id: "h2" }, "Hey, i'm h2")
        ]
    ));

const root = createRoot(document.getElementById("root"));
root.render(parent);
