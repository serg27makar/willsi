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
import {getProductDataToParams} from "../utilite/axiosConnect";

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
            skip: 0,
            lastData: false,
            redirect: {
                accessR: false,
                to: "/",
            },
        };
        this.setProductData = this.setProductData.bind(this);
        this.onScrollList = this.onScrollList.bind(this);
        this.selectedCatalog = this.selectedCatalog.bind(this);
        this.selectedSubCatalog = this.selectedSubCatalog.bind(this);
        this.updateProductsData = this.updateProductsData.bind(this);
    }

    componentDidMount() {
        this.props.dataRedirectFunction({
            accessR: false,
            to: "/",
        });
        this.props.setActionAdminPanelFunction("Catalog");
        setTimeout(() => {
            handlePageUp();
        }, 50);
        this.functionRedirect();
        window.addEventListener('scroll', this.onScrollList);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.UsersParameters !== this.props.UsersParameters) {
            this.functionRedirect();
        }
        if (prevProps.SearchParams !== this.props.SearchParams) {
            this.changeSizeData();
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
        if (prevState.active !== this.state.active) {
            this.updateProductsData();
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScrollList);
    }

    onScrollList(event) {
        if((event.target.scrollingElement.scrollTop > document.scrollingElement.offsetHeight - window.outerHeight) && !this.state.lastData) {
            this.updateProductsData();
        }
    }

    updateProductsData() {
        const skip = this.state.skip;
        const SearchParams = this.props.SearchParams;
        const dataSearch = {
            skip,
            SearchParams,
            topCatalog: this.state.topCatalog,
            subCatalog: this.state.subCatalog,

        };
        getProductDataToParams(this.setProductData, dataSearch);
        this.setState({skip: skip + 12})
    }

    selectedSubCatalog(data) {
        this.setState({
            ...this.state,
            subCatalog: dropdownListArr[this.props.catalog].dropdownItems[data],
            productArr: [],
            skip: 0,
            lastData: false,
            active: !this.state.active,
        });
    }

    changeSizeData() {
        this.setState({
            ...this.state,
            productArr: [],
            skip: 0,
            lastData: false,
            active: !this.state.active,
        });
    }

    selectedCatalog(data) {
        this.setState({
            ...this.state,
            topCatalog: dropdownListArr[data].dropdownTitle,
            productArr: [],
            skip: 0,
            lastData: false,
            active: !this.state.active,
            subCatalog: "",
        });
    }

    setProductData(data) {
        if (data.length > 0) {
            const allProducts = this.state.productArr.concat(data);
            this.props.productsArrFunction(allProducts);
            this.setState({
                ...this.state,
                productArr: allProducts,
            })
        } else {
            this.setState({lastData: true})
        }
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
                            <RutCatalogSidebar
                                selectedSubCatalog={this.selectedSubCatalog}
                                selectedCatalog={this.selectedCatalog}
                                Categories={dropdownListArr}/>
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
        catalog: state.catalogReducer.catalog,
        SearchParams: state.productReducer.SearchParams,
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

