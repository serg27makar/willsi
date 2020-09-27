import React from 'react';
import {actionDataRedirect, setActionAdminPanel} from "../action";
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
    }

    componentDidMount() {
        this.props.dataRedirectFunction({
            accessR: false,
            to: "/",
        });
        this.props.setActionAdminPanelFunction("Postpone");
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
            getPostpone(this.props.Postpone, this.dataResult);
        }
    }

    dataResult(data) {
        this.setState({
            ...this.state,
            products: data,
        });
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
                            {/*<RutCatalogSidebar Categories={dropdownListArr}/>*/}
                            <CatalogSidebar Categories={sidebarCatalogArr}/>
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
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Postpone);

