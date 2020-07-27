import React from 'react';
import ru from "./../access/lang/LangConstants";
import "./../access/css/homepage.css";

class DescriptionBg extends React.Component {

    render() {
        return (
            <div className="description-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="description-env">
                                <div className="description-env__icon">
                                    <svg className="icon icon-idea ">
                                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#idea"/>
                                    </svg>
                                </div>
                                <p className="description-env__top-info text-22 bold uppercase">{ru.Hint}</p>
                            </div>
                            <p className="description-bg__paragraph text-14">{ru.descriptionText1}</p>
                            <div className="description-env">
                                <div className="description-env__icon">
                                    <svg className="icon icon-warning ">
                                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#warning"/>
                                    </svg>
                                </div>
                                <p className="description-env__top-info text-22 bold uppercase">{ru.Important}</p>
                            </div>
                            <p className="description-bg__paragraph text-14">{ru.descriptionText2}</p>
                            <p className="description-bg__paragraph text-14">{ru.descriptionText3}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default DescriptionBg;
