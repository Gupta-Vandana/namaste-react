import { useRouteError } from "react-router";

const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (<div>
<h1>OOPS, the page you are looking for is not here</h1>
    </div>);
}
export default Error;