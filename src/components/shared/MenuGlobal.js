import React from 'react';

class MenuGlobal extends React.Component {
    render() {
        return (
            <div className="menu_wrap">
                <ul className="menuGlobal">
                    <li className="menuGlobal__item"><a className="menuGlobal__link" href="index.html">1. Index</a></li>
                    <li className="menuGlobal__item"><a className="menuGlobal__link" href="index-about.html">2. About</a></li>
                    <li className="menuGlobal__item"><a className="menuGlobal__link" href="index-catalog.html">3. Catalog</a>
                    </li>
                    <li className="menuGlobal__item"><a className="menuGlobal__link" href="index-postpone.html">4. Postpone</a>
                    </li>
                    <li className="menuGlobal__item"><a className="menuGlobal__link" href="index-cart.html">5. Cart</a></li>
                    <li className="menuGlobal__item"><a className="menuGlobal__link" href="index-data.html">6. Data</a></li>
                    <li className="menuGlobal__item"><a className="menuGlobal__link" href="index-admin-panel.html">7. Admin
                        Panel</a></li>
                    <li className="menuGlobal__item"><a className="menuGlobal__link" href="index-service-red.html">8. About
                        Service Red</a></li>
                    <li className="menuGlobal__item"><a className="menuGlobal__link" href="index-service-blue.html">9. About
                        Service Blue</a></li>
                </ul>
                <div className="menu_click">
                    <button>N</button>
                </div>
            </div>
        )
    }
}

export default MenuGlobal;
