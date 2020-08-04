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
import Postpone from "./pages/Postpone";
import SellerService from "./pages/SellerService";
import HeaderAdmin from "./components/shared/HeaderAdmin";
import FooterAdmin from "./components/shared/FooterAdmin";
import RegistrationModal from "./modals/RegistrationModal";
import EnterModal from "./modals/EnterModal";
import LinkModal from "./modals/LinkModal";
import ProfileModal from "./modals/ProfileModal";
import WowFirstModal from "./modals/WowFirstModal";
import WowSecondModal from "./modals/WowSecondModal";

const history = createBrowserHistory();

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="wrapper-main">
                    <Navigate/>
                    <LinkBtn/>
                    <BtnUp/>
                </div>
                <div className="wrapper-modal">
                    {/*<RegistrationModal/>*/}
                    {/*<EnterModal/>*/}
                    {/*<LinkModal/>*/}
                    {/*<ProfileModal/>*/}
                    {/*<WowFirstModal/>*/}
                    {/*<WowSecondModal/>*/}
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
                <HeaderAdmin/>
                <div className="routers">
                    <Route exact path='/' component={Homepage}/>
                    <Route path='/about' component={About}/>
                    <Route path='/admin-panel' component={AdminPanel}/>
                    <Route path='/cart' component={Cart}/>
                    <Route path='/catalog' component={Catalog}/>
                    <Route path='/data' component={Data}/>
                    <Route path='/cabinet' component={Cabinet}/>
                    <Route path='/postpone' component={Postpone}/>
                    <Route path='/seller-service' component={SellerService}/>
                </div>
                <Footer/>
                <FooterAdmin/>
            </Router>
        );
    }
}

export default App;
