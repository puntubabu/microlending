import React, { Component } from "react";
import { Link, browserHistory } from 'react-router'

class Home extends Component {

    render() {

        return (
            <div>
                <h3> Choose microlendee or stockist: </h3>
                <Link to="/microlendee" >Microlendee</Link>
                <br/>
                <Link to="/stockist" >Stockist</Link>
            </div>
        )
    }

}

export default Home