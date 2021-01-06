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
import ru from "../access/lang/LangConstants";
import CardDescription from "../components/CardDescription";
import CartTabs from "../components/CartTabs";
import CircleLevel from "../components/shared/CircleLevel";
import {handlePageUp} from "../js/visualEffects";
import {Redirect} from "react-router-dom";
import PerfectThings from "../components/PerfectThings";

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subUsers:[],
            slidersArr: [],
            SelectProduct: {},
            redirect: {
                accessR: false,
                to: "",
            },
        };
    }

    componentDidMount() {
        this.props.ProductsArr.map((item, index) => {
            if (item._id === this.props.ProductID) {
                this.props.selectProductFunction(this.props.ProductsArr[index]);
                this.props.subCatalogNameFunction(this.props.ProductsArr[index].subCatalog);
            }
            return index;
        });
        this.props.dataRedirectFunction({
            accessR: false,
            to: "/",
        });
        this.props.thingToLinkFunction(false);
        if (this.props.ProductsArr.length < 1) {
            this.props.dataRedirectFunction({
                accessR: true,
                to: "/catalog",
            });
        }
        this.props.setActionAdminPanelFunction("Cart");
        setTimeout(() => {
            handlePageUp();
        }, 50);
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
        if (prevState.ProductID !== this.props.ProductID) {
            this.setState({
                ProductID: this.props.ProductID,
            });
            this.props.ProductsArr.map((item, index) => {
                if (item._id === this.props.ProductID) {
                    this.props.selectProductFunction(this.props.ProductsArr[index]);
                }
                return index;
            });
        }
        if (prevProps.SelectProduct !== this.props.SelectProduct) {
            const {Photo1, Photo2, Photo3} = this.props.SelectProduct;
            this.setState({
                SelectProduct: this.props.SelectProduct,
                slidersArr: [Photo1, Photo2, Photo3],
            })
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

    renderSlide = () => {
        return (
            <Carousel slidersArr={this.state.slidersArr}/>
            )
    };

    render() {
        if (this.state.redirect.accessR) {
            return(
                <Redirect to={this.state.redirect.to}/>
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
                                <span className="most-suitable-size text-14">{ru.mostSuitableSize + SizeStandard}</span>
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
                                <h2 className="ideal-product__title title-36 uppercase">{ru.FewPerfectThings}</h2>
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

