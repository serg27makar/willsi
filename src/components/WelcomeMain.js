import React from "react";
import ru from "../access/lang/LangConstants";
import ButtonMain from "./shared/ButtonMain";

class WelcomeMain extends React.Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
    }

    componentDidMount() {
        setTimeout(() => {
            const wrapper = this.wrapperRef.current;
            wrapper.classList.toggle("show-welcome-main");
        }, 300);
    }

    render() {
        return (
            <div className="welcome-main">
                <div className="container">
                    <div className="row">
                        <div ref={this.wrapperRef} className="col-12 welcome-main-env">
                            <h1 className="welcome-main-env__title uppercase title-36 bold">
                                <span className="welcome-main-env__title-name">{ru.Willsi}</span>
                                <br className="welcome-main-env__br"/>
                                <span className="welcome-main-env__title-value">{ru.SelectionOfThings}</span>
                            </h1>
                            <p className="welcome-main-env__paragraph-text text-16 light">{ru.HomepageFirstTextBlock1}
                                <br/>{ru.HomepageFirstTextBlock2}
                                <br/>{ru.HomepageFirstTextBlock3}
                            </p>
                            <div className="welcome-main-env__button-list">
                                <ButtonMain btnClass="button-main text-16" text={ru.toDressingRoom}/>
                                <ButtonMain btnClass="button-white text-16" text={ru.becomePartner}/>
                            </div>
                            <div className="welcome-main-env__our-services">
                                <p className="welcome-main-env__our-services-text text-16 light">{ru.OurService}
                                    <br/>{ru.TookAdvantage}
                                    <span className="welcome-main-env__our-services-box text-18 medium">524</span>
                                    <span className="welcome-main-env__our-services-client">{ru.client}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WelcomeMain;
