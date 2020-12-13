import React from "react";
import "../../access/css/cart.css"
import {actionDataRedirect} from "../../action";
import {connect} from "react-redux";

class UserCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="user-card-wrap">
                <div className="user-card-text">{this.props.user.UserName}</div>
                <div className="user-card-text">{this.props.user.Email}</div>
                <div className="user-card-text">{this.props.user.Permission}</div>
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

export default connect(MapStateToProps, mapDispatchToProps)(UserCard);
