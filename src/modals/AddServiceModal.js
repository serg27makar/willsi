import React from "react";
import {actionOpenModal} from "../action";
import {connect} from "react-redux";

class AddServiceModal extends React.Component {
    closeLincModal = () => {
        this.props.openModalFunction("");
    };

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
                        <h1 className="welcome-service__title uppercase title-36 bold">Добавить магазин</h1>
                        <div className="welcome-service__form-shop">
                            <form className="form-shop" action="#" method="post">
                                <div className="form-shop__row">
                                    <label className="form-shop__label">
                                        <input className="form-shop__input text-14" type="text"
                                               placeholder="Имя"/>
                                    </label>
                                    <label className="form-shop__label">
                                        <input className="form-shop__input text-14" type="text"
                                               placeholder="Ссылка на магазин"/>
                                    </label>
                                </div>
                                <textarea className="form-shop__textarea text-14"/>
                                <div className="form-shop__row justify-content-center"><div
                                    className="form-shop__button-enter text-16" ><span
                                    className="form-shop__button-text">Войти с помощью</span><span
                                    className="form-shop__icon-instagram"/></div>
                                    <button className="form-shop__button-save text-16" type="button">Сохранить
                                    </button>
                                </div>
                            </form>
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
    }
}
const mapDispatchToProps = dispatch => {
    return {
        openModalFunction: (modal) => {
            dispatch(actionOpenModal(modal))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(AddServiceModal);
