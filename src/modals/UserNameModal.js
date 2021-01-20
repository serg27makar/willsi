import React from "react";
import ButtonMain from "../components/shared/ButtonMain";
import {
    actionDataRedirect,
    actionHeaderUser,
    actionOpenModal,
    actionProductsArr,
    actionUsersParameters
} from "../action";
import {connect} from "react-redux";
import {getParametersToIdBySearchParams, getUserData, postUpdate} from "../utilite/axiosConnect";
import ModalInput from "./modalComponents/ModalInput";
import {dataInputRegistrationModal} from "../access/temporaryConstants";
import {langCode} from "../access/lang/translaterJS";

class UserNameModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            errorItem: "",
            errorText: "",
        }
        this.dataChange = this.dataChange.bind(this);
        this.addedName = this.addedName.bind(this);
        this.userDataUpdate = this.userDataUpdate.bind(this);
        this.closeLincModal = this.closeLincModal.bind(this);
        this.result = this.result.bind(this);
        this.paramsResult = this.paramsResult.bind(this);
    }

    closeLincModal() {
        this.props.openModalFunction("");
    };

    dataChange(e) {
        e.stopPropagation();
        const value = e.target.value;
        this.setState({
            ...this.state,
            name: value,
        })
    }

    result(res) {
        const searchParams = {
            ProductID: this.props.ProductsArr[0]._id,
            topCatalog: this.props.ProductsArr[0].topCatalog,
            subCatalog: this.props.ProductsArr[0].subCatalog,
            SearchParams: this.props.SearchParams,
        }
        getParametersToIdBySearchParams(searchParams, this.paramsResult)
        if (res) {
            this.props.usersParametersFunction(res.UsersParameters);
        }
    };

    paramsResult(data) {
        if (data.stop) {
            this.props.openModalFunction("nothingToShowModal");
        } else {
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
    }

    addedName() {
        let obj = this.props.UsersParameters[0];
        const UsersParameters = [];
        if (!this.state.name) {
            this.setState({
                ...this.state,
                errorItem: "name",
                errorText: langCode(this.props.lang, "enterYourName"),
            })
        } else {
            obj = {
                ...obj,
                UserName: this.state.name,
            }
            UsersParameters.push(obj)
            const user = {UsersParameters, UserID: this.props.UserID}
            postUpdate(user, this.userDataUpdate);
        }
    }

    userDataUpdate() {
        this.props.headerUserFunction(0);
        getUserData(this.result);
    }

    render() {
        return(
            <div className="modal-envelope">
                <div className="modal-envelope__close" onClick={this.closeLincModal}>
                    <svg className="icon">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#close"/>
                    </svg>
                </div>
                <div className="modal-envelope__body">
                    <span className="add-store-label text-20 welcome-about-env margin-1">{langCode(this.props.lang, "WhatCallParameters")}</span>
                    <ModalInput dataInput={dataInputRegistrationModal[0]}
                                dataValue={this.state}
                                dataOnChange={this.dataChange}
                                errorItem={this.state.errorItem}
                                errorText={this.state.errorText}/>
                    <div className="modal-form">
                        <div className="modal-form__button-enter">
                            <ButtonMain btnClass={"button-enter button-main text-20 uppercase medium margin-1"} text={langCode(this.props.lang, "Save")} onClick={this.addedName}/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

function MapStateToProps(state) {
    return {
        UserID: state.userReducer.UserID,
        modal: state.modalReducer.modal,
        UsersParameters: state.userReducer.UsersParameters,
        ProductsArr: state.productReducer.ProductsArr,
        SearchParams: state.productReducer.SearchParams,
        lang: state.utiliteReducer.lang,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        openModalFunction: (modal) => {
            dispatch(actionOpenModal(modal))
        },
        usersParametersFunction: (UsersParameters) => {
            dispatch(actionUsersParameters(UsersParameters))
        },
        headerUserFunction: (HeaderUser) => {
            dispatch(actionHeaderUser(HeaderUser))
        },
        dataRedirectFunction: (dataRedirect) => {
            dispatch(actionDataRedirect(dataRedirect))
        },
        productsArrFunction: (ProductsArr) => {
            dispatch(actionProductsArr(ProductsArr))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(UserNameModal);
