import React from "react";
import {connect} from "react-redux";

const btnTabs = [
    "Состав",
    "Параметры модели",
    "Инструкция по уходу",
    "Оплата и доставка",
];

class CartTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberTab: 0,
            active: "tabs-active",
            textTabs: [],
            SelectProduct: {},
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.SelectProduct !== this.props.SelectProduct && this.props.SelectProduct) {
            const {Composition, ModelParameters, CareInstructions, PaymentAndDelivery} =  this.props.SelectProduct;
            const textTabs = [Composition, ModelParameters, CareInstructions, PaymentAndDelivery];
            this.setState({...this.state, textTabs: textTabs, SelectProduct: this.props.SelectProduct})
        }
    }

    activeTab = (index) => {
        this.setState({
            ...this.state,
            numberTab: index,
        })
    };

    renderTabsButtons = () => {
        return (
            <div className="tabs-wrapper__top-button">
                {btnTabs && btnTabs.map((item, index) => {
                    return (
                        <button key={index}
                                className={"tabs-wrapper__button text-20 uppercase medium " + (this.state.numberTab === index ? this.state.active : "" )}
                                onClick={() => {this.activeTab(index)}}
                        >
                            <span className="tabs-wrapper__text">{item}</span>
                        </button>
                    )
                })}
            </div>
        )
    };

    renderTabsContent = () => {
        return (
            <div className="tabs-wrapper__content-info">
                <div className="tabs-wrapper__show-tabs" >
                    {this.state.textTabs && this.state.textTabs.map((text, index) => {
                        if (this.state.numberTab === index) {
                            return (
                                <p className="tabs-wrapper__paragraph text-14 light" key={index}>{text}</p>
                            )
                        }
                        return null;
                    })}
                </div>
            </div>
        )
    };

    render() {
        return (
            <div className="cart-tabs">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tabs-wrapper">
                                {this.renderTabsButtons()}
                                {this.renderTabsContent()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        dataRedirect: state.pageReducer.dataRedirect,
        ProductID: state.productReducer.ProductID,
        ProductsArr: state.productReducer.ProductsArr,
        SelectProduct: state.productReducer.SelectProduct,
    }
}
const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(MapStateToProps, mapDispatchToProps)(CartTabs);
