import {Link} from "react-router-dom";
import ru from "../../access/lang/LangConstants";
import React from "react";
import {connect} from "react-redux";

class HeaderNavigation extends React.Component {
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

    renderPartnerLink() {
        if (this.props.page === "AdminPanel") {
            return null;
        }
        if (this.state.isAdminPanel) {
            return (
                <Link className="navigation-list__link light text-16" to={"/admin-panel"}>
                    <div className="header__enter-cabinet text-14 light" >{ru.StoreAdminLogin}</div>
                </Link>
            )
        } else {
            return (
                <Link className="navigation-list__link light text-16" to={"/seller-service"}>
                    <div>{ru.Partners}</div>
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
                                <Link className="navigation-list__link light text-16" to={"/"}>{ru.Home}</Link>
                            </li>
                            <li className="navigation-list__item">
                                {/*Todo data if not params*/}
                                <Link className="navigation-list__link light text-16" to={"/catalog"}>{ru.DressingRoom}</Link>
                            </li>
                            <li className="navigation-list__item">
                                <Link className="navigation-list__link light text-16" to={"/about"}>{ru.About}</Link>
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
    }
}

export default connect(MapStateToProps)(HeaderNavigation);
