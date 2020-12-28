import React from "react";
import {
    actionAddStore,
    actionDataRedirect,
    actionOpenModal,
    actionProductsThisStore,
    actionSelectedStore,
    actionSetStoreArr,
    actionUserStore
} from "../action";
import {connect} from "react-redux";
import ru from "../access/lang/LangConstants";
import ButtonMain from "../components/shared/ButtonMain";
import {getStoreData, postStoreRegister, postUpdate} from "../utilite/axiosConnect";
import CountryModal from "./modalComponents/CountryModal";

class AddServiceModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameStore: "",
            urlStore: "",
            phoneStore: "",
            addressStore: "",
            errorItem: "",
            errorText: "",
        };
        this.dataSubmit = this.dataSubmit.bind(this);
        this.result = this.result.bind(this);
        this.updateResult = this.updateResult.bind(this);
        this.storeData = this.storeData.bind(this);
    }

    closeLincModal = () => {
        this.props.openModalFunction("");
    };

    dataOnChange = (e) => {
        e.stopPropagation();
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            ...this.state,
            [name]: value,
        });
    };

    result(res) {
        if (res.insertedId && res.insertedId.length > 12) {
            const UserStore = this.props.UserStore || [];
            const store = {
                storeID: res.insertedId,
                nameStore: this.state.nameStore
            };
            UserStore.push(store);
            this.props.userStoreFunction(UserStore);
            const user = {
                UserID: this.props.UserID,
                UserStore,
            };
            this.props.productsThisStoreFunction([]);
            this.props.selectedStoreFunction(res.ops[0]);
            postUpdate(user, this.updateResult);
        }
    }

    storeData(res) {
        if (res && res.length > 0) {
            this.props.setStoreArrFunction(res);
        }
        this.props.addStoreFunction(!this.props.addStore);
    }

    updateResult() {
        this.closeLincModal();
        if (this.props.page !== "AdminPanel") {
            this.props.dataRedirectFunction({
                accessR: true,
                to: "/admin-panel",
            });
        } else {
            getStoreData(this.storeData);
        }
    }

    dataSubmit() {
        const { nameStore, urlStore, phoneStore, addressStore} = this.state;
        const store = {
            adminID: this.props.UserID,
            countryStore: this.props.setCountry,
            nameStore,
            urlStore,
            phoneStore,
            addressStore
        };
        let errorItem = "";
        let errorText = "";
        if (!nameStore) {
            errorItem = "nameStore";
            errorText = ru.enterYourStoreName;
        } else if (!urlStore) {
            errorItem = "urlStore";
            errorText = ru.enterYourStoreUrl;
        } else if (!phoneStore) {
            errorItem = "phoneStore";
            errorText = ru.enterYourStorePhone;
        } else {
            postStoreRegister(store, this.result);
        }
        if (errorItem && errorText) {
            this.setState({...this.state, errorItem, errorText})
        }
    }

    renderErrorText(errorText) {
        return (
            <span className="modal-input-error-text text-12">{errorText}</span>
        )
    }

    render() {
        return (
            <div className="welcome-service modal-envelope">
                <div className="modal-envelope__close" onClick={this.closeLincModal}>
                    <svg className="icon icon-close ">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#close"/>
                    </svg>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h1 className="uppercase title-36 bold">{ru.AddStore}</h1>
                        <div className="welcome-service__form-shop">
                            <label className="form-shop__label">
                                <span className="add-store-label text-16">{ru.AddStoreInput1}</span>
                                <input className="form-shop__input text-14" type="text" placeholder={ru.AddStorePlaceholder1} name="nameStore" onChange={this.dataOnChange}/>
                                {this.state.errorItem === "nameStore" ? this.renderErrorText(this.state.errorText) : null}
                            </label>
                            <label className="form-shop__label">
                                <span className="add-store-label text-16">{ru.AddStoreInput2}</span>
                                <input className="form-shop__input text-14" type="text" placeholder={ru.AddStorePlaceholder2} name="urlStore" onChange={this.dataOnChange}/>
                                {this.state.errorItem === "urlStore" ? this.renderErrorText(this.state.errorText) : null}
                            </label>

                            <label className="form-shop__label">
                                <span className="add-store-label text-16">{ru.AddStoreInput3}</span>
                                <input className="form-shop__input text-14" type="tel" placeholder={ru.Phone} name="phoneStore" onChange={this.dataOnChange}/>
                                {this.state.errorItem === "phoneStore" ? this.renderErrorText(this.state.errorText) : null}
                            </label>
                            <label className="form-shop__label">
                                <span className="add-store-label text-16">{ru.registerCountry}</span>
                                <CountryModal/>
                            </label>
                            <div className="block-align-center service-modal-btn">
                                <ButtonMain btnClass={"form-shop__button-save text-16"} text={ru.Save} onClick={this.dataSubmit}/>
                            </div>
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
        modal: state.modalReducer.modal,
        UserID: state.userReducer.UserID,
        UserStore: state.userReducer.UserStore,
        addStore: state.storeReducer.addStore,
        setCountry: state.utiliteReducer.setCountry,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        openModalFunction: (modal) => {
            dispatch(actionOpenModal(modal))
        },
        userStoreFunction: (UserStore) => {
            dispatch(actionUserStore(UserStore))
        },
        dataRedirectFunction: (dataRedirect) => {
            dispatch(actionDataRedirect(dataRedirect))
        },
        addStoreFunction: (addStore) => {
            dispatch(actionAddStore(addStore))
        },
        setStoreArrFunction: (StoreArr) => {
            dispatch(actionSetStoreArr(StoreArr))
        },
        selectedStoreFunction: (selectedStore) => {
            dispatch(actionSelectedStore(selectedStore))
        },
        productsThisStoreFunction: (productsThisStore) => {
            dispatch(actionProductsThisStore(productsThisStore))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(AddServiceModal);
