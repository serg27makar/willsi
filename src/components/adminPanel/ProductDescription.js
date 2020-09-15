import React from "react";
import ru from "../../access/lang/LangConstants";

class ProductDescription extends React.Component {
    constructor(props) {
        super(props);
        this.dataChange = this.dataChange.bind(this);
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
                <span className="add-store-label">{ru.Description}</span>
                <textarea className="form-shop__textarea text-14"
                          placeholder={ru.Description} name="Description"
                          onChange={this.dataChange}/>
                <span className="add-store-label">{ru.Composition}</span>
                <textarea className="form-shop__textarea text-14"
                          placeholder={ru.Description} name="Composition"
                          onChange={this.dataChange}/>
                <span className="add-store-label">{ru.ModelParameters}</span>
                <textarea className="form-shop__textarea text-14"
                          placeholder={ru.Description} name="ModelParameters"
                          onChange={this.dataChange}/>
                <span className="add-store-label">{ru.CareInstructions}</span>
                <textarea className="form-shop__textarea text-14"
                          placeholder={ru.Description} name="CareInstructions"
                          onChange={this.dataChange}/>
                <span className="add-store-label">{ru.PaymentAndDelivery}</span>
                <textarea className="form-shop__textarea text-14"
                          placeholder={ru.Description} name="PaymentAndDelivery"
                          onChange={this.dataChange}/>
            </div>
        )
    }
}

export default ProductDescription;
