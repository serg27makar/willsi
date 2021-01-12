import React from "react";
import ButtonMain from "../components/shared/ButtonMain";
import {actionOpenModal} from "../action";
import {connect} from "react-redux";
import ru from "../access/lang/LangConstants";

class NothingToShowModal extends React.Component {

    closeLincModal = () => {
        this.props.openModalFunction("");
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
                    <p className="modal-envelope__title title-36 uppercase bold">{ru.oops}</p>
                    <p className="modal-envelope__sub-info text-20 bold">{ru.weHaveNothingToShow}</p>
                    <div className="modal-form__button-enter">
                        <ButtonMain btnClass={"button-enter button-main text-20 medium"} text={ru.understandably} onClick={this.closeLincModal}/>
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

export default connect(MapStateToProps, mapDispatchToProps)(NothingToShowModal);
