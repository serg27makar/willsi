import ButtonList from "./ButtonList";
import {adminMenuBtnList, catalogProducts} from "../../access/temporaryConstants";
import ButtonIcon from "./ButtonIcon";
import MainListCatalogProducts from "./MainListCatalogProducts";
import React from "react";

class AdminSidebar extends React.Component {
    render() {
        return (
            <div className="main-admin__sidebar sidebar">
                <div className="sidebar__button-list">
                    <ButtonList btnList={adminMenuBtnList}/>
                    <ButtonIcon btnClass={"sidebar__button-menu"} btnImage={"static/img/svg-sprites/symbol/sprite.svg#menu-square"}/>
                </div>
                <MainListCatalogProducts catalogProducts={catalogProducts}/>
            </div>
        )
    }
}

export default AdminSidebar;
