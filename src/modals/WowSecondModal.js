import React from "react";
import ButtonMain from "../components/shared/ButtonMain";
import {actionDataRedirect, actionOpenModal} from "../action";
import {connect} from "react-redux";
import {langCode} from "../access/lang/translaterJS";

class WowSecondModal extends React.Component {
    constructor(props) {
        super(props);
        this.dressingRoom = this.dressingRoom.bind(this);
        this.closeLincModal = this.closeLincModal.bind(this);
    }

    closeLincModal() {
        this.props.openModalFunction("");
    };

    dressingRoom() {
        this.props.dataRedirectFunction({
            accessR: true,
            to: "/catalog",
        });
        this.closeLincModal();
    }

    render() {
        return(
            <div className="modal-envelope" id="modal-wowSecond">
                <div className="modal-envelope__close" onClick={this.closeLincModal}>
                    <svg className="icon icon-close ">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#close"/>
                    </svg>
                </div>
                <div className="modal-envelope__body">
                    <p className="modal-envelope__title title-36 uppercase bold">{langCode(this.props.lang, "wow")}</p>
                    <p className="modal-envelope__sub-light text-16 light">{langCode(this.props.lang, "youFirstHuman")}</p>
                    <p className="modal-envelope__sub-info text-16 bold">{langCode(this.props.lang, "seeMoreThings")}</p>
                    <div className="modal-form__button-enter">
                        <ButtonMain btnClass={"button-enter button-main text-18 medium"} text={langCode(this.props.lang, "DressingRoom")} onClick={this.dressingRoom}/>
                    </div>
                </div>
            </div>

        );
    }
}

function MapStateToProps(state) {
    return {
        modal: state.modalReducer.modal,
        lang: state.utiliteReducer.lang,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        openModalFunction: (modal) => {
            dispatch(actionOpenModal(modal))
        },
        dataRedirectFunction: (dataRedirect) => {
            dispatch(actionDataRedirect(dataRedirect))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(WowSecondModal);
