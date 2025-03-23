import React from "react";

class UserClass extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Dummy location"
            },
            
        };
       // console.log("child constructor called");
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/gupta-vandana");
        const json = await data.json();
   
        console.log(json);
        this.setState({
            userInfo: json,
        });
            
    
        // similar to useEffect, useEffect is called after functional component is rendered,
        // all api calls will be made here
    }

    render() {
        //console.log("child render called")
        //const { name } = this.props;
        const { count } = this.state;
        const { name,company, location, avatar_url } = this.state.userInfo;
        return (<div className="user-card">
            <h2>{name}</h2>
            <h2>{company}</h2>
            <h2>{location}</h2>
            <img src={avatar_url}></img>
            <h2>{company}</h2>
        </div>);
    } 

}

export default UserClass;