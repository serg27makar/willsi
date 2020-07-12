import React from 'react';
import {Link} from "react-router-dom";
import "../../access/css/shared.css"

class MenuGlobal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuWrap: "menu_wrap",
        };
        this.openMenu = this.openMenu.bind(this);
    }

    openMenu() {
        this.setState({
            menuWrap: this.state.menuWrap === "menu_wrap" ? "menu_wrap menu_wrap_active" : "menu_wrap",
        })
    }

    render() {
        return (
            <div className={this.state.menuWrap}>
                <ul className="menuGlobal">
                    <li>
                        <Link to={"/"} className="menuGlobal__link">1. Index</Link>
                    </li>
                    <li>
                        <Link to={"/about"} className="menuGlobal__link">2. About</Link>
                    </li>
                    <li>
                        <Link to={"/catalog"} className="menuGlobal__link">3. Catalog</Link>
                    </li>
                    <li>
                        <Link to={"/postpone"} className="menuGlobal__link">4. Postpone</Link>
                    </li>
                    <li>
                        <Link to={"/cart"} className="menuGlobal__link">5. Cart</Link>
                    </li>
                    <li>
                        <Link to={"/data"} className="menuGlobal__link">6. Data</Link>
                    </li>
                    <li>
                        <Link to={"/admin-panel"} className="menuGlobal__link">7. Admin Panel</Link>
                    </li>
                    <li>
                        <Link to={"/service-blue"} className="menuGlobal__link">8. About Service Blue</Link>
                    </li>
                </ul>
                <div className="menu_click">
                    <button onClick={this.openMenu}>N</button>
                </div>
            </div>
        )
    }
}

export default MenuGlobal;
