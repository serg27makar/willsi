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
import Postpone from "./pages/Postpone";
import ServiceBlue from "./pages/ServiceBlue";
import ServiceRed from "./pages/ServiceRed";
import HeaderAdmin from "./components/shared/HeaderAdmin";
import FooterAdmin from "./components/shared/FooterAdmin";

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
        <div className="wrapper">
            <Header/>
            <HeaderAdmin/>
            <Navigate/>
            <Footer/>
            <FooterAdmin/>
            <MenuGlobal/>
            <LinkBtn/>
            <BtnUp/>
        </div>
    </div>
  );
}

class Navigate extends React.Component {
    render() {
        return (
            <Router history={history}>
                <div className="routers">
                    <Route exact path='/' component={Homepage}/>
                    <Route path='/about' component={About}/>
                    <Route path='/admin-panel' component={AdminPanel}/>
                    <Route path='/cart' component={Cart}/>
                    <Route path='/catalog' component={Catalog}/>
                    <Route path='/data' component={Data}/>
                    <Route path='/postpone' component={Postpone}/>
                    <Route path='/service-blue' component={ServiceBlue}/>
                    <Route path='/service-red' component={ServiceRed}/>
                </div>
            </Router>
        );
    }
}

export default App;
