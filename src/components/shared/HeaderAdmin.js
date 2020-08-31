import React from 'react';
import ru from "../../access/lang/LangConstants";
import "../../access/css/headerFooter.css"
import {connect} from "react-redux";

class HeaderAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: ""
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.page !== this.props.page) {
            this.setState({
                ...this.state,
                page: this.props.page
            })
        }
    }

    render() {
        if (this.props.page !== "AdminPanel") {
            return null;
        }
        return (
            <header>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-12">
                            <div className="header-envelope">
                                <div className="header">
                                    <div className="header__logo" >
                                        <picture>
                                            <source className="logo__source" srcSet="static/img/general/logo.webp" type="image/webp"/>
                                            <img className="logo__source" src="static/img/general/logo.png" alt="logo"/>
                                        </picture>
                                    </div>
                                <p className="header__text light text-16">{ru.online}<br/>{ru.dressingRoom}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-8">
                            <div className="header__right-list">
                                <div className="header__plan">
                                    <div className="header__plan-picture">
                                        <picture className="plan-picture">
                                            <source className="plan-picture__source" srcSet="static/img/content/trial.png" type="image/webp"/>
                                            <img className="plan-picture__source" src="static/img/content/trial.png" alt="trial"/>
                                        </picture>
                                    </div>
                                    <div className="header__plan-column">
                                        <p className="text-14 bold">{ru.TrialPlan}</p>
                                        <div className="header__plan-change text-14 light" >{ru.Edit}</div>
                                    </div>
                                </div>
                                <div className="header__enter-cabinet text-14 light" >{ru.CustomerLogin}</div>
                                <div className="header__enter-name text-14 bold">Юлия Иванова
                                    <div className="header-btn-logout" >
                                        <svg className="icon icon-login ">
                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#login"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

function MapStateToProps(state) {
    return {
        page: state.pageReducer.page,
    }
}

export default connect(MapStateToProps)(HeaderAdmin);
