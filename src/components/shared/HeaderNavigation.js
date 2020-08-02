import {Link} from "react-router-dom";
import ru from "../../access/lang/LangConstants";
import React from "react";

class HeaderNavigation extends React.Component {
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
                                <Link className="navigation-list__link light text-16" to={"/seller-service"}>{ru.Partners}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderNavigation;
