import {dropdownListArr} from "../../access/temporaryConstants";
import MainListCatalogProducts from "./MainListCatalogProducts";
import React from "react";
import DropdownList from "../DropdownList";
import {actionDataRedirect, actionOpenModal, setActionAdminPanel} from "../../action";
import {connect} from "react-redux";

class AdminSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerItem: "",
            StoreArr: []
        };
        this.addStore = this.addStore.bind(this);
        this.changeItem = this.changeItem.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.StoreArr !== this.props.StoreArr) {
            this.setState({
                StoreArr: this.props.StoreArr
            })
        }
    }

    changeItem(index) {
        this.setState({
            headerItem: this.state.StoreArr[index].nameStore
        })
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
                <MainListCatalogProducts catalogProducts={dropdownListArr}/>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        dataRedirect: state.pageReducer.dataRedirect,
        StoreArr: state.storeReducer.StoreArr,
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
