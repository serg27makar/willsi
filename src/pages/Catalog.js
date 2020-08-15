import React from 'react';
import {setActionAdminPanel} from "../action";
import {connect} from "react-redux";
import CatalogTopEnvironment from "../components/CatalogTopEnvironment";
import {dropdownListArr, productArr, sidebarCatalogArr} from "../access/temporaryConstants";
import RutCatalogSidebar from "../components/RutCatalogSidebar";
import CatalogSidebar from "../components/CatalogSidebar";
import BreadcrumbsBg from "../components/BreadcrumbsBg";
import ShowProductsBar from "../components/ShowProductsBar";
import ProductsCart from "../components/ProductsCart";
import  { Redirect } from 'react-router-dom'

const breadcrumbs = {
    title: "Женская одежда",
    links: [
        "Каталог",
        "Одежда",
        "Женская одежда",
    ]
};

class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subUsers:[],
            reDirect: false,
        }
    }

    componentDidMount() {
        this.props.setActionAdminPanelFunction("Catalog");
        setTimeout(() => {
            if (this.props.UsersParameters && (this.props.UsersParameters.length < 1 ||
               ( this.props.UsersParameters[0].Parameters &&
                this.props.UsersParameters[0].Parameters.length < 1))) {
                this.setState({
                    reDirect: true
                })
            }
        }, 300);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.UsersParameters !== this.state.subUsers) {
            this.setState({
                subUsers: this.props.UsersParameters,
            });
        }
    }

    render() {
        if (this.state.reDirect) {
            return (
                <Redirect to={"/data"}/>
            )
        }
        return(
            <div className="content">
                <BreadcrumbsBg  breadcrumbs={breadcrumbs}/>
                <CatalogTopEnvironment  subUsers={this.state.subUsers}/>
                <div className="catalog-middle container">
                    <div className="footer-row-wrap">
                            <div className="catalog-sidebar">
                                <RutCatalogSidebar Categories={dropdownListArr}/>
                                <CatalogSidebar Categories={sidebarCatalogArr}/>
                            </div>
                        <div className="col-12">
                            <ShowProductsBar subUsers={this.state.subUsers}/>
                            <ProductsCart products={productArr}/>
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

export default connect(MapStateToProps, mapDispatchToProps)(Catalog);

