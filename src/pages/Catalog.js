import React from 'react';
import {
    actionAlertText,
    actionCatalogName,
    actionDataRedirect,
    actionOpenModal,
    actionProductsArr,
    actionRecalculateParams,
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
import {getAllProductDataToParams, getProductDataToParams} from "../utilite/axiosConnect";
import {genderSwitcher} from "../js/sharedFunctions";
import ru from "../access/lang/LangConstants";

class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            requiredParameters: {},
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
        if (this.props.selectedSubCatalogID !== -1) {
            this.selectedSubCatalog(this.props.selectedSubCatalogID);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.UsersParameters !== this.props.UsersParameters) {
            this.functionRedirect();
        }
        if ((prevProps.SearchParams !== this.props.SearchParams ||
            prevProps.catalogName !== this.props.catalogName)
            && this.props.SearchParams && this.props.catalogName && this.state.firstTime) {
            this.setState({
                ...this.state,
                firstTime: false,
            });
            this.changeSizeData();
        }
        if ((prevProps.SearchParams !== this.props.SearchParams ||
            prevProps.catalogName !== this.props.catalogName) && !this.state.firstTime) {
            this.changeSizeData();
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
                ...this.state,
                redirect: this.props.dataRedirect,
            })
        }
        if (prevProps.alertModalCloseEvent !== this.props.alertModalCloseEvent) {
            this.props.recalculateParamsFunction(this.state.requiredParameters);
            this.props.openModalFunction("recalculateModal");
        }
        if (prevState.active !== this.state.active && this.props.SearchParams) {
            this.updateProductsData();
        }
        if (prevProps.searchItemParams !== this.props.searchItemParams) {
            this.updateProductsData();
        }
        if (prevProps.searchItemColor !== this.props.searchItemColor) {
            this.updateProductsData();
        }
        if (prevProps.HeaderUser !== this.props.HeaderUser) {
            this.setCatalogName();
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
        const searchItemParams = this.props.searchItemParams;
        const searchItemColor = this.props.searchItemColor;
        const topCatalog = this.state.topCatalog;
        const subCatalog = this.state.subCatalog;
        const requiredParameters = genderSwitcher(topCatalog, subCatalog);

        this.setState({
            ...this.state,
            requiredParameters,
        });

        let accessRequired = true;
        requiredParameters.map((item) => {
            if (accessRequired) {
                accessRequired = SearchParams[item.inputName]
            }
            return accessRequired;
        });
        if (accessRequired) {
            const dataSearch = {
                skip,
                SearchParams,
                topCatalog,
                subCatalog,
                searchItemParams,
                searchItemColor,
            };
            if (!subCatalog) {
                getAllProductDataToParams(this.setProductData, dataSearch);
            } else {
                getProductDataToParams(this.setProductData, dataSearch);
            }
            // this.setState({skip: skip + 12})
        } else {
            this.props.alertTextFunction(ru.enterTheseDetails);
            this.props.openModalFunction("alertModal");
        }
    }

    selectedSubCatalog(data) {
        this.setState({
            ...this.state,
            subCatalog: dropdownListArr[this.props.catalog].dropdownItems[data],
            topCatalog: dropdownListArr[this.props.catalog].dropdownTitle,
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
            subCatalog: "",
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
            this.props.productsArrFunction(data);
            this.setState({
                ...this.state,
                productArr: data,
                lastData
            })
        } else {
            this.props.productsArrFunction([]);
            this.setState({
                ...this.state,
                productArr: [],
            });
        }
    }

    functionRedirect() {
        setTimeout(() => {
            if ((this.props.UsersParameters && this.props.UsersParameters.length < 1) ||
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
        searchItemParams: state.catalogReducer.searchItemParams,
        searchItemColor: state.catalogReducer.searchItemColor,
        SearchParams: state.productReducer.SearchParams,
        alertModalCloseEvent: state.modalReducer.alertModalCloseEvent,
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
        openModalFunction: (modal) => {
            dispatch(actionOpenModal(modal))
        },
        alertTextFunction: (text) => {
            dispatch(actionAlertText(text))
        },
        recalculateParamsFunction: (recalculateParams) => {
            dispatch(actionRecalculateParams(recalculateParams))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Catalog);

