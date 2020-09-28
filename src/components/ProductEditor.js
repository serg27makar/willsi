import React from "react";
import {connect} from "react-redux";
import ru from "../access/lang/LangConstants";
import {actionSelectedProductToEdit, setActionAdminPanel} from "../action";

class ProductEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ShopEditParams: []
        };
    }

    componentDidMount() {
        if (this.props.list && this.props.list.length > 0) {
            this.setState({
                ShopEditParams: this.props.list,
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if ((prevProps.list !== this.props.list) ||
            (prevProps.ShopEditParamsAction !== this.props.ShopEditParamsAction)) {
            this.setState({
                ShopEditParams: this.props.list,
            })
        }
    }

    selectedProductToEdit(item) {
        this.props.selectedProductToEditFunction(item);
    }

    renderListEditor(item, index) {
        return (
            <div className="stroke-descriptor-wrapper" key={index} onClick={() => {this.selectedProductToEdit(item)}}>
                <div className="stroke-descriptor-number">{index + 1}</div>
                <div className="stroke-descriptor-manufacturer">{item.Manufacturer}</div>
                <div className="stroke-descriptor-name">{item.ProdName}</div>
                <div className="stroke-descriptor-code">{item.ProductCode}</div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <div className="stroke-descriptor-wrapper">
                    <div className="stroke-descriptor-number"> № </div>
                    <div className="stroke-descriptor-manufacturer">{ru.Manufacturer}</div>
                    <div className="stroke-descriptor-name">{ru.ProdName}</div>
                    <div className="stroke-descriptor-code">{ru.ProductCode}</div>
                </div>
                {this.state.ShopEditParams && this.state.ShopEditParams.map((item, index) => {
                    return this.renderListEditor(item, index);
                })}
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
