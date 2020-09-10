import React from "react";
import ButtonMain from "./shared/ButtonMain";
import ru from "../access/lang/LangConstants";
import ButtonPostpone from "./shared/ButtonPostpone";
import "../access/css/cart.css"

class CardDescription extends React.Component {
    constructor(props) {
        super(props);
    }

    renderColorRound = (item, index) => {
        return (
            <li className="color-box__item color-round" key={index} style={{background: item}}/>
        )
    };

    render() {
        return (
            <div className="card-description">
                <div className="card-description__top-info">
                    <p className="card-description__title text-22 bold uppercase">{this.props.cardDescription.Manufacturer}</p>
                    <p className="card-description__article-mobile text-14 light">{this.props.cardDescription.ProductCode}</p>
                    {/*<ButtonMain btnClass={"card-description__link-model text-14 uppercase"} text={ru.Model3d} />*/}
                </div>
                <p className="card-description__article text-14 light">{this.props.cardDescription.VendorCode}</p>
                <p className="card-description__paragraph text-14 light">{this.props.cardDescription.good}</p>
                <div className="card-description__color-box">
                    <div className="color-box">
                        <p className="color-box__text text-16 uppercase bold">{ru.Colors}</p>
                        <ul className="color-box__list">
                            {this.props.cardDescription.color && this.props.cardDescription.color.map((item, index) => {
                                return this.renderColorRound(item, index);
                            })}
                        </ul>
                    </div>
                </div>
                <div className="card-description__button-bottom">
                    <p className="card-description__quantity text-22 color-aqua uppercase medium">{this.props.cardDescription.Price + ru.grn}</p>
                    <ButtonPostpone/>
                    <ButtonMain btnClass={"button-white text-14"} text={"перейти в магазин для покупки"}/>
                </div>
            </div>
        )
    }
}

export default CardDescription;
