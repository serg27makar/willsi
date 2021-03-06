import React from 'react';
import {HashRouter, Route} from 'react-router-dom'
import './App.css';
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
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
    actionAllCountries,
    actionEmail,
    actionOpenModal,
    actionPermission,
    actionPostpone,
    actionSetCountry,
    actionUserID,
    actionUserName,
    actionUsersParameters,
    actionUserStore
} from "./action";
import {getAllCountry, getGeoInfo, getUserData} from "./utilite/axiosConnect";
import SaveUpdateModal from "./modals/SaveUpdateModal";
import AlertModal from "./modals/AlertModal";
import AddServiceModal from "./modals/AddServiceModal";
import RegistrationStoreAdministrator from "./modals/RegistrationStoreAdministrator";
import AddParamsModal from "./modals/AddParamsModal";
import RecalculateModal from "./modals/RecalculateModal";
import PrimaryAdminPanel from "./pages/PrimaryAdminPanel";
import HelpModal from "./modals/HelpModal";
import SpinnerModal from "./modals/SpinnerModal";
import NothingToShowModal from "./modals/NothingToShowModal";
import UserNameModal from "./modals/UserNameModal";
import AlertLinkModal from "./modals/AlertLinkModal";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Results: {},
            country_name: "",
            upLoad: false,
        }
        this.allCountry = this.allCountry.bind(this);
        this.countryData = this.countryData.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        const UserID = localStorage.getItem("UserId");
        if (UserID) {
            this.props.userIDFunction(UserID);
            getUserData(this.result);
        } else {
            this.setState({
                ...this.state,
                upLoad: true
            })
        }
        getGeoInfo(this.countryData);
        getAllCountry(this.allCountry)
    }

    allCountry(data) {
        const AllCountry = [];
        if (data && data.Results) {
            for (const item in data.Results) {
                if (data.Results.hasOwnProperty(item)){
                    const country = data.Results[item].Name;
                    AllCountry.push(country)
                }
            }
            AllCountry.sort();
            this.props.allCountriesFunction(AllCountry);
        }
    }

    countryData(data) {
        if (data && data.country_name) {
            this.props.setCountryFunction(data.country_name);
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
            this.setState({
                ...this.state,
                upLoad: true
            })
        }
    };

    closeModal() {
        if (this.props.modal) {
            this.props.openModalFunction("");
        }
    }

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
            case "helpModal":
                return (<HelpModal/>);
            case "spinnerModal":
                return (<SpinnerModal/>);
            case "nothingToShowModal":
                return (<NothingToShowModal/>);
            case "userNameModal":
                return (<UserNameModal/>);
            case "alertLinkModal":
                return (<AlertLinkModal/>);
            default:
                return null
        }
    };

    render() {
        let wrapper = "wrapper-main";
        if (this.props.modal) {
            wrapper = "wrapper-main blur"
        }
        if (!this.state.upLoad) return null;
        return (
            <div className="App">
                <div className={wrapper} onClick={this.closeModal}>
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
            <HashRouter>
                <Header/>
                <div className="routers">
                    <Route exact path='/' component={Homepage}/>
                    <Route path='/about' component={About}/>
                    <Route path='/admin-panel' component={AdminPanel}/>
                    <Route path='/primary-admin-panel' component={PrimaryAdminPanel}/>
                    <Route path='/cart' component={Cart}/>
                    <Route path='/catalog' component={Catalog}/>
                    <Route path='/data' component={Data}/>
                    <Route path='/tariff-plans' component={TariffPlans}/>
                    <Route path='/cabinet' component={Cabinet}/>
                    <Route path='/postpone' component={Postpone}/>
                    <Route path='/seller-service' component={SellerService}/>
                </div>
                <Footer/>
            </HashRouter>
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
        setCountryFunction: (setCountry) => {
            dispatch(actionSetCountry(setCountry))
        },
        allCountriesFunction: (allCountries) => {
            dispatch(actionAllCountries(allCountries))
        },
        openModalFunction: (modal) => {
            dispatch(actionOpenModal(modal))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(App);
