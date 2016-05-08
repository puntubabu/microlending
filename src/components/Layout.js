import React, { Component } from "react";
import { connect } from 'react-redux'

class Layout extends Component {

    render() {

        const outerLayout = {
            paddingTop: "30px",
            height:"100vh",
            backgroundColor:"#0091EA"
        };

        const card = {
            margin: "0 auto"
        }

        return (
            <div className="text-center" style={outerLayout}>
                <div className="container card-panel" style={card}>
                    <div className="section">
                        <div class="divider"></div>
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }

}

Layout.contextTypes = {
    store: React.PropTypes.object
}


const mapStateToProps = (state) => {
    return {
        combinedArray: state.combinedArray
    }
}

Layout = connect(
    mapStateToProps
)(Layout)

export default Layout
