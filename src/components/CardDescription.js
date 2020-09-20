import React from "react";
import ButtonMain from "./shared/ButtonMain";
import ru from "../access/lang/LangConstants";
import ButtonPostpone from "./shared/ButtonPostpone";
import "../access/css/cart.css"

class CardDescription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardDescription: {}
        };
        this.siteRedirect = this.siteRedirect.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.cardDescription !== this.props.cardDescription) {
            this.setState({
                ...this.state,
                cardDescription: this.props.cardDescription,
            })
        }
    }

    siteRedirect() {
        window.open(this.state.cardDescription.LinkToProduct)
    }

    renderColorRound = (item, index) => {
        let stylesSheet = {};
        if (item === "prints") {
            stylesSheet = {
                backgroundImage: "url(/static/img/content/print.png)",
                backgroundSize: "cover",
            }
        } else {
            stylesSheet = {
                background: item
            }
        }
        return (
            <li className="color-box__item color-round" key={index} style={stylesSheet}/>
        )
    };

    render() {
        if (!this.state.cardDescription.Parameters) return null;
        return (
            <div className="card-description">
                <div className="card-description__top-info">
                    <p className="card-description__title text-22 bold uppercase">{this.state.cardDescription.Manufacturer}</p>
                    <p className="card-description__article text-14 light">{this.state.cardDescription.ProductCode}</p>
                    <p className="card-description__article-mobile text-14 light">{this.state.cardDescription.ProductCode}</p>
                    {/*<ButtonMain btnClass={"card-description__link-model text-14 uppercase"} text={ru.Model3d} />*/}
                </div>
                <p className="card-description__article text-14 light">{this.state.cardDescription.Parameters[0].VendorCode}</p>
                <p className="card-description__paragraph text-14 light">{this.state.cardDescription.Description}</p>
                <div className="card-description__color-box">
                    <div className="color-box">
                        <p className="color-box__text text-16 uppercase bold">{ru.Colors}</p>
                        <ul className="color-box__list">
                            {this.state.cardDescription.Parameters[0].color && this.state.cardDescription.Parameters[0].color.map((item, index) => {
                                return this.renderColorRound(item, index);
                            })}
                        </ul>
                    </div>
                </div>
                <div className="card-description__button-bottom">
                    <p className="card-description__quantity text-22 color-aqua uppercase medium">{this.state.cardDescription.Parameters[0].Price + ru.grn}</p>
                    <ButtonPostpone/>
                    <ButtonMain btnClass={"button-white text-14"} text={"перейти в магазин для покупки"} onClick={this.siteRedirect}/>
                </div>
            </div>
        )
    }
}

export default CardDescription;
