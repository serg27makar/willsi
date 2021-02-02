import React from 'react';
import "./../access/css/cart.css";
import {
    actionDataRedirect,
    actionSelectProduct,
    actionSubCatalogName,
    actionThingToLink,
    setActionAdminPanel
} from "../action";
import {connect} from "react-redux";
import Carousel from "../components/Carousel";
import CatalogTopEnvironment from "../components/CatalogTopEnvironment";
import BreadcrumbsBg from "../components/BreadcrumbsBg";
import CardDescription from "../components/CardDescription";
import CartTabs from "../components/CartTabs";
import CircleLevel from "../components/shared/CircleLevel";
import {Redirect} from "react-router-dom";
import PerfectThings from "../components/PerfectThings";
import {subCatalogListGeneral} from "../access/temporaryConstants";
import {langCode} from "../access/lang/translaterJS";
import {isEmptyObject} from "../js/sharedFunctions";

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subUsers:[],
            slidersArr: [],
            SelectProduct: {},
        };
    }

    componentDidMount() {
        this.props.ProductsArr.map((item, index) => {
            if (item._id === this.props.ProductID) {
                this.props.subCatalogNameFunction(this.props.ProductsArr[index].subCatalog);
            }
            return index;
        });
        this.redirect("", false);
        this.props.thingToLinkFunction(false);
        if (!this.props.ProductsArr.length || isEmptyObject(this.props.SelectProduct)) {
            this.redirect("");
        }
        this.props.setActionAdminPanelFunction("Cart");
        if (this.props.SelectProduct) {
            this.fillSelectProduct();
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.UsersParameters !== this.state.subUsers) {
            this.setState({
                subUsers: this.props.UsersParameters,
            })
        }
        if (prevState.ProductID !== this.props.ProductID) {
            this.setState({
                ...this.state,
                ProductID: this.props.ProductID,
            });
        }
        if (prevProps.SelectProduct !== this.props.SelectProduct) {
            this.fillSelectProduct();
        }
        if (prevProps.Permission !== this.props.Permission) {
            if (this.props.Permission === "primaryAdmin") {
                this.redirect("primary-admin-panel")
            }
        }
    }

    fillSelectProduct() {
        const {Photo1, Photo2, Photo3} = this.props.SelectProduct;
        this.setState({
            SelectProduct: this.props.SelectProduct,
            slidersArr: [Photo1, Photo2, Photo3],
        })
    }

    redirect(page, accessR = true) {
        this.props.dataRedirectFunction({
            accessR,
            to: "/" + page,
        });
    }

    renderSizeStandard(SizeStandard, subCatalog) {
        if (subCatalogListGeneral.indexOf(subCatalog) === -1)
        return (
            <span className="most-suitable-size text-14">{langCode(this.props.lang, "mostSuitableSize") + SizeStandard}</span>
        )
    }

    renderSlide = () => {
        return (
            <Carousel slidersArr={this.state.slidersArr}/>
            )
    };

    render() {
        if (this.props.dataRedirect.accessR) {
            return(
                <Redirect to={this.props.dataRedirect.to}/>
            )
        }
        const compatibility = this.state.SelectProduct.Parameters && this.state.SelectProduct.Parameters.compatibility;
        const SizeStandard = this.state.SelectProduct.Parameters && this.state.SelectProduct.Parameters.SizeStandard;
        return(
            <div className="content">
                <BreadcrumbsBg />
                <CatalogTopEnvironment  subUsers={this.state.subUsers}/>
                <div className="cart-info">
                    <div className="container">
                        <div className="footer-row-wrap">
                            <div className="col-12">
                                {this.renderSlide()}
                                <CircleLevel level={compatibility}
                                             SizeStandard={SizeStandard}/>
                            </div>
                            <div className="col-12">
                                {this.renderSizeStandard(SizeStandard, this.state.SelectProduct.subCatalog)}
                               <CardDescription cardDescription={this.state.SelectProduct}/>
                            </div>
                        </div>
                    </div>
                </div>
                <CartTabs cardDescription={this.state.SelectProduct}/>
                <div className="ideal-product">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="ideal-product__title title-36 uppercase">{langCode(this.props.lang, "FewPerfectThings")}</h2>
                            </div>
                        </div>
                    </div>
                    <PerfectThings/>
                </div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        page: state.pageReducer.page,
        UsersParameters: state.userReducer.UsersParameters,
        dataRedirect: state.pageReducer.dataRedirect,
        ProductID: state.productReducer.ProductID,
        ProductsArr: state.productReducer.ProductsArr,
        SelectProduct: state.productReducer.SelectProduct,
        Permission: state.userReducer.Permission,
        lang: state.utiliteReducer.lang,
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
        selectProductFunction: (SelectProduct) => {
            dispatch(actionSelectProduct(SelectProduct))
        },
        subCatalogNameFunction: (SubCatalogName) => {
            dispatch(actionSubCatalogName(SubCatalogName))
        },
        thingToLinkFunction: (thingToLink) => {
            dispatch(actionThingToLink(thingToLink))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Cart);

