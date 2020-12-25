import {dropdownListArr} from "../../access/temporaryConstants";
import MainListCatalogProducts from "./MainListCatalogProducts";
import React from "react";
import StoreDropdown from "./StoreDropdown";

class AdminSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="main-admin__sidebar sidebar">
                <div className="sidebar__button-list">
                    <StoreDropdown/>
                </div>
                <MainListCatalogProducts catalogProducts={dropdownListArr} productsThisStore={this.props.productsThisStore}/>
            </div>
        )
    }
}

export default AdminSidebar;
