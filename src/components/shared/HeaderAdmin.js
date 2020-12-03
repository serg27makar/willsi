import React from 'react';
import "../../access/css/headerFooter.css"
import {connect} from "react-redux";
import {
    actionDataRedirect,
    actionDataUpdate,
    actionEmail,
    actionPermission,
    actionPostpone,
    actionSetActionPostpone,
    actionUserID,
    actionUserName,
    actionUsersParameters, actionUserStore
} from "../../action";

class HeaderAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: ""
        };
        this.logout = this.logout.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.page !== this.props.page) {
            this.setState({
                ...this.state,
                page: this.props.page
            })
        }
    }

    logout() {
        localStorage.clear();
        this.props.userIDFunction("");
        this.props.userNameFunction("");
        this.props.emailFunction("");
        this.props.usersParametersFunction([]);
        this.props.permissionFunction("unknown");
        this.props.userStoreFunction([]);
        this.props.dataUpdateFunction(!this.props.update);
        this.props.setActionPostponeFunction(!this.props.SetActionPostpone);
        this.props.postponeFunction([]);
        this.props.dataRedirectFunction({
            accessR: true,
            to: "/",
        });
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
                            <div className="header-btn-logout"  onClick={this.logout}>
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
        update: state.pageReducer.update,
        SetActionPostpone: state.userReducer.SetActionPostpone,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        postponeFunction: (Postpone) => {
            dispatch(actionPostpone(Postpone))
        },
        setActionPostponeFunction: (SetActionPostpone) => {
            dispatch(actionSetActionPostpone(SetActionPostpone))
        },
        userIDFunction: (UserID) => {
            dispatch(actionUserID(UserID))
        },
        userNameFunction: (UserName) => {
            dispatch(actionUserName(UserName))
        },
        emailFunction: (Email) => {
            dispatch(actionEmail(Email))
        },
        usersParametersFunction: (UsersParameters) => {
            dispatch(actionUsersParameters(UsersParameters))
        },
        permissionFunction: (Permission) => {
            dispatch(actionPermission(Permission))
        },
        userStoreFunction: (UserStore) => {
            dispatch(actionUserStore(UserStore))
        },
        dataUpdateFunction: (update) => {
            dispatch(actionDataUpdate(update))
        },
        dataRedirectFunction: (dataRedirect) => {
            dispatch(actionDataRedirect(dataRedirect))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(HeaderAdmin);
