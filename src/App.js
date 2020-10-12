import React from 'react';
import {Router, Route} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import './App.css';
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import MenuGlobal from "./components/shared/MenuGlobal";
import LinkBtn from "./components/shared/LinkBtn";
import BtnUp from "./components/shared/BtnUp";
import Homepage from "./pages/Homepage";
import AdminPanel from "./pages/AdminPanel";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import Data from "./pages/Data";
import Cabinet from "./pages/Cabinet";
import TariffPlans from "./pages/TariffPlans";
import Postpone from "./pages/Postpone";
import SellerService from "./pages/SellerService";
import RegistrationModal from "./modals/RegistrationModal";
import EnterModal from "./modals/EnterModal";
import LinkModal from "./modals/LinkModal";
import ProfileModal from "./modals/ProfileModal";
import WowFirstModal from "./modals/WowFirstModal";
import WowSecondModal from "./modals/WowSecondModal";
import {connect} from "react-redux";
import EditorModal from "./modals/EditorModal";
import {
    actionEmail,
    actionPermission, actionPostpone,
    actionUserID,
    actionUserName,
    actionUsersParameters,
    actionUserStore
} from "./action";
import {getUserData} from "./utilite/axiosConnect";
import SaveUpdateModal from "./modals/SaveUpdateModal";
import AlertModal from "./modals/AlertModal";
import AddServiceModal from "./modals/AddServiceModal";
import RegistrationStoreAdministrator from "./modals/RegistrationStoreAdministrator";
import AddParamsModal from "./modals/AddParamsModal";
import RecalculateModal from "./modals/RecalculateModal";

const history = createBrowserHistory();

class App extends React.Component {

    componentDidMount() {
        const UserID = localStorage.getItem("UserId");
        if (UserID) {
            this.props.userIDFunction(UserID);
            getUserData(this.result);
        }
    }

    result = (res) => {
        if (res.isAxiosError) {
            console.log(res);
            return;
        }
        if (res) {
            this.props.userNameFunction(res.UserName);
            this.props.emailFunction(res.Email);
            this.props.usersParametersFunction(res.UsersParameters);
            this.props.permissionFunction(res.Permission);
            this.props.userStoreFunction(res.UserStore);
            this.props.postponeFunction(res.Postpone);
        }
    };

    renderModal = () => {
        switch (this.props.modal) {
            case "signUp":
                return (<RegistrationModal/>);
            case "signIn":
                return (<EnterModal/>);
            case "linkModal":
                return (<LinkModal/>);
            case "profileModal":
                return (<ProfileModal/>);
            case "wowFirstModal":
                return (<WowFirstModal/>);
            case "wowSecondModal":
                return (<WowSecondModal/>);
            case "editorModal":
                return (<EditorModal/>);
            case "saveUpdate":
                return (<SaveUpdateModal/>);
            case "alertModal":
                return (<AlertModal/>);
            case "addServiceModal":
                return (<AddServiceModal/>);
            case "storeAdminModal":
                return (<RegistrationStoreAdministrator/>);
            case "addParamsModal":
                return (<AddParamsModal/>);
            case "recalculateModal":
                return (<RecalculateModal/>);
            default:
                return null
        }
    };

    render() {
        let wrapper = "wrapper-main";
        if (this.props.modal) {
            wrapper = "wrapper-main blur"
        }
        return (
            <div className="App">
                <div className={wrapper}>
                    <Navigate/>
                    <LinkBtn/>
                    <BtnUp/>
                </div>
                <div className="wrapper-modal">
                    {this.renderModal()}
                </div>
            </div>
        );
    }
}

class Navigate extends React.Component {
    render() {
        return (
            <Router history={history}>
                <MenuGlobal/>
                <Header/>
                <div className="routers">
                    <Route exact path='/' component={Homepage}/>
                    <Route path='/about' component={About}/>
                    <Route path='/admin-panel' component={AdminPanel}/>
                    <Route path='/cart' component={Cart}/>
                    <Route path='/catalog' component={Catalog}/>
                    <Route path='/data' component={Data}/>
                    <Route path='/tariff-plans' component={TariffPlans}/>
                    <Route path='/cabinet' component={Cabinet}/>
                    <Route path='/postpone' component={Postpone}/>
                    <Route path='/seller-service' component={SellerService}/>
                </div>
                <Footer/>
            </Router>
        );
    }
}
function MapStateToProps(state) {
    return {
        modal: state.modalReducer.modal,
    }
}
const mapDispatchToProps = dispatch => {
    return {
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
        postponeFunction: (Postpone) => {
            dispatch(actionPostpone(Postpone))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(App);
