import React from "react";
import DoubleButton from "./DoubleButton";
import {updateResult} from "../../js/sharedFunctions";
import {ProductManufacturerInputList} from "../../access/temporaryConstants";

class ProductTypeDescription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Manufacturer: "",
            ProdName: "",
            ProductCode: "",
            VendorCode: "",
            Price: "",
        };
        this.dataChange = this.dataChange.bind(this);
    }

    componentDidMount() {}

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.item.Manufacturer !== this.props.item.Manufacturer) this.setState({Manufacturer: this.props.item.Manufacturer});
        if (prevProps.item.ProdName !== this.props.item.ProdName) this.setState({ProdName: this.props.item.ProdName});
        if (prevProps.item.ProductCode !== this.props.item.ProductCode) this.setState({ProductCode: this.props.item.ProductCode});
        if (prevProps.item.VendorCode !== this.props.item.VendorCode) this.setState({VendorCode: this.props.item.VendorCode});
        if (prevProps.item.Price !== this.props.item.Price) this.setState({Price: this.props.item.Price});
    }

    dataChange(value, name) {
        this.props.dataChange(name, value);
    }

    render() {
        return (
            <div>

                <DoubleButton placeholderData={ProductManufacturerInputList[0]} item={this.state.Manufacturer}
                              changeValue={(value) => {this.dataChange(value, "Manufacturer")}} toggle={updateResult}/>

                <DoubleButton placeholderData={ProductManufacturerInputList[1]} item={this.state.ProdName}
                              changeValue={(value) => {this.dataChange(value, "ProdName")}} toggle={updateResult}/>

                <DoubleButton placeholderData={ProductManufacturerInputList[2]} item={this.state.ProductCode}
                              changeValue={(value) => {this.dataChange(value, "ProductCode")}} toggle={updateResult}/>

                <DoubleButton placeholderData={ProductManufacturerInputList[3]} item={this.state.VendorCode}
                              changeValue={(value) => {this.dataChange(value, "VendorCode")}} toggle={updateResult}/>

                <DoubleButton placeholderData={ProductManufacturerInputList[4]} item={this.state.Price}
                              changeValue={(value) => {this.dataChange(value, "Price")}} toggle={updateResult}/>

            </div>
        )
    }
}

export default ProductTypeDescription;
