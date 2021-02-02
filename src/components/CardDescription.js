import React from "react";
import ButtonMain from "./shared/ButtonMain";
import ButtonPostpone from "./shared/ButtonPostpone";
import "../access/css/cart.css"
import {connect} from "react-redux";
import {actionPostpone, actionSetActionPostpone} from "../action";
import {updateResult, validPostpone} from "../js/sharedFunctions";
import {postUpdate} from "../utilite/axiosConnect";
import {langCode} from "../access/lang/translaterJS";

class CardDescription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardDescription: {}
        };
        this.siteRedirect = this.siteRedirect.bind(this);
        this.addPostpone = this.addPostpone.bind(this);
        this.removePostpone = this.removePostpone.bind(this);
        this.updateData = this.updateData.bind(this);
    }

    componentDidMount() {
        this.fillInCardDescription();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.cardDescription !== this.props.cardDescription) {
            this.fillInCardDescription();
        }
    }

    fillInCardDescription() {
        this.setState({
            ...this.state,
            cardDescription: this.props.cardDescription,
        })
    }

    siteRedirect() {
        window.open(this.state.cardDescription.LinkToProduct)
    }

    addPostpone() {
        const Postpone = this.props.Postpone;
        const thing = {
            product: this.state.cardDescription._id,
            parameter: this.state.cardDescription.Parameters._id,
            compatibility: this.state.cardDescription.Parameters.compatibility,
        };
        Postpone.push(thing);
        this.updateData(Postpone);
    }

    removePostpone(item) {
        const Postpone = this.props.Postpone;
        Postpone.map((itemPostpone, index) => {
            if (itemPostpone.product === item) {
                Postpone.splice(index, 1);
            }
            return Postpone;
        });
        this.updateData(Postpone);
    }

    updateData(Postpone) {
        const user = {
            UserID: this.props.UserID,
            Postpone,
        };
        this.props.setActionPostponeFunction(!this.props.SetActionPostpone);
        this.props.postponeFunction(Postpone);
        postUpdate(user, updateResult);
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

    renderButton = (item) => {
        if (item && validPostpone(this.props.Postpone, item)) {
            return (
                <ButtonMain btnClass={"button-main envelope-list text-18 uppercase medium"}
                                text={langCode(this.props.lang, "removeItem")} onClick={() => {this.removePostpone(item)}}/>
            )
        } else {
            return (
                <ButtonPostpone  onClick={this.addPostpone}/>
            )
        }
    };

    render() {
        if (!this.state.cardDescription.Parameters) return null;
        return (
            <div className="card-description">
                <div className="card-description__top-info">
                    <p className="card-description__title text-22 bold uppercase">{this.state.cardDescription.Manufacturer}</p>
                    <p className="card-description__article text-14 light">{this.state.cardDescription.ProductCode}</p>
                    <p className="card-description__article-mobile text-14 light">{this.state.cardDescription.ProductCode}</p>
                </div>
                <p className="card-description__article text-14 light">{this.state.cardDescription.Parameters.VendorCode}</p>
                <p className="card-description__paragraph text-14 light">{this.state.cardDescription.Description}</p>
                <div className="card-description__color-box">
                    <div className="color-box">
                        <p className="color-box__text text-16 uppercase bold">{langCode(this.props.lang, "Colors")}</p>
                        <ul className="color-box__list">
                            {this.state.cardDescription.Parameters.color && this.state.cardDescription.Parameters.color.map((item, index) => {
                                return this.renderColorRound(item, index);
                            })}
                        </ul>
                    </div>
                </div>
                <div className="card-description__button-bottom">
                    <p className="card-description__quantity text-22 color-aqua uppercase medium">{this.state.cardDescription.Parameters.Price + langCode(this.props.lang, "grn")}</p>
                    {this.renderButton(this.state.cardDescription && this.state.cardDescription._id)}
                    <ButtonMain btnClass={"button-white text-14"} text={"перейти в магазин для покупки"} onClick={this.siteRedirect}/>
                </div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        UserID: state.userReducer.UserID,
        Postpone: state.userReducer.Postpone,
        SetActionPostpone: state.userReducer.SetActionPostpone,
        lang: state.utiliteReducer.lang,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        postponeFunction: (Postpone) => {
            dispatch(actionPostpone(Postpone))
        },
        setActionPostponeFunction: (SetActionPostpone) => {
            dispatch(actionSetActionPostpone(SetActionPostpone))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(CardDescription);
