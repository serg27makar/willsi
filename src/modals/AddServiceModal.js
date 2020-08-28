import React from "react";
import {actionDataRedirect, actionOpenModal, actionUserStore} from "../action";
import {connect} from "react-redux";
import ru from "../access/lang/LangConstants";
import ButtonMain from "../components/shared/ButtonMain";
import {postStoreRegister, postUpdate} from "../utilite/axiosConnect";

class AddServiceModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameStore: "",
            urlStore: "",
            textStore: "",
            phoneStore: "",
            secondUrlStore: "",
            addressStore: "",
        };
        this.dataSubmit = this.dataSubmit.bind(this);
        this.result = this.result.bind(this);
        this.updateResult = this.updateResult.bind(this);
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
        if (res && res.length > 12) {
            const UserStore = this.props.UserStore || [];
            const store = {
                storeID: res,
                nameStore: this.state.nameStore
            };
            UserStore.push(store);
            this.props.userStoreFunction(UserStore);
            const user = {
                UserID: this.props.UserID,
                UserStore,
            };
            postUpdate(user, this.updateResult);
        }
    }

    updateResult() {
        this.closeLincModal();
        this.props.dataRedirectFunction(true);
    }

    dataSubmit() {
        const { nameStore, urlStore, textStore, phoneStore, secondUrlStore, addressStore} = this.state;
        const store = {
            adminID: this.props.UserID,
            nameStore,
            urlStore,
            textStore,
            phoneStore,
            secondUrlStore,
            addressStore
        };
        postStoreRegister(store, this.result);
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
                        <h1 className="welcome-service__title uppercase title-36 bold">{ru.AddStore}</h1>
                        <div className="welcome-service__form-shop">
                            <label className="form-shop__label">
                                <input className="form-shop__input text-14" type="text" placeholder={ru.AddStorePlaceholder1} name="nameStore" onChange={this.dataOnChange}/>
                                <span className="add-store-label">{ru.AddStoreInput1}</span>
                            </label>
                            <label className="form-shop__label">
                                <input className="form-shop__input text-14" type="text" placeholder={ru.AddStorePlaceholder2} name="urlStore" onChange={this.dataOnChange}/>
                                <span className="add-store-label">{ru.AddStoreInput2}</span>
                            </label>
                            <textarea className="form-shop__textarea text-14" placeholder={ru.AddStoreTextareaPlace} name="textStore" onChange={this.dataOnChange}/>
                            <span className="add-store-label">{ru.AddStoreTextarea}</span>
                            <label className="form-shop__label">
                                <input className="form-shop__input text-14" type="tel" placeholder={ru.Phone} name="phoneStore" onChange={this.dataOnChange}/>
                                <span className="add-store-label">{ru.AddStoreInput3}</span>
                            </label>
                            <label className="form-shop__label">
                                <input className="form-shop__input text-14" type="text" placeholder={ru.AddStorePlaceholder2} name="secondUrlStore" onChange={this.dataOnChange}/>
                                <span className="add-store-label">{ru.AddStoreInput4}</span>
                            </label>
                            <label className="form-shop__label-last">
                                <input className="form-shop__input text-14" type="text" placeholder={ru.AddStorePlaceholder1} name="addressStore" onChange={this.dataOnChange}/>
                                <span className="add-store-label">{ru.AddStoreInput5}</span>
                            </label>
                            <div className="block-align-center">
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
        modal: state.modalReducer.modal,
        UserID: state.userReducer.UserID,
        UserStore: state.userReducer.UserStore,
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
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(AddServiceModal);
