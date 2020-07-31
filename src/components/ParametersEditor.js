import React from 'react';
import ru from "../access/lang/LangConstants";

class ParametersEditor extends React.Component {
    render() {
        return (
            <div className="parameters-editor">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="parameters">
                                <div className="parameters__row">
                                    <div className="parameters__column-left">
                                        <p className="parameters__info-text text-16 uppercase bold">{ru.Available}
                                            <br/>{ru.Parameters}</p>
                                    </div>
                                    <div className="parameters__column-right">
                                        <div className="parameters__tags-list">
                                            <div className="tags-list">
                                                <button className="tags-list__item tags-active checked"
                                                        type="button"><span
                                                    className="tags-list__text text-18 medium">{ru.My}</span>
                                                    <svg className="icon icon-pen ">
                                                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#pen"/>
                                                    </svg>
                                                </button>
                                                <input className="tags-list__input-radio" type="radio" name="my" defaultChecked={true} hidden/>
                                                <button className="tags-list__item" type="button">
                                                    <span className="tags-list__text text-18 medium">{ru.Husband}</span>
                                                    <svg className="icon icon-pen ">
                                                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#pen"/>
                                                    </svg>
                                                </button>
                                                <input className="tags-list__input-radio" type="radio" name="husband" hidden/>
                                                <button className="tags-list__item" type="button">
                                                    <span className="tags-list__text text-18 medium">{ru.Son}</span>
                                                    <svg className="icon icon-pen ">
                                                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#pen"/>
                                                    </svg>
                                                </button>
                                                <input className="tags-list__input-radio" type="radio" name="son" hidden/>
                                                <div className="tags-list__link-plus" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="parameters">
                                <div className="parameters__row">
                                    <div className="parameters__column-left">
                                        <p className="parameters__info-text text-16 uppercase bold">{ru.Change}
                                            <br/>{ru.Parameters}</p>
                                    </div>
                                    <div className="parameters__column-right">
                                        <div className="parameters__tags-list">
                                            <div className="tags-list">
                                                <input className="tags-list__input text-18 light" type="number" name="growth" placeholder={ru.placeholderExampleGrowth}/>
                                                <input className="tags-list__input text-18 light" type="number" name="shoulders" placeholder={ru.placeholderExampleShoulders}/>
                                                <input className="tags-list__input text-18 light" type="number" name="growth" placeholder={ru.placeholderExampleChest}/>
                                                <input className="tags-list__input text-18 light" type="number" name="waist" placeholder={ru.placeholderExampleWaist}/>
                                                <input className="tags-list__input text-18 light" type="number" name="hips" placeholder={ru.placeholderExampleHips}/>
                                                <button
                                                    className="tags-list__button-save text-14 medium"
                                                    type="button">{ru.Save}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default ParametersEditor;
