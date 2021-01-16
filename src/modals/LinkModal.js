import React from "react";
import ButtonMain from "../components/shared/ButtonMain";
import {
    actionAlertText,
    actionCatalogName,
    actionDataRedirect,
    actionGender,
    actionOpenModal,
    actionProductID,
    actionProductsArr,
    actionRecalculateParams,
    actionSearchParams,
    actionSubCatalogName,
    actionThingToLink
} from "../action";
import {connect} from "react-redux";
import ru from "../access/lang/LangConstants";
import {getParametersToIdBySearchParams, getProductsByLink} from "../utilite/axiosConnect";
import {genderSwitcher, setGenderByCatalogName} from "../js/sharedFunctions";

class LinkModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            linkProduct: "",
            errorText: "",
            params: {},
        }
        this.dataOnChange = this.dataOnChange.bind(this);
        this.clearInput = this.clearInput.bind(this);
        this.findProduct = this.findProduct.bind(this);
        this.result = this.result.bind(this);
        this.searchParameters = this.searchParameters.bind(this);
        this.closeLincModal = this.closeLincModal.bind(this);
        this.fillingParams = this.fillingParams.bind(this);
        this.paramsResult = this.paramsResult.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.fillingParams();
        }, 300)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.UsersParameters !== this.props.UsersParameters ||
            prevProps.HeaderUser !== this.props.HeaderUser) {
            this.fillingParams();
        }
    }

    fillingParams() {
        if (this.props.UsersParameters && this.props.UsersParameters.length > 0 ) {
            const params = this.props.UsersParameters[this.props.HeaderUser || 0].Parameters;
            this.setState({
                params,
            });
            this.searchParameters(params);
        } else {
            this.props.searchParamsFunction([]);
        }
    }

    closeLincModal = () => {
        this.props.openModalFunction("");
    };

    clearInput() {
        this.setState({
            ...this.state,
            linkProduct: "",
            errorText: "",
        })
    }

    searchParameters(params) {
        let searchParams = {};
        params.map((item) => {
            searchParams = {
                ...searchParams,
                [item.title]: item.size,
            };
            return searchParams;
        });
        this.props.searchParamsFunction(searchParams);
    }

    dataOnChange(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            ...this.state,
            linkProduct: e.target.value,
            errorText: "",
        })
    }

    findProduct() {
        if (this.state.linkProduct) {
            getProductsByLink({"link": this.state.linkProduct}, this.result);
        } else {
            this.setState({
                ...this.state,
                errorText: ru.thisFieldCannotBeEmpty,
            })
        }
    }

    paramsResult(data) {
        let Product = this.props.ProductsArr[0];
        Product = {
            ...Product,
            Parameters: data,
        }
        this.props.productsArrFunction([Product]);
        this.props.dataRedirectFunction({
            accessR: true,
            to: "/cart",
        })
        this.props.openModalFunction("");
    }

    result(data) {
        if (data.length) {
            this.props.thingToLinkFunction(true);
            this.props.productsArrFunction(data);
            this.props.subCatalogNameFunction(data[0].subCatalog);
            this.props.catalogNameFunction(data[0].topCatalog);
            this.props.productIDFunction(data[0]._id);
            const requiredParameters = genderSwitcher(data[0].topCatalog, data[0].subCatalog);
            const SearchParams = this.props.SearchParams;
            const unknownParams = [];
            requiredParameters.map(item => {
                if (!SearchParams[item.inputName]) {
                    unknownParams.push(item)
                }
                return unknownParams;
            });
            if (unknownParams.length) {
                if (!this.props.UsersParameters.length) {
                    const Gender = setGenderByCatalogName(data[0].topCatalog);
                    this.props.genderFunction(Gender);
                }
                this.props.recalculateParamsFunction(unknownParams);
                this.props.alertTextFunction(ru.weFoundThisProduct);
                this.props.openModalFunction("alertLinkModal");
            } else {
                const searchParams = {
                    ProductID: data[0]._id,
                    topCatalog: data[0].topCatalog,
                    subCatalog: data[0].subCatalog,
                    SearchParams: this.props.SearchParams,
                }
                getParametersToIdBySearchParams(searchParams, this.paramsResult);
            }
        } else {
            this.props.openModalFunction("wowSecondModal");
        }
    }

    renderErrorText() {
        if (this.state.errorText)
            return (
                <span className="modal-input-error-text text-14">{this.state.errorText}</span>
            )
    }

    render() {
        return(
            <div className="modal-envelope" id="modal-link">
                <div className="modal-envelope__close" onClick={this.closeLincModal}>
                    <svg className="icon">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#close"/>
                    </svg>
                </div>
                <div className="modal-envelope__body">
                    <p className="modal-envelope__title title-36 uppercase bold">{ru.checkTheConformity}</p>
                    <p className="modal-envelope__sub-info text-16 bold">{ru.linkToTheProduct}</p>
                    <div className="modal-form">
                        <label className="modal-form__label">
                            <input className="modal-form__input input-link text-18 light"
                                   type="text"
                                   name="linkProduct"
                                   placeholder={ru.linkToTheProduct}
                                   value={this.state.linkProduct}
                                   onChange={this.dataOnChange}
                            />
                            {this.renderErrorText()}
                        </label>
                        <div className="modal-form__button-enter">
                            <ButtonMain btnClass={"button-enter button-main text-18 medium"} text={ru.find} onClick={this.findProduct}/>
                        </div>
                        <div className="modal-form__bottom-clear text-16 light" onClick={this.clearInput}>
                            <div className="modal-form__bottom-link color-aqua">{ru.clear}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function MapStateToProps(state) {
    return {
        modal: state.modalReducer.modal,
        UsersParameters: state.userReducer.UsersParameters,
        SearchParams: state.productReducer.SearchParams,
        ProductsArr: state.productReducer.ProductsArr,
        HeaderUser: state.userReducer.HeaderUser,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        openModalFunction: (modal) => {
            dispatch(actionOpenModal(modal))
        },
        searchParamsFunction: (SearchParams) => {
            dispatch(actionSearchParams(SearchParams))
        },
        recalculateParamsFunction: (recalculateParams) => {
            dispatch(actionRecalculateParams(recalculateParams))
        },
        productsArrFunction: (ProductsArr) => {
            dispatch(actionProductsArr(ProductsArr))
        },
        productIDFunction: (ProductID) => {
            dispatch(actionProductID(ProductID))
        },
        subCatalogNameFunction: (SubCatalogName) => {
            dispatch(actionSubCatalogName(SubCatalogName))
        },
        catalogNameFunction: (catalogName) => {
            dispatch(actionCatalogName(catalogName))
        },
        thingToLinkFunction: (thingToLink) => {
            dispatch(actionThingToLink(thingToLink))
        },
        dataRedirectFunction: (dataRedirect) => {
            dispatch(actionDataRedirect(dataRedirect))
        },
        genderFunction: (Gender) => {
            dispatch(actionGender(Gender))
        },
        alertTextFunction: (text) => {
            dispatch(actionAlertText(text))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(LinkModal);
