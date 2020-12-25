import MainListCatalogProducts from "./MainListCatalogProducts";
import React from "react";
import StoreDropdown from "./StoreDropdown";
import {connect} from "react-redux";
import {dropdownListArr} from "../../access/temporaryConstants";
import {isEmptyObject} from "../../js/sharedFunctions";
import {getProductDataToId} from "../../utilite/axiosConnect";

class AdminSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productsThisStore: [],
            dropdownList: [],
        };
        this.productsData = this.productsData.bind(this);
    }

    componentDidMount() {
        const dropdownList = [];
        dropdownListArr.map((item, index) => {
            item.dropdownItems = item.dropdownItems.slice(1); // remove all category
            dropdownList.push(item);
        })
        this.setState({...this.state, dropdownList,})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.selectedStore !== this.props.selectedStore && !isEmptyObject(this.props.selectedStore)) {
            getProductDataToId(this.props.selectedStore._id, this.productsData);
        }
    }

    productsData(data) {
        if (data && data.length > 0) {
            this.setState({
                ...this.state,
                productsThisStore: data,
            });
        }
    }

    render() {
        return (
            <div className="main-admin__sidebar sidebar">
                <div className="sidebar__button-list">
                    <StoreDropdown/>
                </div>
                <MainListCatalogProducts dropdownList={this.state.dropdownList} productsThisStore={this.state.productsThisStore}/>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        selectedStore: state.storeReducer.selectedStore,
    }
}

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(MapStateToProps, mapDispatchToProps)(AdminSidebar);
