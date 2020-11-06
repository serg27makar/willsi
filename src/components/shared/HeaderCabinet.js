import ru from "../../access/lang/LangConstants";
import {Link} from "react-router-dom";
import React from "react";
import {actionOpenModal} from "../../action";
import {connect} from "react-redux";

class HeaderCabinet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            UserName: "",
            pts: 0,
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.UserName !== this.props.UserName) {
            this.setState({
                UserName: this.props.UserName,
            })
        }
        if ((prevProps.SetActionPostpone !== this.props.SetActionPostpone ||
            prevProps.Postpone !== this.props.Postpone) && this.props.Postpone) {
            this.setState({
                ...this.state,
                pts: this.props.Postpone.length || 0,
            })
        }
    }

    openModal = (modal) => {
        this.props.openModalFunction(modal);
    };

    renderRedRing() {
        if (this.state.pts) {
            return (
                <div className="red-ring-delayed">{this.state.pts}</div>
            )
        }
        return null;
    }

    render() {
        return (
            <div className="col-12 col-md-12 col-lg-3">
                <div className="header">
                    <div className="header__user-list">
                        <div className="user-list">
                            <div className="user-list__icon">
                                <svg className="icon">
                                    <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#user"/>
                                </svg>
                            </div>
                            <div className={"user-list__column " + (this.state.UserName && this.state.UserName.length >= 1 ? "hidden-block" : "")}>
                                <div className="user-list__link light text-16" onClick={() => {this.openModal("signIn")}}>{ru.SignIn}</div>
                                <div className="user-list__link light text-16" onClick={() => {this.openModal("signUp")}}>{ru.SignUp}</div>
                            </div>
                            <div className={"user-list__column " + (this.state.UserName && this.state.UserName.length === 0 ? "hidden-block" : "")}>
                                <Link className="user-list__link light text-16" to={"/cabinet"}>{this.state.UserName}</Link>
                            </div>
                        </div>
                    </div>
                    <div className="header__basket-icon" >
                        <li className="navigation-list__item">
                            <Link className="navigation-list__link light text-16" to={"/postpone"}>
                                <svg className="icon">
                                    <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#shopping-bag"/>
                                </svg>
                                {this.renderRedRing()}
                                {ru.delayed}
                            </Link>
                        </li>
                    </div>
                </div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        Postpone: state.userReducer.Postpone,
        SetActionPostpone: state.userReducer.SetActionPostpone,
        modal: state.modalReducer.modal,
        UserName: state.userReducer.UserName,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        openModalFunction: (modal) => {
            dispatch(actionOpenModal(modal))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(HeaderCabinet);
