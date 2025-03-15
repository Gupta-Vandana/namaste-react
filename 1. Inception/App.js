const parent = React.createElement("div", { id: "div1" }, React.createElement(
    "div",
    { id: "div2" },
    [
        React.createElement("h1", { id: "h1" }, "Hey, i'm h1"),
        React.createElement("h2", { id: "h2" }, "Hey, i'm h2")
    ]
));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
