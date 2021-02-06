import {Link} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import {langCode} from "../../access/lang/translaterJS";

class HeaderNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdminPanel: false,
        }
    }

    renderPartnerLink() {
        if (this.props.page === "AdminPanel") {
            return null;
        }
        if (this.props.Permission === "storeAdmin") {
            return (
                <Link className="navigation-list__link light text-16" to={"/admin-panel"}>
                    <div className="header__enter-cabinet text-14 light" >{langCode(this.props.lang, "StoreAdminLogin")}</div>
                </Link>
            )
        } else {
            return (
                <Link className="navigation-list__link light text-16" to={"/seller-service"}>
                    <div>{langCode(this.props.lang, "Partners")}</div>
                </Link>
            )
        }
    }

    render() {
        return (
            <div className="col-12 col-md-12 col-lg-5 hide-column">
                <div className="header">
                    <div className="header__navigation-list">
                        <ul className="navigation-list">
                            <li className="navigation-list__item">
                                <Link className="navigation-list__link light text-16" to={"/"}>{langCode(this.props.lang, "Home")}</Link>
                            </li>
                            <li className="navigation-list__item">
                                <Link className="navigation-list__link light text-16" to={"/catalog"}>{langCode(this.props.lang, "DressingRoom")}</Link>
                            </li>
                            <li className="navigation-list__item">
                                <Link className="navigation-list__link light text-16" to={"/about"}>{langCode(this.props.lang, "About")}</Link>
                            </li>
                            <li className="navigation-list__item">
                                {this.renderPartnerLink()}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        page: state.pageReducer.page,
        Permission: state.userReducer.Permission,
        lang: state.utiliteReducer.lang,
    }
}

export default connect(MapStateToProps)(HeaderNavigation);
