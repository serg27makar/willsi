import React from "react";
import ButtonMain from "./shared/ButtonMain";
import ru from "../access/lang/LangConstants";
import "../access/css/cart.css"
import ProductsCart from "./ProductsCart";
import {connect} from "react-redux";

class PerfectThings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    render() {
        return (
            <div className="container">
                <ProductsCart catalog={true} products={this.props.ProductsArr} compilation={true}/>
                <div className="col-12">
                    <ButtonMain btnClass={"button-refresh text-14 medium button-white"} text={ru.UpdateProduct}/>
                </div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        ProductsArr: state.productReducer.ProductsArr,
    }
}
const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(MapStateToProps, mapDispatchToProps)(PerfectThings);
