import React from 'react';

class AdminPanel extends React.Component {

    render() {
        return(
            <div className="content">
                <form className="main-admin" action="#" method="post">
                    <div className="main-admin__row">
                        <div className="main-admin__sidebar">
                            <div className="sidebar">
                                <div className="sidebar__button-list">
                                    <div className="button-list">
                                        <button className="button-list__item" type="button">
                                            <svg className="icon icon-folder ">
                                                <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#folder"/>
                                            </svg>
                                        </button>
                                        <button className="button-list__item" type="button">
                                            <svg className="icon icon-add ">
                                                <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#add"/>
                                            </svg>
                                        </button>
                                        <button className="button-list__item" type="button">
                                            <svg className="icon icon-minus ">
                                                <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#minus"/>
                                            </svg>
                                        </button>
                                        <button className="button-list__item" type="button">
                                            <svg className="icon icon-moon-phase-outline ">
                                                <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#moon-phase-outline"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <button className="sidebar__button-menu" type="button">
                                        <svg className="icon icon-menu-square ">
                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#menu-square"/>
                                        </svg>
                                    </button>
                                </div>
                                <div className="sidebar__main-list scrollbar">
                                    <div className="main-list">
                                        <p className="main-list__title uppercase bold text-22">Категории товаров</p>
                                        <label className="main-list__label">
                                            <input className="main-list__input-search text-14 italic" type="text"
                                                   placeholder="Поиск..."/>
                                                <button className="main-list__button-search" type="button">
                                                    <svg className="icon icon-search ">
                                                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#search"/>
                                                    </svg>
                                                </button>
                                        </label>
                                        <div className="main-list__catalog-product">
                                            <div className="catalog-product">
                                                <button className="catalog-button" type="button"><span
                                                    className="catalog-button__text text-16 light">Одежда</span>
                                                    <svg className="icon icon-arrow-small ">
                                                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                                                    </svg>
                                                </button>
                                                <ul className="dropdown-list">
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Женская
                                                        бижутерия</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Очки</div>
                                                    </li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light"
                                                        >Брелоки</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light"
                                                        >Воротники</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Головные
                                                        уборы</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Для
                                                        волос</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Зонты</div>
                                                    </li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light"
                                                        >Косметички</div></li>
                                                </ul>
                                            </div>
                                            <div className="catalog-product">
                                                <button className="catalog-button" type="button"><span
                                                    className="catalog-button__text text-16 light">Белье</span>
                                                    <svg className="icon icon-arrow-small ">
                                                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                                                    </svg>
                                                </button>
                                                <ul className="dropdown-list">
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Женская
                                                        бижутерия</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Очки</div>
                                                    </li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light"
                                                        >Брелоки</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light"
                                                        >Воротники</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Головные
                                                        уборы</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Для
                                                        волос</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Зонты</div>
                                                    </li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light"
                                                        >Косметички</div></li>
                                                </ul>
                                            </div>
                                            <div className="catalog-product">
                                                <button className="catalog-button" type="button"><span
                                                    className="catalog-button__text text-16 light">Для пляжа</span>
                                                    <svg className="icon icon-arrow-small ">
                                                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                                                    </svg>
                                                </button>
                                                <ul className="dropdown-list">
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Женская
                                                        бижутерия</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Очки</div>
                                                    </li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light"
                                                        >Брелоки</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light"
                                                        >Воротники</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Головные
                                                        уборы</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Для
                                                        волос</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Зонты</div>
                                                    </li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light"
                                                        >Косметички</div></li>
                                                </ul>
                                            </div>
                                            <div className="catalog-product">
                                                <button className="catalog-button" type="button"><span
                                                    className="catalog-button__text text-16 light">Обувь</span>
                                                    <svg className="icon icon-arrow-small ">
                                                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                                                    </svg>
                                                </button>
                                                <ul className="dropdown-list">
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Женская
                                                        бижутерия</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Очки</div>
                                                    </li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light"
                                                        >Брелоки</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light"
                                                        >Воротники</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Головные
                                                        уборы</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Для
                                                        волос</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Зонты</div>
                                                    </li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light"
                                                        >Косметички</div></li>
                                                </ul>
                                            </div>
                                            <div className="catalog-product">
                                                <button className="catalog-button" type="button"><span
                                                    className="catalog-button__text text-16 light">Аксессуары</span>
                                                    <svg className="icon icon-arrow-small ">
                                                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                                                    </svg>
                                                </button>
                                                <ul className="dropdown-list">
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Женская
                                                        бижутерия</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Очки</div>
                                                    </li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light"
                                                        >Брелоки</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light"
                                                        >Воротники</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Головные
                                                        уборы</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Для
                                                        волос</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Зонты</div>
                                                    </li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light"
                                                        >Косметички</div></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="main-admin__main-envelope">
                            <div className="main-envelope">
                                <div className="main-envelope__top-env">
                                    <div className="button-list">
                                        <button className="button-list__item item-green" type="button">
                                            <svg className="icon icon-add ">
                                                <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#add"/>
                                            </svg>
                                        </button>
                                        <button className="button-list__nav" type="button">
                                            <svg className="icon icon-volume-control ">
                                                <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#volume-control"/>
                                            </svg>
                                        </button>
                                        <button className="button-list__nav" type="button">
                                            <svg className="icon icon-settings ">
                                                <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#settings"/>
                                            </svg>
                                        </button>
                                        <button className="button-list__nav" type="button">
                                            <svg className="icon icon-user-admin ">
                                                <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#user-admin"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <button className="main-envelope__button-menu" type="button">
                                        <svg className="icon icon-menu-dots ">
                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#menu-dots"/>
                                        </svg>
                                    </button>
                                </div>
                                <div className="main-envelope__middle-line">
                                    <button className="main-envelope__button-create text-14" type="button">Создать
                                    </button>
                                    <div className="main-envelope__link-admin" >
                                        <svg className="icon icon-link ">
                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#link"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="main-envelope__bottom-env">
                                    <div className="main-envelope__info-envelope"><span
                                        className="main-envelope__info-title text-15 uppercase bold">Категории</span>
                                        <label className="main-envelope__label input-check">
                                            <input className="main-envelope__input text-14" type="text"
                                                   placeholder="Женские платья"/>
                                                <button className="main-envelope__button-active button-checked"
                                                        type="button"><span className="main-envelope__icon-check">
                          <svg className="icon icon-check-mark ">
                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#check-mark"/>
                          </svg></span><span className="main-envelope__icon-pen">
                          <svg className="icon icon-pen ">
                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#pen"/>
                          </svg></span></button>
                                        </label>
                                    </div>
                                    <div className="main-envelope__info-envelope"><span
                                        className="main-envelope__info-title text-15 uppercase bold">Код Изделия</span>
                                        <label className="main-envelope__label input-uncheck">
                                            <input className="main-envelope__input text-14" type="text"
                                                   placeholder="123456" readOnly/>
                                                <button className="main-envelope__button-active button-pen"
                                                        type="button"><span className="main-envelope__icon-check">
                          <svg className="icon icon-check-mark ">
                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#check-mark"/>
                          </svg></span><span className="main-envelope__icon-pen">
                          <svg className="icon icon-pen ">
                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#pen"/>
                          </svg></span></button>
                                        </label>
                                    </div>
                                    <div className="main-envelope__info-envelope"><span
                                        className="main-envelope__info-title text-15 uppercase bold">Бренд</span>
                                        <label className="main-envelope__label input-uncheck">
                                            <input className="main-envelope__input text-14" type="text"
                                                   placeholder="Zero New" readOnly/>
                                                <button className="main-envelope__button-active button-pen"
                                                        type="button"><span className="main-envelope__icon-check">
                          <svg className="icon icon-check-mark ">
                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#check-mark"/>
                          </svg></span><span className="main-envelope__icon-pen">
                          <svg className="icon icon-pen ">
                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#pen"/>
                          </svg></span></button>
                                        </label>
                                    </div>
                                    <div className="main-envelope__info-envelope"><span
                                        className="main-envelope__info-title text-15 uppercase bold">Артикул</span>
                                        <label className="main-envelope__label input-uncheck">
                                            <input className="main-envelope__input text-14" type="text"
                                                   placeholder="56853" readOnly/>
                                                <button className="main-envelope__button-active button-pen"
                                                        type="button"><span className="main-envelope__icon-check">
                          <svg className="icon icon-check-mark ">
                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#check-mark"/>
                          </svg></span><span className="main-envelope__icon-pen">
                          <svg className="icon icon-pen ">
                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#pen"/>
                          </svg></span></button>
                                        </label>
                                    </div>
                                    <div className="main-envelope__info-envelope align-items-start"><span
                                        className="main-envelope__info-title text-15 uppercase bold">Размеры</span>
                                        <div className="main-envelope__size-column">
                                            <div className="main-envelope__size-list"><span
                                                className="main-envelope__size-text text-14 uppercase bold">s</span>
                                                <div className="main-enevelope__size-icons">
                                                    <button className="main-envelope__size-bars" type="button">
                                                        <svg className="icon icon-size-menu ">
                                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#size-menu"/>
                                                        </svg>
                                                    </button>
                                                    <button className="main-envelope__button-delete" type="button">
                                                        <svg className="icon icon-delete ">
                                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#delete"/>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="main-envelope__size-list"><span
                                                className="main-envelope__size-text text-14 uppercase bold">m</span>
                                                <div className="main-enevelope__size-icons">
                                                    <button className="main-envelope__size-bars" type="button">
                                                        <svg className="icon icon-size-menu ">
                                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#size-menu"/>
                                                        </svg>
                                                    </button>
                                                    <button className="main-envelope__button-delete" type="button">
                                                        <svg className="icon icon-delete ">
                                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#delete"/>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="main-envelope__size-list"><span
                                                className="main-envelope__size-text text-14 uppercase bold">xl</span>
                                                <div className="main-enevelope__size-icons">
                                                    <button className="main-envelope__size-bars" type="button">
                                                        <svg className="icon icon-size-menu ">
                                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#size-menu"/>
                                                        </svg>
                                                    </button>
                                                    <button className="main-envelope__button-delete" type="button">
                                                        <svg className="icon icon-delete ">
                                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#delete"/>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="main-envelope__size-list"><span
                                                className="main-envelope__size-text text-14 uppercase bold">xxl</span>
                                                <div className="main-enevelope__size-icons">
                                                    <button className="main-envelope__size-bars" type="button">
                                                        <svg className="icon icon-size-menu ">
                                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#size-menu"/>
                                                        </svg>
                                                    </button>
                                                    <button className="main-envelope__button-delete" type="button">
                                                        <svg className="icon icon-delete ">
                                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#delete"/>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <label className="main-envelope__label input-uncheck">
                                                <input className="main-envelope__input text-14" type="text"
                                                       placeholder="Например XS" readOnly/>
                                                    <button className="main-envelope__button-active button-pen"
                                                            type="button"><span className="main-envelope__icon-check">
                            <svg className="icon icon-check-mark ">
                              <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#check-mark"/>
                            </svg></span><span className="main-envelope__icon-pen">
                            <svg className="icon icon-pen ">
                              <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#pen"/>
                            </svg></span></button>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AdminPanel;

