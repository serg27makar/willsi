import React from "react";
import "../../access/css/cart.css"
import {
    actionAllProductsData,
    actionDataRedirect,
    actionSetDataToAdminPanel,
    actionSetDataViewIndicator
} from "../../action";
import {connect} from "react-redux";
import ButtonMain from "../shared/ButtonMain";
import ru from "../../access/lang/LangConstants";
import {getAllProductsData} from "../../utilite/axiosConnect";

class ShopCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.productsStore = this.productsStore.bind(this);
        this.getDataProducts = this.getDataProducts.bind(this);
    }

    getDataProducts(data) {
        this.props.allProductsDataFunction(data)
    }

    productsStore() {
        let search = {
            ProductStoreID: this.props.user._id,
        };
        this.props.setDataViewIndicatorFunction("p")
        getAllProductsData(search, this.getDataProducts);
    }

    aboutStore() {
        this.props.setDataToAdminPanelFunction(this.props.user);
        this.props.setDataViewIndicatorFunction("i")
    }

    render() {
        return (
            <div className="user-card-wrap row">
                <div className="user-card-text-wrap">
                    <div className="user-card-text text-14">{this.props.user.nameStore}</div>
                    <div className="user-card-text text-14">{this.props.user.urlStore}</div>
                    <div className="user-card-text text-14">{this.props.user.phoneStore}</div>
                    <div className="user-card-text text-14">{this.props.user.addressStore}</div>
                </div>
                <div className="user-card-text-wrap row">
                    <ButtonMain btnClass={"button-enter button-main text-18 medium"} text={ru.allProducts} onClick={this.productsStore}/>
                    <ButtonMain btnClass={"button-enter button-main text-18 medium"} text={ru.aboutStore} onClick={this.aboutStore}/>
                </div>
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
        setDataViewIndicatorFunction: (dataViewIndicator) => {
            dispatch(actionSetDataViewIndicator(dataViewIndicator))
        },
        allProductsDataFunction: (AllProductsData) => {
            dispatch(actionAllProductsData(AllProductsData))
        },
        setDataToAdminPanelFunction: (dataView) => {
            dispatch(actionSetDataToAdminPanel(dataView))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(ShopCard);
