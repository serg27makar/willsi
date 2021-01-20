import React from 'react';
import {actionDataRedirect, actionOpenCatalog, setActionAdminPanel} from "../action";
import {connect} from "react-redux";
import CatalogTopEnvironment from "../components/CatalogTopEnvironment";
import CatalogSidebar from "../components/CatalogSidebar";
import {dropdownListArr} from "../access/temporaryConstants";
import RutCatalogSidebar from "../components/RutCatalogSidebar";
import BreadcrumbsBg from "../components/BreadcrumbsBg";
import ProductsCart from "../components/ProductsCart";
import {Redirect} from "react-router-dom";
import {getPostpone} from "../utilite/axiosConnect";
import CountryDropDown from "../components/CountryDropDown";

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
            products: [],
            redirect: {
                accessR: false,
                to: "",
            },
        };
        this.dataResult = this.dataResult.bind(this);
    }

    componentDidMount() {
        this.props.dataRedirectFunction({
            accessR: false,
            to: "/",
        });
        this.props.setActionAdminPanelFunction("Postpone");
        this.props.openCatalogFunction(-1);
        if (this.props.Postpone && this.props.Postpone.length > 0) {
            getPostpone(this.props.Postpone, this.dataResult);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.UsersParameters !== this.state.subUsers) {
            this.setState({
                subUsers: this.props.UsersParameters,
            })
        }
        if (prevProps.dataRedirect !== this.props.dataRedirect) {
            this.setState({
                redirect: this.props.dataRedirect,
            })
        }
        if (prevProps.Postpone !== this.props.Postpone || prevProps.SetActionPostpone !== this.props.SetActionPostpone) {
            if (this.props.Postpone.length > 0) {
                getPostpone(this.props.Postpone, this.dataResult);
            } else {
                this.setState({
                    ...this.state,
                    products: [],
                });
            }
        }
        if (prevProps.Permission !== this.props.Permission) {
            if (this.props.Permission === "primaryAdmin") {
                this.redirect("primary-admin-panel")
            }
        }
        if ((prevProps.searchItemParams !== this.props.searchItemParams) ||
        (prevProps.searchItemNew !== this.props.searchItemNew) ||
        (prevProps.searchItemColor !== this.props.searchItemColor) ||
        (prevProps.searchItemPrice !== this.props.searchItemPrice) ||
        (prevProps.setCountry !== this.props.setCountry)) {
            this.redirect();
        }
    }

    redirect(page = "catalog") {
        this.props.dataRedirectFunction({
            accessR: true,
            to: "/" + page,
        });
    }

    dataResult(data) {
        if (data && data.length > 0) {
            data.sort((a, b) => {
                return b.compatibility * 100 - a.compatibility * 100
            });
            this.setState({
                ...this.state,
                products: data,
            });
        } else {
            this.setState({
                ...this.state,
                products: [],
            });
        }
    }

    render() {
        if (this.state.redirect.accessR) {
            return(
                <Redirect to={this.state.redirect.to}/>
            )
        }
        return(
            <div className="content">
                <BreadcrumbsBg breadcrumbs={breadcrumbs}/>
                <CatalogTopEnvironment  subUsers={this.state.subUsers}/>
                <div className="catalog-middle container">
                    <div className="footer-row-wrap">
                        <div className="catalog-sidebar">
                            <RutCatalogSidebar Categories={dropdownListArr}/>
                            <CatalogSidebar/>
                            <CountryDropDown/>
                        </div>
                        <div className="col-12">
                            <ProductsCart products={this.state.products} catalog={true}/>
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
        Postpone: state.userReducer.Postpone,
        dataRedirect: state.pageReducer.dataRedirect,
        SetActionPostpone: state.userReducer.SetActionPostpone,
        Permission: state.userReducer.Permission,
        selectedSubCatalogID: state.catalogReducer.selectedSubCatalogID,
        searchItemParams: state.catalogReducer.searchItemParams,
        searchItemNew: state.catalogReducer.searchItemNew,
        searchItemColor: state.catalogReducer.searchItemColor,
        searchItemPrice: state.catalogReducer.searchItemPrice,
        setCountry: state.utiliteReducer.setCountry,
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
        openCatalogFunction: (catalog) => {
            dispatch(actionOpenCatalog(catalog))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Postpone);

