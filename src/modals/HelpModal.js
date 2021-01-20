import React from "react";
import ButtonMain from "../components/shared/ButtonMain";
import {actionOpenModal} from "../action";
import {connect} from "react-redux";
import {postSendEmail} from "../utilite/axiosConnect";
import {updateResult} from "../js/sharedFunctions";
import {langCode} from "../access/lang/translaterJS";

class HelpModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
        }
        this.dataChange = this.dataChange.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    closeLincModal = () => {
        this.props.openModalFunction("");
    };

    dataChange(e) {
        e.stopPropagation();
        const value = e.target.value;
        this.setState({
            ...this.state,
            message: value,
        })
    }

    sendMessage() {
        const message = {
            UserID: this.props.UserID,
            message: this.state.message,
            subject: "shm"
        }
        postSendEmail(message, updateResult);
        this.props.openModalFunction("");
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
                    <span className="add-store-label text-16 welcome-about-env">{langCode(this.props.lang, "writeToSupport")}</span>
                    <textarea className="form-shop__textarea text-14"
                              placeholder={langCode(this.props.lang, "writeYourMessage")} name="Message"
                              onChange={this.dataChange}/>
                    <div className="modal-form">
                        <div className="modal-form__button-enter">
                            <ButtonMain btnClass={"button-enter button-main text-18 medium"} text={langCode(this.props.lang, "send")} onClick={this.sendMessage}/>
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
        UserID: state.userReducer.UserID,
        lang: state.utiliteReducer.lang,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        openModalFunction: (modal) => {
            dispatch(actionOpenModal(modal))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(HelpModal);
