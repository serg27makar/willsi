import React from "react";
import DoubleButton from "./DoubleButton";
import {updateResult} from "../../js/sharedFunctions";
import {ProductLinkInputList} from "../../access/temporaryConstants";

class ProductLinkInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Photo1: "",
            Photo2: "",
            Photo3: "",
            LinkToProduct: "",
        };
        this.dataChange = this.dataChange.bind(this);
    }

    componentDidMount() {}

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.item.Photo1 !== this.props.item.Photo1) this.setState({Photo1: this.props.item.Photo1});
        if (prevProps.item.Photo2 !== this.props.item.Photo2) this.setState({Photo2: this.props.item.Photo2});
        if (prevProps.item.Photo3 !== this.props.item.Photo3) this.setState({Photo3: this.props.item.Photo3});
        if (prevProps.item.LinkToProduct !== this.props.item.LinkToProduct) this.setState({LinkToProduct: this.props.item.LinkToProduct});
    }

    dataChange(value, name) {
        this.props.dataChange(name, value);
    }

    render() {
        return (
            <div>

                <DoubleButton placeholderData={ProductLinkInputList[0]} item={this.state.Photo1}
                              changeValue={(value) => {this.dataChange(value, "Photo1")}} toggle={updateResult}/>

                <DoubleButton placeholderData={ProductLinkInputList[1]} item={this.state.Photo2}
                              changeValue={(value) => {this.dataChange(value, "Photo2")}} toggle={updateResult}/>

                <DoubleButton placeholderData={ProductLinkInputList[2]} item={this.state.Photo3}
                              changeValue={(value) => {this.dataChange(value, "Photo3")}} toggle={updateResult}/>

                <DoubleButton placeholderData={ProductLinkInputList[3]} item={this.state.LinkToProduct}
                              changeValue={(value) => {this.dataChange(value, "LinkToProduct")}} toggle={updateResult}/>

            </div>
        )
    }
}

export default ProductLinkInput;
