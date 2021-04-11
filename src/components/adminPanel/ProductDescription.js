import React from "react";
import {langCode} from "../../access/lang/translaterJS";
import {connect} from "react-redux";
import DoubleTextarea from "./DoubleTextarea";
import DoubleButton from "./DoubleButton";
import {updateResult} from "../../js/sharedFunctions";

class ProductDescription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Description: "",
            Composition: "",
            ModelParameters: "",
            CareInstructions: "",
            PaymentAndDelivery: "",
        };
        this.dataChange = this.dataChange.bind(this);
    }

    componentDidMount() {
        if (this.props.item) {
            this.fillInState();
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.item !== this.props.item) {
            this.fillInState();
        }
    }

    fillInState() {
        this.setState({
            Description: this.props.item.Description,
            Composition: this.props.item.Composition,
            ModelParameters: this.props.item.ModelParameters,
            CareInstructions: this.props.item.CareInstructions,
            PaymentAndDelivery: this.props.item.PaymentAndDelivery,
        })
    }

    dataChange(e) {
        e.stopPropagation();
        const name = e.target.name;
        const value = e.target.value;
        this.props.dataChange(name, value);
    }
    dataChangeDesc(value, name) {
        this.props.dataChange(name, value);
    }

    render() {
        return (
            <div className="product-description">
                <span className="add-store-label text-16">{langCode(this.props.lang, "Description")}</span>
                <DoubleTextarea
                    placeholder={langCode(this.props.lang, "Description")}
                    item={this.state.Description || ""} active={true}
                    changeValue={(value) => {this.dataChangeDesc(value, "Description")}}
                    toggle={updateResult}/>
                <span className="add-store-label first-after-description text-16">{langCode(this.props.lang, "Composition")}</span>
                <textarea className="form-shop__textarea text-14"
                          value={this.state.Composition || ""}
                          placeholder={langCode(this.props.lang, "Description")} name="Composition"
                          onChange={this.dataChange}/>
                <span className="add-store-label text-16">{langCode(this.props.lang, "ModelParameters")}</span>
                <textarea className="form-shop__textarea text-14"
                          value={this.state.ModelParameters || ""}
                          placeholder={langCode(this.props.lang, "Description")} name="ModelParameters"
                          onChange={this.dataChange}/>
                <span className="add-store-label text-16">{langCode(this.props.lang, "CareInstructions")}</span>
                <textarea className="form-shop__textarea text-14"
                          value={this.state.CareInstructions || ""}
                          placeholder={langCode(this.props.lang, "Description")} name="CareInstructions"
                          onChange={this.dataChange}/>
                <span className="add-store-label text-16">{langCode(this.props.lang, "PaymentAndDelivery")}</span>
                <textarea className="form-shop__textarea text-14"
                          value={this.state.PaymentAndDelivery || ""}
                          placeholder={langCode(this.props.lang, "Description")} name="PaymentAndDelivery"
                          onChange={this.dataChange}/>
            </div>
        )
    }
}
function MapStateToProps(state) {
    return {
        lang: state.utiliteReducer.lang,
    }
}

export default connect(MapStateToProps)(ProductDescription);

