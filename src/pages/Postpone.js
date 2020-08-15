import React from 'react';
import {setActionAdminPanel} from "../action";
import {connect} from "react-redux";
import CatalogTopEnvironment from "../components/CatalogTopEnvironment";
import CatalogSidebar from "../components/CatalogSidebar";
import {dropdownListArr, postponeArr, sidebarCatalogArr} from "../access/temporaryConstants";
import RutCatalogSidebar from "../components/RutCatalogSidebar";
import BreadcrumbsBg from "../components/BreadcrumbsBg";
import ProductsCart from "../components/ProductsCart";
import ShowProductsBar from "../components/ShowProductsBar";

const breadcrumbs = {
    title: "Отложенные товары",
    links: [
        "Главная",
        "Отложенные товары"
    ]
};

class Postpone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subUsers:[],
        }
    }

    componentDidMount() {
        this.props.setActionAdminPanelFunction("Postpone");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.UsersParameters !== this.state.subUsers) {
            this.setState({
                subUsers: this.props.UsersParameters,
            })
        }
    }

    render() {
        return(
            <div className="content">
                <BreadcrumbsBg breadcrumbs={breadcrumbs}/>
                <CatalogTopEnvironment  subUsers={this.state.subUsers}/>
                <div className="catalog-middle container">
                    <div className="footer-row-wrap">
                        <div className="catalog-sidebar">
                            <RutCatalogSidebar Categories={dropdownListArr}/>
                            <CatalogSidebar Categories={sidebarCatalogArr}/>
                        </div>
                        <div className="col-12">
                            <ShowProductsBar subUsers={this.state.subUsers}/>
                            <ProductsCart products={postponeArr}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        page: state.pageReducer.page,
        UsersParameters: state.userReducer.UsersParameters,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setActionAdminPanelFunction: (page) => {
            dispatch(setActionAdminPanel(page))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Postpone);

