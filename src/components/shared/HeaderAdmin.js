import React from 'react';
import "../../access/css/headerFooter.css"

class HeaderAdmin extends React.Component {

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
                            <div className="header-btn-logout"  onClick={this.props.logout}>
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

export default HeaderAdmin;
