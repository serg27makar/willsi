import React from 'react';
import "./../access/css/cart.css";
import ru from "../access/lang/LangConstants";

class CatalogTopEnvironment extends React.Component {

  render() {
      return (
            <div className="catalog-top-env">
                <div className="container">
                    <div className="environment-row align-items-center">
                        <div className="select-fitting-user">
                            <div className="catalog-top">
                                <div className="catalog-top__dropdown-info">
                                    <div className="catalog-top__button-drop">
                                        <div className="catalog-top__button-text text-16 bold uppercase">{ru.My}</div>
                                        <span className="catalog-top__button-icon">
                                                <svg className="icon icon-arrow-small ">
                                                  <use
                                                      xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                                                </svg>
                                            </span>
                                    </div>
                                    <div className="dropdown-info">
                                        <div className="dropdown-info__item">
                                            <div className="dropdown-info__link text-16 bold uppercase">{ru.Husband}</div>
                                        </div>
                                        <div className="dropdown-info__item">
                                            <div className="dropdown-info__link text-16 bold uppercase">{ru.Son}</div>
                                        </div>
                                        <div className="dropdown-info__item">
                                            <div className="dropdown-info__link icon-plus"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="catalog-top">
                                <div className="catalog-top__list-object">
                                    <ul className="list-object">
                                        <li className="list-object__item text-16 bold">
                                            <p className="list-object__text">{ru.Growth}</p>
                                            <span className="list-object__text-value color-aqua">175 см</span>
                                        </li>
                                        <li className="list-object__item text-16 bold">
                                            <p className="list-object__text">{ru.Shoulders}</p>
                                            <span className="list-object__text-value color-aqua">60 см</span>
                                        </li>
                                        <li className="list-object__item text-16 bold">
                                            <p className="list-object__text">{ru.Chest}</p>
                                            <span className="list-object__text-value color-aqua">90 см</span>
                                        </li>
                                        <li className="list-object__item text-16 bold">
                                            <p className="list-object__text">{ru.Waist}</p>
                                            <span className="list-object__text-value color-aqua">65 см</span>
                                        </li>
                                        <li className="list-object__item text-16 bold">
                                            <p className="list-object__text">{ru.Hips}</p>
                                            <span className="list-object__text-value color-aqua">91 см</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default CatalogTopEnvironment;
