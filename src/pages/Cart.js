import React from 'react';
import "./../access/css/cart.css";
import {actionDataRedirect, setActionAdminPanel} from "../action";
import {connect} from "react-redux";
import Carousel from "../components/Carousel";
import CatalogTopEnvironment from "../components/CatalogTopEnvironment";
import {productArr, slidersArr} from "../access/temporaryConstants";
import BreadcrumbsBg from "../components/BreadcrumbsBg";
import ProductsCart from "../components/ProductsCart";
import ButtonMain from "../components/shared/ButtonMain";
import ru from "../access/lang/LangConstants";
import CardDescription from "../components/CardDescription";
import CartTabs from "../components/CartTabs";
import CircleLevel from "../components/shared/CircleLevel";
import {handlePageUp} from "../js/visualEffects";
import {Redirect} from "react-router-dom";

const breadcrumbs = {
    title: "Женская одежда",
    links: [
        "Каталог",
        "Одежда",
        "Женская одежда",
        "Красная рубашка",
    ]
};

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subUsers:[],
            redirect: {
                accessR: false,
                to: "",
            },
        };
    }

    componentDidMount() {
        this.props.dataRedirectFunction({
            accessR: false,
            to: "/",
        });
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
    }

    renderSlide = () => {
        return (
            <Carousel slidersArr={slidersArr}/>
            )
    };

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
                <div className="cart-info">
                    <div className="container">
                        <div className="footer-row-wrap">
                            <div className="col-12">
                                {this.renderSlide()}
                                <CircleLevel level={90}/>
                            </div>
                            <div className="col-12">
                               <CardDescription/>
                            </div>
                        </div>
                    </div>
                </div>
                <CartTabs/>
                <div className="ideal-product">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="ideal-product__title title-36 uppercase">{ru.FewPerfectThings}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <ProductsCart products={productArr} compilation={true}/>
                        <div className="col-12">
                            <ButtonMain btnClass={"button-refresh text-14 medium button-white"} text={ru.UpdateProduct}/>
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
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Cart);

