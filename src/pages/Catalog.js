import React from 'react';
import {
    actionAddUser,
    actionAlertText,
    actionCatalogName,
    actionDataRedirect,
    actionManufacturer,
    actionNewUser,
    actionOpenModal,
    actionProductsArr,
    actionRecalculateParams,
    actionSubCatalogName,
    setActionAdminPanel
} from "../action";
import {connect} from "react-redux";
import CatalogTopEnvironment from "../components/CatalogTopEnvironment";
import {dropdownListArr} from "../access/temporaryConstants";
import RutCatalogSidebar from "../components/RutCatalogSidebar";
import CatalogSidebar from "../components/CatalogSidebar";
import BreadcrumbsBg from "../components/BreadcrumbsBg";
import ProductsCart from "../components/ProductsCart";
import {Redirect} from "react-router-dom";
import {getAllProductDataToParams, getProductDataToParams} from "../utilite/axiosConnect";
import {genderSwitcher, isValidStartParams} from "../js/sharedFunctions";
import CountryDropDown from "../components/CountryDropDown";
import {sizeListTshirts} from "../access/recalculateConstants";
import {langCode} from "../access/lang/translaterJS";

class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            requiredParameters: {},
            subUsers:[],
            productArr: [],
            subCatalog: "",
            skip: 0,
            lastData: true,
            firstTime: true,
            active: false,
            catalogName: "",
            isSetManufacturer: true,
        };
        this.setProductData = this.setProductData.bind(this);
        this.onScrollList = this.onScrollList.bind(this);
        this.selectedSubCatalog = this.selectedSubCatalog.bind(this);
        this.updateProductsData = this.updateProductsData.bind(this);
        this.setManufacturer = this.setManufacturer.bind(this);
        this.setCatalogName = this.setCatalogName.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setCatalogName();
            this.redirect("", false);
            if (this.props.SearchParams && this.props.catalogName && this.state.firstTime) {
                this.changeSizeData();
            }
            this.props.setActionAdminPanelFunction("Catalog");
            this.functionRedirect();
            if (this.props.selectedSubCatalogID) {
                this.selectedSubCatalog(this.props.selectedSubCatalogID);
            }
            window.addEventListener('scroll', this.onScrollList);
        }, 50);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.catalogName !== this.props.catalogName ||
            prevProps.subCatalogName !== this.props.subCatalogName) {
            this.setState({
                ...this.state,
                isSetManufacturer: true
            })
        }
        if ((prevProps.UsersParameters !== this.props.UsersParameters) ||
            (prevProps.Permission !== this.props.Permission)) {
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
        if (prevProps.alertModalCloseEvent !== this.props.alertModalCloseEvent) {
            this.props.recalculateParamsFunction(this.state.requiredParameters);
            this.props.openModalFunction("recalculateModal");
        }
        if ((prevProps.searchItemColor !== this.props.searchItemColor) ||
            (prevProps.searchItemPrice !== this.props.searchItemPrice) ||
            (prevProps.setCountry !== this.props.setCountry) ||
            (prevProps.searchItemNew !== this.props.searchItemNew) ||
            (prevProps.searchItemParams !== this.props.searchItemParams) ||
            (prevState.active !== this.state.active && this.props.SearchParams && this.state.active) ||
            (prevProps.SetActionPostpone !== this.props.SetActionPostpone)) {
            if (this.props.UsersParameters.length) {
                setTimeout(() => {
                    this.updateProductsData();
                }, 50)
            }
        }
        if (prevProps.HeaderUser !== this.props.HeaderUser) {
            this.setCatalogName();
        }
        if (prevProps.selectedSubCatalogID !== this.props.selectedSubCatalogID) {
            this.selectedSubCatalog(this.props.selectedSubCatalogID);
        }
        if (prevProps.Permission !== this.props.Permission) {
            if (this.props.Permission === "primaryAdmin") {
                this.redirect("primary-admin-panel")
            }
        }
    }

    redirect(page, accessR = true) {
        this.props.dataRedirectFunction({
            accessR,
            to: "/" + page,
        });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScrollList);
    }

    onScrollList(event) {
        if((event.target.scrollingElement.scrollTop > document.scrollingElement.offsetHeight - window.outerHeight) && !this.state.lastData) {
            // this.updateProductsData();
        }
    }

    selectedSubCatalog(data = 0) {
        if (this.props.catalog >= 0)
        this.setState({
            ...this.state,
            subCatalog: dropdownListArr[this.props.catalog || 0].dropdownItems[data],
            topCatalog: dropdownListArr[this.props.catalog || 0].dropdownTitle,
            skip: 0,
            lastData: false,
            active: !this.state.active,
        });
    }

    changeSizeData() {
        this.setState({
            ...this.state,
            topCatalog: this.props.catalogName,
            subCatalog: this.state.subCatalog,
            skip: 0,
            lastData: false,
            active: !this.state.active,
        });
    }

    setCatalogName() {
        if (this.props.UsersParameters && this.props.UsersParameters.length &&
            this.props.UsersParameters.length > this.props.HeaderUser && this.props.HeaderUser) {
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
            if (!isValidStartParams(this.props.UsersParameters, this.props.HeaderUser)) {
                this.props.newUserFunction(this.props.HeaderUser);
                // this.props.addUserFunction(true);
                setTimeout(() => {
                    this.redirect("data");
                }, 60)

            }
        }
    }

    setDefaultSubCatalog() {
        let subCatalog = ""
        dropdownListArr.map(item => {
            if (item.dropdownTitle === this.state.topCatalog) {
                subCatalog = item.dropdownItems[0];
            }
            return subCatalog;
        })
        return subCatalog;
    }

    updateProductsData() {
        const skip = this.state.skip;
        const SearchParams = this.props.SearchParams;
        const searchItemParams = this.props.searchItemParams;
        const searchItemNew = this.props.searchItemNew;
        const searchItemColor = this.props.searchItemColor;
        const searchItemPrice = this.props.searchItemPrice;
        const topCatalog = this.state.topCatalog;
        let subCatalog = this.state.subCatalog;
        const country = this.props.setCountry;
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
        if (!subCatalog ) {
            subCatalog = this.setDefaultSubCatalog();
        }
        const dataSearch = {
            skip,
            SearchParams,
            topCatalog,
            subCatalog,
            searchItemParams,
            searchItemNew,
            searchItemColor,
            searchItemPrice,
            country
        };
        this.props.subCatalogNameFunction(subCatalog);
        if (subCatalog.substr(subCatalog.length - 3, 3) === "All") {
            getAllProductDataToParams(this.setProductData, dataSearch);
        } else if (accessRequired) {
            getProductDataToParams(this.setProductData, dataSearch);
        } else {
            this.props.alertTextFunction(langCode(this.props.lang, "inOrderToContinue"));
            this.props.openModalFunction("alertModal");
        }
    }

    setManufacturer(data) {
        if (this.state.isSetManufacturer) {
            const catalogItemsSearch = [];
            const catalogItems = [];
            if (data) {
                data.map(item => {
                    if (catalogItemsSearch.indexOf(item.Manufacturer.toUpperCase()) === -1) {
                        catalogItemsSearch.push(item.Manufacturer.toUpperCase());
                        catalogItems.push(item.Manufacturer);
                    }
                    return catalogItems;
                })
            }
            this.props.manufacturerFunction(catalogItems);
            this.setState({
                ...this.state,
                isSetManufacturer: false
            })
        }
    }

    setProductData(data) {
        const lastData = data.length < 12 && data.length > 0;
        if (data.length > 0) {
            data.sort((a, b) => {
                return b.Parameters.compatibility * 100 - a.Parameters.compatibility * 100
            });
            this.setManufacturer(data);
            this.setState({
                ...this.state,
                productArr: data,
                lastData
            })
            this.props.productsArrFunction(data);
        } else {
            this.props.productsArrFunction([]);
            this.setState({
                ...this.state,
                productArr: [],
            });
            if (isValidStartParams(this.props.UsersParameters, this.props.HeaderUser)) {
                this.props.openModalFunction("nothingToShowModal");
            }
        }
    }

    functionRedirect() {
        if (this.props.Permission === "primaryAdmin") {
            this.redirect("primary-admin-panel")
        }
        if (!this.props.UsersParameters || (this.props.UsersParameters && !this.props.UsersParameters.length) ||
            (this.props.UsersParameters[0].Parameters && !this.props.UsersParameters[0].Parameters.length) ||
            (this.props.UsersParameters[0].Parameters.length < sizeListTshirts.length)
        ) {
            this.props.addUserFunction(true);
            this.redirect("data")
        }
    }

    render() {
        if (this.props.dataRedirect.accessR) {
            return(
                <Redirect to={this.props.dataRedirect.to}/>
            )
        }
        return(
            <div className="content">
                <BreadcrumbsBg/>
                <CatalogTopEnvironment  subUsers={this.state.subUsers}/>
                <div className="catalog-middle container">
                    <div className="footer-row-wrap">
                        <div className="catalog-sidebar">
                            <RutCatalogSidebar Categories={dropdownListArr}/>
                            <CatalogSidebar/>
                            <CountryDropDown/>
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
        searchItemNew: state.catalogReducer.searchItemNew,
        searchItemColor: state.catalogReducer.searchItemColor,
        searchItemPrice: state.catalogReducer.searchItemPrice,
        setCountry: state.utiliteReducer.setCountry,
        SearchParams: state.productReducer.SearchParams,
        alertModalCloseEvent: state.modalReducer.alertModalCloseEvent,
        Permission: state.userReducer.Permission,
        SetActionPostpone: state.userReducer.SetActionPostpone,
        subCatalogName: state.catalogReducer.subCatalogName,
        Manufacturer: state.catalogReducer.Manufacturer,
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
        addUserFunction: (AddUser) => {
            dispatch(actionAddUser(AddUser))
        },
        manufacturerFunction: (Manufacturer) => {
            dispatch(actionManufacturer(Manufacturer))
        },
        subCatalogNameFunction: (SubCatalogName) => {
            dispatch(actionSubCatalogName(SubCatalogName))
        },
        newUserFunction: (NewUser) => {
            dispatch(actionNewUser(NewUser))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Catalog);

