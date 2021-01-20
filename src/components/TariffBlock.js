import React from "react";
import {planList, tariffPlans} from "../access/temporaryConstants";
import ButtonMain from "./shared/ButtonMain";
import {connect} from "react-redux";
import {langCode} from "../access/lang/translaterJS";

class TariffBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planListArr: []
        }
    }

    componentDidMount() {
        const planListArr = tariffPlans.slice();
        planListArr.splice(1, 0, planList[this.props.item.index - 1]);
        this.setState({
            planListArr
        })
    }

    buyNow() {
        console.log("kjgjh")
    }

    renderMark(enable) {
        if (enable) {
            return (
                <svg className="tariff-line-icon">
                    <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#check-mark"/>
                </svg>
            )
        } else {
            return (
                <svg className="tariff-line-icon-disabled">
                    <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#close"/>
                </svg>
            )
        }

    }

    renderLine(item, index) {
        const enable = index < this.props.item.limit;
        return (
            <div className="tariff-line-wrapper" key={index}>
                {this.renderMark(enable)}
                <div className={enable ? "tariff-line text-14" : "tariff-line-disabled text-14"}>{item}</div>
            </div>
        )
    }

    render() {
        return (
            <div className="tariff-block">
                <h2 className="uppercase tariff-block-plan-title text-22">{langCode(this.props.lang, this.props.item.name)}</h2>
                <div className="tariff-block-number">{this.props.item.index}</div>
                <div className="tariff-line-block">
                    {this.state.planListArr && this.state.planListArr.map((item, index) => {
                        return this.renderLine(item, index);
                    })}
                </div>
                <div className="buy-block">
                    <svg className="buy-block-icon">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#payment-method"/>
                    </svg>
                    <div className="buy-block-text">{this.props.item.price}</div>
                </div>
                <ButtonMain btnClass="button-main text-16 uppercase" text={langCode(this.props.lang, "buyNow")} onClick={this.buyNow}/>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        lang: state.utiliteReducer.lang,
    }
}

export default connect(MapStateToProps)(TariffBlock);
