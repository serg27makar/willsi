import React from "react";
import ButtonMain from "../components/shared/ButtonMain";
import {actionAlertModalCloseEvent, actionAlertText, actionOpenModal} from "../action";
import {connect} from "react-redux";
import ru from "../access/lang/LangConstants";

class AlertLinkModal extends React.Component {

    closeLincModal = () => {
        this.props.alertTextFunction("");
        this.props.openModalFunction("recalculateModal");
        this.props.alertModalCloseEventFunction(!this.props.alertModalCloseEvent);
    };

    render() {
        return(
            <div className="modal-envelope" id="modal-wowFirst">
                <div className="modal-envelope__close" onClick={this.closeLincModal}>
                    <svg className="icon icon-close ">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#close"/>
                    </svg>
                </div>
                <div className="modal-envelope__body">
                    <p className="modal-envelope__title title-36 bold">{this.props.AlertText}</p>
                    <div className="modal-form__button-enter">
                        <ButtonMain btnClass={"button-enter button-main text-18 uppercase medium"}
                                    text={ru.understandably} onClick={this.closeLincModal}/>
                    </div>
                </div>
            </div>

        );
    }
}

function MapStateToProps(state) {
    return {
        modal: state.modalReducer.modal,
        AlertText: state.modalReducer.AlertText,
        alertModalCloseEvent: state.modalReducer.alertModalCloseEvent,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        openModalFunction: (modal) => {
            dispatch(actionOpenModal(modal))
        },
        alertTextFunction: (text) => {
            dispatch(actionAlertText(text))
        },
        alertModalCloseEventFunction: (alertModalCloseEvent) => {
            dispatch(actionAlertModalCloseEvent(alertModalCloseEvent))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(AlertLinkModal);
