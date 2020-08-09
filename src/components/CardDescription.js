import React from "react";
import ButtonMain from "./shared/ButtonMain";
import ru from "../access/lang/LangConstants";
import ButtonPostpone from "./shared/ButtonPostpone";
import "../access/css/cart.css"

const cardDescription = {
    brand: "bailmain",
    article: "Арт 02936",
    productDescription: "Повседневная практика показывает," +
        " что начало повседневной работы по формированию позиции позволяет выполнять" +
        " важные задания по разработке системы обучения кадров, соответствует насущным потребностям." +
        " Идейные соображения высшего порядка, а также сложившаяся структура организации играет" +
        " важную роль в формировании системы обучения кадров, соответствует насущным потребностям.",
    addition: "С другой стороны консультация с широким активом позволяет" +
        " оценить значение соответствующий условий активизации.",
    price: "555",
    colors: [
        "red",
        "blue",
        "green",
    ]
};

class CardDescription extends React.Component {

    renderColorRound = (item, index) => {
        return (
            <li className="color-box__item color-round" key={index} style={{background: item}}/>
        )
    };

    render() {
        return (
            <div className="card-description">
                <div className="card-description__top-info">
                    <p className="card-description__title text-22 bold uppercase">{cardDescription.brand}</p>
                    <p className="card-description__article-mobile text-14 light">{cardDescription.article}</p>
                    <ButtonMain btnClass={"card-description__link-model text-14 uppercase"} text={ru.Model3d} />
                </div>
                <p className="card-description__article text-14 light">{cardDescription.article}</p>
                <p className="card-description__paragraph text-14 light">{cardDescription.productDescription}</p>
                <p className="card-description__paragraph text-14 light">{cardDescription.addition}</p>
                <div className="card-description__color-box">
                    <div className="color-box">
                        <p className="color-box__text text-16 uppercase bold">{ru.Colors}</p>
                        <ul className="color-box__list">
                            {cardDescription.colors && cardDescription.colors.map((item, index) => {
                                return this.renderColorRound(item, index);
                            })}
                        </ul>
                    </div>
                </div>
                <div className="card-description__button-bottom">
                    <p className="card-description__quantity text-22 color-aqua uppercase medium">{cardDescription.price + ru.grn}</p>
                    <ButtonPostpone/>
                    <ButtonMain btnClass={"button-white text-14"} text={"перейти в магазин для покупки"}/>
                </div>
            </div>
        )
    }
}

export default CardDescription;
