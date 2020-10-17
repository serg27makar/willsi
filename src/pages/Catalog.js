import React from 'react';
import {
    actionCatalogName,
    actionDataRedirect,
    actionProductsArr,
    setActionAdminPanel
} from "../action";
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

class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subUsers:[],
            productArr: [],
            skip: 0,
            lastData: true,
            firstTime: true,
            active: false,
            catalogName: "",
            redirect: {
                accessR: false,
                to: "/",
            },
        };
        this.setProductData = this.setProductData.bind(this);
        this.onScrollList = this.onScrollList.bind(this);
        this.selectedSubCatalog = this.selectedSubCatalog.bind(this);
        this.updateProductsData = this.updateProductsData.bind(this);
    }

    componentDidMount() {
        this.setCatalogName();
        if (this.props.SearchParams && this.props.catalogName && this.state.firstTime) {
            this.changeSizeData();
        }
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
        if ((prevProps.SearchParams !== this.props.SearchParams ||
            prevProps.catalogName !== this.props.catalogName)
            && this.props.SearchParams && this.props.catalogName && this.state.firstTime) {
            this.setState({
                firstTime: false,
            });
        }
        if ((prevProps.SearchParams !== this.props.SearchParams ||
            prevProps.catalogName !== this.props.catalogName) && !this.state.firstTime) {
            this.changeSizeData();
        }
        if (prevProps.catalogName !== this.props.catalogName) {
            this.setState({
                subCatalog: "",
            });
        }
        if (this.props.UsersParameters !== this.state.subUsers ||
            prevProps.update !== this.props.update) {
            this.setState({
                ...this.state,
                subUsers: this.props.UsersParameters,
            });
        }
        if (prevProps.updateEditorModal !== this.props.updateEditorModal) {
            this.setState({
                ...this.state,
                subUsers: [],
            });
        }
        if (prevProps.dataRedirect !== this.props.dataRedirect) {
            this.setState({
                redirect: this.props.dataRedirect,
            })
        }
        if (prevState.active !== this.state.active && this.props.SearchParams) {
            this.updateProductsData();
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScrollList);
    }

    onScrollList(event) {
        if((event.target.scrollingElement.scrollTop > document.scrollingElement.offsetHeight - window.outerHeight) && !this.state.lastData) {
            // this.updateProductsData();
        }
    }

    setCatalogName() {
        if (this.props.UsersParameters && this.props.HeaderUser) {
            let catalogName = "";
            const gender = this.props.UsersParameters[this.props.HeaderUser].Gender;
            switch (gender) {
                case "man":
                    catalogName = "catalogListMen";
                    break;
                case "woman":
                    catalogName = "catalogListWomen";
                    break;
                case "boy":
                    catalogName = "catalogListBoy";
                    break;
                case "girl":
                    catalogName = "catalogListGirl";
                    break;
                case "dog":
                    catalogName = "catalogListDog";
                    break;
                default : catalogName = "catalogListMen";
            }
            this.props.catalogNameFunction(catalogName);
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
            topCatalog: this.props.catalogName,
            productArr: [],
            skip: 0,
            lastData: false,
            active: !this.state.active,
        });
    }

    setProductData(data) {
        const lastData = data.length < 12 && data.length > 0;
        if (data.length > 0) {
            data.sort((a, b) => {
                return b.Parameters.compatibility - a.Parameters.compatibility
            });
            const allProducts = this.state.productArr.concat(data);
            this.props.productsArrFunction(allProducts);
            this.setState({
                ...this.state,
                productArr: allProducts,
                lastData
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
                <BreadcrumbsBg/>
                <CatalogTopEnvironment  subUsers={this.state.subUsers}/>
                <div className="catalog-middle container">
                    <div className="footer-row-wrap">
                        <div className="catalog-sidebar">
                            <RutCatalogSidebar
                                selectedSubCatalog={this.selectedSubCatalog}
                                Categories={dropdownListArr}
                            />
                            <CatalogSidebar Categories={sidebarCatalogArr}/>
                        </div>
                        <div className="col-12">
                            <ProductsCart catalog={true} products={this.state.productArr}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        modal: state.modalReducer.modal,
        updateEditorModal: state.modalReducer.updateEditorModal,
        page: state.pageReducer.page,
        UsersParameters: state.userReducer.UsersParameters,
        HeaderUser: state.userReducer.HeaderUser,
        update: state.pageReducer.update,
        dataRedirect: state.pageReducer.dataRedirect,
        catalog: state.catalogReducer.catalog,
        catalogName: state.catalogReducer.catalogName,
        selectedSubCatalogID: state.catalogReducer.selectedSubCatalogID,
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
        catalogNameFunction: (catalogName) => {
            dispatch(actionCatalogName(catalogName))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Catalog);

