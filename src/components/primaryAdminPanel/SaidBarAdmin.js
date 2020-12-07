import React from "react";
import {connect} from "react-redux";
import ButtonMain from "../shared/ButtonMain";
import ru from "../../access/lang/LangConstants";
import Filters from "./Filters";
import {getAllProductsData, postGetAllStoresData, postGetAllUsersData} from "../../utilite/axiosConnect";
import {actionAllProductsData, actionAllStoresData, actionAllUsersData} from "../../action";

class SaidBarAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btnList: []
        }
        this.getDataUser = this.getDataUser.bind(this);
        this.getDataStores = this.getDataStores.bind(this);
        this.getDataProducts = this.getDataProducts.bind(this);
        this.allUsersData = this.allUsersData.bind(this);
        this.allStoresData = this.allStoresData.bind(this);
        this.allProductsData = this.allProductsData.bind(this);
    }
    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.filters !== this.props.filters) {
            console.log(this.props.filters)
            if (this.props.filters.type) {
                switch (this.props.filters.type) {
                    case "u": this.allUsersData();
                    break;
                    case "s": this.allStoresData();
                    break;
                    case "p": this.allProductsData();
                    break;

                }
            }
        }
    }

    getDataUser(data) {
        this.props.allUsersDataFunction(data)
    }

    getDataStores(data) {
        this.props.allStoresDataFunction(data)
    }

    getDataProducts(data) {
        this.props.allProductsDataFunction(data)
    }

    allUsersData() {
        const filters = this.props.filters;
        let search = {};
        const filter = [];
        if (filters && filters.type && filters.type === "u") {
            if (filters.buyer) filter.push("buyer");
            if (filters.unknown) filter.push("unknown");
            if (filters.storeAdmin) filter.push("storeAdmin");
        }
        if (filter.length > 0) {
            search = {
                "Permission":  {$in : filter}
            }
        }

        postGetAllUsersData(search, this.getDataUser);
    }

    allStoresData() {
        let search = {};
        postGetAllStoresData(search, this.getDataStores);
    }

    allProductsData() {
        let search = {};
        getAllProductsData(search, this.getDataProducts);
    }

    render() {
        return (
            <div className="said-bar-wrap">
                <ButtonMain btnClass={"button-enter button-main text-18 uppercase medium button-margin"}
                            text={ru.allUsers} onClick={this.allUsersData}/>
                <ButtonMain btnClass={"button-enter button-main text-18 uppercase medium button-margin"}
                            text={ru.allStores} onClick={this.allStoresData}/>
                <ButtonMain btnClass={"button-enter button-main text-18 uppercase medium button-margin"}
                            text={ru.allProducts} onClick={this.allProductsData}/>
                <div className="border-line"/>
                <Filters/>
            </div>

        )
    }
}
function MapStateToProps(state) {
    return {
        filters: state.utiliteReducer.filters,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        allUsersDataFunction: (AllUsersData) => {
            dispatch(actionAllUsersData(AllUsersData))
        },
        allStoresDataFunction: (AllStoresData) => {
            dispatch(actionAllStoresData(AllStoresData))
        },
        allProductsDataFunction: (AllProductsData) => {
            dispatch(actionAllProductsData(AllProductsData))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(SaidBarAdmin);
