import React from 'react';
import {connect} from "react-redux";
import {actionDataRedirect, actionSetStoreArr, setActionAdminPanel} from "../action";
import AdminSidebar from "../components/adminPanel/AdminSidebar";
import {Redirect} from "react-router-dom";
import {getProductDataToId, getStoreData} from "../utilite/axiosConnect";
import AdminMainSite from "../components/adminPanel/AdminMainSite";

class AdminPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productsThisStore: [],
            storeID: "",
            redirect: {
                accessR: false,
                to: "",
            },
        };
        this.storeData = this.storeData.bind(this);
        this.productsData = this.productsData.bind(this);
        this.setStoreID = this.setStoreID.bind(this);
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
        if (prevProps.dataRedirect !== this.props.dataRedirect) {
            this.setState({
                redirect: this.props.dataRedirect,
            })
        }
    }

    storeData(res) {
        if (res && res.length > 0) {
            this.props.setStoreArrFunction(res);
        }
    }

    productsData(data) {
        this.setState({
            productsThisStore: data,
        });
    }

    setStoreID(ProductStoreID) {
        this.setState({storeID: ProductStoreID});
        if (ProductStoreID && ProductStoreID.length >= 12) {
            getProductDataToId(ProductStoreID, this.productsData);
        }
    }

    render() {
        if (this.state.redirect.accessR) {
            return(
                <Redirect to={this.state.redirect.to}/>
            )
        }
        return(
            <div className="content main-admin__row">
                <AdminSidebar storeID={this.setStoreID} productsThisStore={this.state.productsThisStore}/>
                <div className="main-admin__main-envelope">
                    <AdminMainSite storeID={this.state.storeID}/>
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
        setStoreArrFunction: (StoreArr) => {
            dispatch(actionSetStoreArr(StoreArr))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(AdminPanel);

