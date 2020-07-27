import React from "react";
import ru from "../access/lang/LangConstants";

class WelcomeAbout extends React.Component {

    render() {
        return (
            <div className="welcome-about">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="welcome-about-env">
                                <h1 className="welcome-about-env__title uppercase title-36 bold">{ru.WhoAreWe}</h1>
                                <div className="welcome-about-env__text-blur text-18 light">
                                    <p className="welcome-about-env__text-info">{ru.ToMakeTheDressLookPerfect}
                                        <br/>{ru.EnterParameters}
                                    </p>
                                </div>
                                <div className="welcome-about-env__scroll-down">
                                    <svg className="icon icon-arrow-down ">
                                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-down"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WelcomeAbout;
