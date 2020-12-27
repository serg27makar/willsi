import React from "react";
import {connect} from "react-redux";
import ru from "../access/lang/LangConstants";
import {actionSelectedProductToEdit} from "../action";
import AddButton from "./adminPanel/AddButton";

class ProductEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    selectedProductToEdit(item) {
        this.props.selectedProductToEditFunction(item);
    }

    renderListEditor(item, index) {
        return (
            <div className="stroke-descriptor-wrapper" key={index} onClick={() => {this.selectedProductToEdit(item)}}>
                <div className="stroke-descriptor-number text-14">{index + 1}</div>
                <div className="stroke-descriptor-manufacturer text-14">{item.Manufacturer}</div>
                <div className="stroke-descriptor-name text-14">{item.ProdName}</div>
                <div className="stroke-descriptor-code text-14">{item.ProductCode}</div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <div className="stroke-descriptor-wrapper">
                    <div className="stroke-descriptor-number text-14"> № </div>
                    <div className="stroke-descriptor-manufacturer text-14">{ru.Manufacturer}</div>
                    <div className="stroke-descriptor-name text-14">{ru.ProdName}</div>
                    <div className="stroke-descriptor-code text-14">{ru.ProductCode}</div>
                </div>
                {this.props.list && this.props.list.map((item, index) => {
                    return this.renderListEditor(item, index);
                })}
                <AddButton lastItem={true} addProduct={this.props.addProduct}/>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {}
}
const mapDispatchToProps = dispatch => {
    return {
        selectedProductToEditFunction: (SelectedProductToEdit) => {
            dispatch(actionSelectedProductToEdit(SelectedProductToEdit))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(ProductEditor);
