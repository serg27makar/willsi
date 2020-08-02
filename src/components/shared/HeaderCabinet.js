import ru from "../../access/lang/LangConstants";
import {Link} from "react-router-dom";
import React from "react";

class HeaderCabinet extends React.Component {
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
                                <div className="user-list__link light text-16" >{ru.SignIn}</div>
                                <div className="user-list__link light text-16" >{ru.SignUp}</div>
                            </div>
                        </div>
                    </div>
                    <div className="header__basket-icon" >
                        <li className="navigation-list__item">
                            <Link className="navigation-list__link light text-16" to={"/postpone"}>
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

export default HeaderCabinet;
