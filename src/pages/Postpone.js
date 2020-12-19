import React from 'react';
import {actionDataRedirect, actionOpenCatalog, actionSelectedSubCatalogID, setActionAdminPanel} from "../action";
import {connect} from "react-redux";
import CatalogTopEnvironment from "../components/CatalogTopEnvironment";
import CatalogSidebar from "../components/CatalogSidebar";
import {dropdownListArr, sidebarCatalogArr} from "../access/temporaryConstants";
import RutCatalogSidebar from "../components/RutCatalogSidebar";
import BreadcrumbsBg from "../components/BreadcrumbsBg";
import ProductsCart from "../components/ProductsCart";
import {handlePageUp} from "../js/visualEffects";
import {Redirect} from "react-router-dom";
import {getPostpone} from "../utilite/axiosConnect";

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
        this.selectedSubCatalog = this.selectedSubCatalog.bind(this);
    }

    componentDidMount() {
        this.props.dataRedirectFunction({
            accessR: false,
            to: "/",
        });
        this.props.setActionAdminPanelFunction("Postpone");
        this.props.selectedSubCatalogIDFunction(-1);
        this.props.openCatalogFunction(-1);
        setTimeout(() => {
            handlePageUp();
        }, 50);
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
    }

    redirect(page = "catalog") {
        this.props.dataRedirectFunction({
            accessR: true,
            to: "/" + page,
        });
    }

    selectedSubCatalog(data) {
        this.props.selectedSubCatalogIDFunction(data);
        this.props.dataRedirectFunction({
            accessR: true,
            to: "/catalog",
        });
    }

    dataResult(data) {
        if (data && data.length > 0) {
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
                            <RutCatalogSidebar
                                selectedSubCatalog={this.selectedSubCatalog}
                                Categories={dropdownListArr}
                            />
                            <CatalogSidebar/>
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
        selectedSubCatalogIDFunction: (selectedSubCatalogID) => {
            dispatch(actionSelectedSubCatalogID(selectedSubCatalogID))
        },
        openCatalogFunction: (catalog) => {
            dispatch(actionOpenCatalog(catalog))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Postpone);

