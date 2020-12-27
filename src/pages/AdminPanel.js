import React from 'react';
import {connect} from "react-redux";
import {actionDataRedirect, actionSetStoreArr, setActionAdminPanel} from "../action";
import AdminSidebar from "../components/adminPanel/AdminSidebar";
import {Redirect} from "react-router-dom";
import {getStoreData} from "../utilite/axiosConnect";
import MainScreen from "../components/adminPanel/MainScreen";

class AdminPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addButton: true,
        };
        this.storeData = this.storeData.bind(this);
        this.addProduct = this.addProduct.bind(this);
    }

    componentDidMount() {
        getStoreData(this.storeData);
        this.props.setActionAdminPanelFunction("AdminPanel");
        this.props.dataRedirectFunction({
            accessR: false,
            to: "/",
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.Permission !== this.props.Permission) {
            if (this.props.Permission === "primaryAdmin") {
                this.redirect("primary-admin-panel")
            }
        }
    }

    redirect(page = "catalog") {
        this.props.dataRedirectFunction({
            accessR: true,
            to: "/" + page,
        });
    }

    storeData(res) {
        if (res && res.length > 0) {
            this.props.setStoreArrFunction(res);
        }
    }

    addProduct(addButton) {
        this.setState({
            addButton
        })
    }

    render() {
        if (this.props.dataRedirect.accessR) {
            return(
                <Redirect to={this.props.dataRedirect.to}/>
            )
        }
        return(
            <div className="content main-admin__row">
                <AdminSidebar addProduct={this.addProduct} addButton={this.state.addButton}/>
                <MainScreen addButton={this.state.addButton}/>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        dataRedirect: state.pageReducer.dataRedirect,
        Permission: state.userReducer.Permission,
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
        setStoreArrFunction: (StoreArr) => {
            dispatch(actionSetStoreArr(StoreArr))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(AdminPanel);

