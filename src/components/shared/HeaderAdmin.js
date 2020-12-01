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
        return (
            <header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="header__logo justify-content-center">
                            <picture>
                                <img className="logo__source" src="static/img/general/logo.png" alt="logo"/>
                            </picture>
                        </div>
                        <div className="header__enter-name justify-content-center text-14 bold">Всея Админ
                            <div className="header-btn-logout" >
                                <svg className="icon icon-login ">
                                    <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#login"/>
                                </svg>
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
