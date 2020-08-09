import React from "react";
import ButtonMain from "../components/shared/ButtonMain";
import {actionOpenModal} from "../action";
import {connect} from "react-redux";

class LinkModal extends React.Component {

    closeLincModal = () => {
        this.props.openModalFunction("");
    };

    render() {
        return(
            <div className="modal-envelope" id="modal-link">
                <div className="modal-envelope__close" onClick={this.closeLincModal}>
                    <svg className="icon">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#close"/>
                    </svg>
                </div>
                <div className="modal-envelope__body">
                    <p className="modal-envelope__title title-36 uppercase bold">проверить соответсвие товарa с другого сайта</p>
                    <p className="modal-envelope__sub-info text-16 bold">Ссылка на товар</p>
                    <div className="modal-form">
                        <label className="modal-form__label">
                            <input className="modal-form__input input-link text-18 light" type="text" name="link-product" placeholder="ссылка на товар"/>
                        </label>
                        <div className="modal-form__button-enter">
                            <ButtonMain btnClass={"button-enter button-main text-18 medium"} text={"Принять"}/>
                        </div>
                        <div className="modal-form__bottom-clear text-16 light">
                            <div className="modal-form__bottom-link color-aqua">Очистить</div>
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
    }
}
const mapDispatchToProps = dispatch => {
    return {
        openModalFunction: (modal) => {
            dispatch(actionOpenModal(modal))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(LinkModal);
