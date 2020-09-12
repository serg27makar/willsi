import React from 'react';
import {actionDataRedirect, actionProductsArr, setActionAdminPanel} from "../action";
import {connect} from "react-redux";
import CatalogTopEnvironment from "../components/CatalogTopEnvironment";
import {dropdownListArr, sidebarCatalogArr} from "../access/temporaryConstants";
import RutCatalogSidebar from "../components/RutCatalogSidebar";
import CatalogSidebar from "../components/CatalogSidebar";
import BreadcrumbsBg from "../components/BreadcrumbsBg";
import ProductsCart from "../components/ProductsCart";
import {handlePageUp} from "../js/visualEffects";
import {Redirect} from "react-router-dom";
import {getProductData} from "../utilite/axiosConnect";

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
            productArr: [],
            redirect: {
                accessR: false,
                to: "/",
            },
        };
        this.setProductData = this.setProductData.bind(this);
    }

    componentDidMount() {
        getProductData(this.setProductData);
        this.props.dataRedirectFunction({
            accessR: false,
            to: "/",
        });
        this.props.setActionAdminPanelFunction("Catalog");
        setTimeout(() => {
            handlePageUp();
        }, 50);
        this.functionRedirect();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.UsersParameters !== this.props.UsersParameters) {
            this.functionRedirect();
        }
        if (this.props.UsersParameters !== this.state.subUsers || prevProps.update !== this.props.update) {
            this.setState({
                ...this.state,
                subUsers: this.props.UsersParameters,
            });
        }
        if (prevProps.dataRedirect !== this.props.dataRedirect) {
            this.setState({
                redirect: this.props.dataRedirect,
            })
        }
    }

    setProductData(data) {
        this.props.productsArrFunction(data);
        this.setState({
            productArr: data,
        })
    }

    functionRedirect() {
        setTimeout(() => {
            if (this.props.UsersParameters.length < 1 ||
                ( this.props.UsersParameters[0].Parameters &&
                    this.props.UsersParameters[0].Parameters.length < 1)) {
                this.props.dataRedirectFunction({
                    accessR: true,
                    to: "/data",
                })
            }
        }, 500)
    }

    render() {
        if (this.state.redirect.accessR) {
            return(
                <Redirect to={this.state.redirect.to}/>
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
                            <ProductsCart products={this.state.productArr}/>
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
        update: state.pageReducer.update,
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
        productsArrFunction: (ProductsArr) => {
            dispatch(actionProductsArr(ProductsArr))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Catalog);

