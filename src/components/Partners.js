import React from 'react';
import ru from "./../access/lang/LangConstants";
import ButtonMain from "./shared/ButtonMain";
import "./../access/css/homepage.css";
import {partnersArr} from "../access/temporaryConstants"

class Partners extends React.Component {

    partnerBox = (item, index) => {
        return (
            <div className="partner-box" key={index}>
                <div className="partners-env">
                    <div className="partners-env__picture">
                        <picture className="picture">
                            <img className="picture__source"
                                 src={item.imgUrl} alt={item.imgAlt}/>
                        </picture>
                    </div>
                </div>
            </div>
        )
    };

    render() {
        return (
            <div className="partners">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="partners__title title-36 uppercase">{ru.OurPartners}</h2>
                        </div>
                    </div>
                    <div className="row-wrap">
                        {partnersArr && partnersArr.map((item, index) => {
                            return this.partnerBox(item, index);
                        })}
                        <div className="col-12">
                            <div className="partners-env-btn">
                                <ButtonMain btnClass="button-main text-16" text={ru.becomePartner}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default Partners;
