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
        };
        this.dataChange = this.dataChange.bind(this);
    }

    componentDidMount() {}

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.item.Manufacturer !== this.props.item.Manufacturer) this.setState({Manufacturer: this.props.item.Manufacturer});
        if (prevProps.item.ProdName !== this.props.item.ProdName) this.setState({ProdName: this.props.item.ProdName});
        if (prevProps.item.ProductCode !== this.props.item.ProductCode) this.setState({ProductCode: this.props.item.ProductCode});
    }

    dataChange(value, name) {
        this.props.dataChange(name, value);
    }

    render() {
        return (
            <div>

                <DoubleButton placeholderData={ProductManufacturerInputList[0]}
                              item={this.state.Manufacturer} active={true}
                              changeValue={(value) => {this.dataChange(value, "Manufacturer")}}
                              toggle={updateResult}/>

                <DoubleButton placeholderData={ProductManufacturerInputList[1]}
                              item={this.state.ProdName} active={true}
                              changeValue={(value) => {this.dataChange(value, "ProdName")}}
                              toggle={updateResult}/>

                <DoubleButton placeholderData={ProductManufacturerInputList[2]}
                              item={this.state.ProductCode} active={true}
                              changeValue={(value) => {this.dataChange(value, "ProductCode")}} toggle={updateResult}/>

            </div>
        )
    }
}

export default ProductTypeDescription;
