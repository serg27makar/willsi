import React from "react";
import "../../access/css/cart.css"
import {actionDataRedirect} from "../../action";
import {connect} from "react-redux";

class ShopCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="user-card-wrap">
                <div className="user-card-text">{this.props.user.nameStore}</div>
                <div className="user-card-text">{this.props.user.urlStore}</div>
                <div className="user-card-text">{this.props.user.phoneStore}</div>
                <div className="user-card-text">{this.props.user.addressStore}</div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
    }
}
const mapDispatchToProps = dispatch => {
    return {
        dataRedirectFunction: (dataRedirect) => {
            dispatch(actionDataRedirect(dataRedirect))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(ShopCard);
