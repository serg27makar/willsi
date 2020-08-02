import ru from "../../access/lang/LangConstants";
import React from "react";

class MobileEnvelope extends React.Component {
    render() {
        return (
            <div className="mobile-envelope">
                <ul>
                    <li className="mobile-nav__item">
                        <div className="mobile-nav__link light text-25" >{ru.Home}</div>
                    </li>
                    <li className="mobile-nav__item">
                        <div className="mobile-nav__link light text-25" >{ru.About}</div>
                    </li>
                    <li className="mobile-nav__item">
                        <div className="mobile-nav__link light text-25" >{ru.DressingRoom}</div>
                    </li>
                </ul>
                <div className="mobile-user">
                    <div className="mobile-user__icon">
                        <svg className="icon">
                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#user"/>
                        </svg>
                    </div>
                    <div className="mobile-user__column">
                        <div className="mobile-user__link light text-14" >{ru.SignIn}</div>
                        <div className="mobile-user__link light text-14" >{ru.SignUp}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MobileEnvelope;
