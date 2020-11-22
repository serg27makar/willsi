import React from "react";
import ru from "../../access/lang/LangConstants";

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

    render() {
        return (
            <div className="product-description">
                <span className="add-store-label text-16">{ru.Description}</span>
                <textarea className="form-shop__textarea text-14"
                          value={this.state.Description || ""}
                          placeholder={ru.Description} name="Description"
                          onChange={this.dataChange}/>
                <span className="add-store-label text-16">{ru.Composition}</span>
                <textarea className="form-shop__textarea text-14"
                          value={this.state.Composition || ""}
                          placeholder={ru.Description} name="Composition"
                          onChange={this.dataChange}/>
                <span className="add-store-label text-16">{ru.ModelParameters}</span>
                <textarea className="form-shop__textarea text-14"
                          value={this.state.ModelParameters || ""}
                          placeholder={ru.Description} name="ModelParameters"
                          onChange={this.dataChange}/>
                <span className="add-store-label text-16">{ru.CareInstructions}</span>
                <textarea className="form-shop__textarea text-14"
                          value={this.state.CareInstructions || ""}
                          placeholder={ru.Description} name="CareInstructions"
                          onChange={this.dataChange}/>
                <span className="add-store-label text-16">{ru.PaymentAndDelivery}</span>
                <textarea className="form-shop__textarea text-14"
                          value={this.state.PaymentAndDelivery || ""}
                          placeholder={ru.Description} name="PaymentAndDelivery"
                          onChange={this.dataChange}/>
            </div>
        )
    }
}

export default ProductDescription;
