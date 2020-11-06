import ru from "../../access/lang/LangConstants";
import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import HeaderCabinet from "./HeaderCabinet";

class MobileEnvelope extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdminPanel: false,
        }
    }

    componentDidMount() {}

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.Permission !== this.props.Permission) {
            this.setState({
                isAdminPanel: this.props.Permission === "storeAdmin"
            })
        }
    }

    logout() {
        this.props.dataRedirectFunction({
            accessR: true,
            to: "/",
        });
        localStorage.clear();
        this.props.userIDFunction("");
        this.props.userNameFunction("");
        this.props.emailFunction("");
        this.props.usersParametersFunction([]);
        this.props.permissionFunction("unknown");
        this.props.userStoreFunction([]);
        this.props.dataUpdateFunction(!this.props.update);
        this.props.setActionPostponeFunction(!this.props.SetActionPostpone);
        this.props.postponeFunction([]);
    }

    renderPartnerLink() {
        if (this.props.page === "AdminPanel") {
            return null;
        }
        if (this.state.isAdminPanel) {
            return (
                <Link className="mobile-nav__link light text-25" to={"/admin-panel"}>{ru.StoreAdminLogin}</Link>
            )
        } else {
            return (
                <Link className="mobile-nav__link light text-25" to={"/seller-service"}>{ru.Partners}</Link>
            )
        }
    }

    render() {
        return (
            <div className="mobile-envelope">
                <ul>
                    <li className="mobile-nav__item">
                        <Link className="mobile-nav__link light text-25" to={"/"}>{ru.Home}</Link>

                    </li>
                    <li className="mobile-nav__item">
                        <Link className="mobile-nav__link light text-25" to={"/catalog"}>{ru.DressingRoom}</Link>
                    </li>
                    <li className="mobile-nav__item">
                        <Link className="mobile-nav__link light text-25" to={"/about"}>{ru.About}</Link>
                    </li>
                    <li className="mobile-nav__item">
                        {this.renderPartnerLink()}
                    </li>
                </ul>
                <HeaderCabinet/>
                <div className="header-btn-logout light text-25" onClick={this.logout}>
                    <svg className="icon">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#login"/>
                    </svg>
                    {ru.Exit}
                </div>
            </div>
        )
    }
}
function MapStateToProps(state) {
    return {
        page: state.pageReducer.page,
        Permission: state.userReducer.Permission,
    }
}

export default connect(MapStateToProps)(MobileEnvelope);
