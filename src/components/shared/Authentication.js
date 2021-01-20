import React from "react";
import {Link} from "react-router-dom";
import {actionOpenModal} from "../../action";
import {connect} from "react-redux";
import {langCode} from "../../access/lang/translaterJS";

class Authentication extends React.Component {
    constructor(props) {
        super(props);
        this.openModal = this.openModal.bind(this);
    }

    openModal = (modal) => {
        this.props.openModalFunction(modal);
    };

    render() {
        return (
            <div className="header__user-list">
                <div className="user-list">
                    <div className="user-list__icon">
                        <svg className="icon">
                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#user"/>
                        </svg>
                    </div>
                    <div className={"user-list__column " + (this.props.UserName && this.props.UserName.length >= 1 ? "hidden-block" : "")}>
                        <div className="user-list__link light text-16" onClick={() => {this.openModal("signIn")}}>{langCode(this.props.lang, "SignIn")}</div>
                        <div className="user-list__link light text-16" onClick={() => {this.openModal("signUp")}}>{langCode(this.props.lang, "SignUp")}</div>
                    </div>
                    <div className={"user-list__column " + (this.props.UserName && this.props.UserName.length === 0 ? "hidden-block" : "")}>
                        <Link className="user-list__link light text-16" to={"/cabinet"}>{this.props.UserName}</Link>
                    </div>
                </div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        modal: state.modalReducer.modal,
        UserName: state.userReducer.UserName,
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

export default connect(MapStateToProps, mapDispatchToProps)(Authentication);
