import React, { Component } from "react";
import { Link, browserHistory } from 'react-router'
import Firebase from 'firebase'
import * as C from '../constants'

class Home extends Component {


    componentWillMount() {
        //via firebase, get all user information

    }

    render() {

        return (
            <div>
                { /* Display user information */ }
                <p>User 1: </p>
                <p>Goods: "List of Goods"</p>
                <p>Balance Remaining: 35</p>
                <p>Next payment date: 2/4/17</p>
            </div>
        )
    }

}

export default Home