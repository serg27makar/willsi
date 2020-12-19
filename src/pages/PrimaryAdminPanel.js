import React from 'react';
import {connect} from "react-redux";
import {actionDataRedirect, actionSetStoreArr, setActionAdminPanel} from "../action";
import {Redirect} from "react-router-dom";
import SaidBarAdmin from "../components/primaryAdminPanel/SaidBarAdmin";
import MainBarAdmin from "../components/primaryAdminPanel/MainBarAdmin";

class PrimaryAdminPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.setActionAdminPanelFunction("AdminPanel");
        this.props.dataRedirectFunction({
            accessR: false,
            to: "/",
        });
    }

    render() {
        if (this.props.dataRedirect.accessR) {
            return(
                <Redirect to={this.props.dataRedirect.to}/>
            )
        }
        return(
            <div className="content main-admin__row">
                <div className="main-admin__sidebar">
                    <SaidBarAdmin/>
                </div>
                <div className="main-admin__main-envelope">
                    <MainBarAdmin/>
                </div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        page: state.pageReducer.page,
        dataRedirect: state.pageReducer.dataRedirect,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setActionAdminPanelFunction: (page) => {
            dispatch(setActionAdminPanel(page))
        },
        dataRedirectFunction: (dataRedirect) => {
            dispatch(actionDataRedirect(dataRedirect))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(PrimaryAdminPanel);

