import React from 'react';
import {usersFeatBack} from "../../access/temporaryConstants"
import ButtonMain from "./ButtonMain";
import "../../access/css/shared.css"
import AOS from "aos";
import {aosMethod} from "../../js/visualEffects";
import {connect} from "react-redux";
import {langCode} from "../../access/lang/translaterJS";

class Reviews extends React.Component {

    componentDidMount() {
        AOS.init({
            duration: 2000
        })
    }

    reviewsBox = (item, index) => {
        const aosFade = aosMethod(index);
        const mailto =  "mailto:" + item.email;
        return (
            <div data-aos={aosFade} className="reviews-box" key={index}>
                <div className="reviews-box__picture">
                    <picture className="picture">
                        <img
                            className="picture__source" src={item.imgUrl}
                            alt={item.imgAlt}/>
                    </picture>
                </div>
                <div className="reviews-box__column-box">
                    <div className="column-box">
                        <div className="column-box__top">
                            <p className="column-box__name text-18 bold uppercase">{item.userName}</p>
                            <a className="column-box__link-mail text-18" href={mailto}>{item.email}</a>
                        </div>
                        <p className="column-box__paragraph text-14 light italic">{item.textMessage}</p>
                    </div>
                </div>
            </div>
        )
    };

    render() {
        return (
            <div className="reviews">
                <div className="container">
                    <div className="row-wrap">
                        <div className="col-12">
                            <h2 className="reviews__title title-36 uppercase">{langCode(this.props.lang, "reviews")}<span>{langCode(this.props.lang, "clients")}</span>
                            </h2>
                        </div>
                        <div className="col-12">
                            {usersFeatBack && usersFeatBack.map((item, index) => {
                                return this.reviewsBox(item, index)
                            })}
                        </div>
                        <div className="col-12">
                            <div className="reviews-box__button-more">
                                <ButtonMain btnClass="button-white text-16" text="показать еще"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}
function MapStateToProps(state) {
    return {
        lang: state.utiliteReducer.lang,
    }
}

export default connect(MapStateToProps)(Reviews);
