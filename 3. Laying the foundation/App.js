import React from "react";
import { createRoot } from "react-dom/client"


const jsxHeading = (<h1>Namaste React from JSX</h1>);

//root.render(jsxHeading);

// JSX(babel) => React.createElement => JS object => HTMLElement(render)
// JSX code takes camelCase in attributes 
// every thing in react is a component
// old way - class based components
// functional components -- function that returns JSX code

//React functional component

const Title = function()  {
    return <h1 >This is title, nested in HeadingComponent</h1>
}

// component composition
const HeadingComponent = () => {
    return (<div >
        <Title />
        <Title></Title>
        <h1 >
            This is under Title
        </h1>
        {Title()}
    </div> );
}



const root = createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
