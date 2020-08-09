import ru from "../../access/lang/LangConstants";
import {Link} from "react-router-dom";
import React from "react";
import {actionOpenModal} from "../../action";
import {connect} from "react-redux";

class HeaderCabinet extends React.Component {

    openModal = (modal) => {
        this.props.openModalFunction(modal);
    };

    render() {
        return (
            <div className="col-12 col-md-12 col-lg-3 hide-column">
                <div className="header">
                    <div className="header__user-list">
                        <div className="user-list">
                            <div className="user-list__icon">
                                <svg className="icon">
                                    <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#user"/>
                                </svg>
                            </div>
                            <div className="user-list__column">
                                <div className="user-list__link light text-16" onClick={() => {this.openModal("signIn")}}>{ru.SignIn}</div>
                                <div className="user-list__link light text-16" onClick={() => {this.openModal("signUp")}}>{ru.SignUp}</div>
                            </div>
                        </div>
                    </div>
                    <div className="header__basket-icon" >
                        <li className="navigation-list__item">
                            <Link className="navigation-list__link light text-16" to={"/postpone"}>
                                <svg className="icon">
                                    <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#shopping-bag"/>
                                </svg>
                                <div className="red-ring-delayed">3</div>
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

export default connect(MapStateToProps, mapDispatchToProps)(HeaderCabinet);
