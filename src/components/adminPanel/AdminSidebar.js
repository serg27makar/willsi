import {dropdownListArr} from "../../access/temporaryConstants";
import MainListCatalogProducts from "./MainListCatalogProducts";
import React from "react";
import DropdownList from "../DropdownList";
import {actionDataRedirect, actionOpenModal} from "../../action";
import {connect} from "react-redux";

class AdminSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerItem: "",
            StoreArr: [],
            storeID: "",
        };
        this.addStore = this.addStore.bind(this);
        this.changeItem = this.changeItem.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.StoreArr !== this.props.StoreArr ||
            prevProps.addStore !== this.props.addStore) {
            if (this.props.StoreArr.length > 0) {
                const StoreID = this.state.storeID === "" ? this.props.StoreArr[0]._id : this.state.storeID;
                this.setState({
                    storeID: StoreID,
                    StoreArr: this.props.StoreArr
                });
                this.props.storeID(StoreID);
            }
        }
    }

    changeItem(index) {
        const StoreID = this.state.StoreArr[index]._id;
            this.setState({
            headerItem: this.state.StoreArr[index].nameStore,
            storeID: StoreID,
        });
        this.props.storeID(StoreID);
    }

    addStore() {
        this.props.openModalFunction("addServiceModal");
    }

    render() {
        return (
            <div className="main-admin__sidebar sidebar">
                <div className="sidebar__button-list">
                    <DropdownList
                        headerItem={this.state.headerItem}
                        subItem={this.state.StoreArr}
                        addItem={this.addStore}
                        changeItem={this.changeItem}
                    />
                </div>
                <MainListCatalogProducts catalogProducts={dropdownListArr} productsThisStore={this.props.productsThisStore}/>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        dataRedirect: state.pageReducer.dataRedirect,
        StoreArr: state.storeReducer.StoreArr,
        addStore: state.storeReducer.addStore,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        dataRedirectFunction: (dataRedirect) => {
            dispatch(actionDataRedirect(dataRedirect))
        },
        openModalFunction: (modal) => {
            dispatch(actionOpenModal(modal))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(AdminSidebar);
