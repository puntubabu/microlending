import React, { Component } from "react";
import { Link, browserHistory } from 'react-router'
import Firebase from 'firebase'
import * as C from '../constants'

class Home extends Component {


    componentWillMount() {
        { /*let ref = Firebase(C.FIREBASE)
        ref.on('value', (snapshot) => {
            console.log(snapshot.val())
        }) */ }
    }

    render() {

        return (
            <div>
                <p>Goods: 12 T-Shirts</p>
                <p>Balance Remaining: 35</p>
                <p>Next payment date: 2/4/17</p>
                <br />
                <br />
                <form>Make Payment:
                    <input placeholder="amount" />
                    <button onClick={this.makePayment}>Make Payment</button>
                </form>
            </div>
        )
    }

    makePayment() {
        //User made a payment
    }

}

export default Home