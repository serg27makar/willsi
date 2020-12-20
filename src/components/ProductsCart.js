import React from "react";
import "../access/css/cart.css"
import FullProductCard from "./productsCard/FullProductCard";

class ProductsCart extends React.Component {
    render() {
        return (
            <div>
                <div className={this.props.compilation ? "compilation-row footer-row-wrap" : "row-wrap"}>
                    {this.props.products && this.props.products.map((item, index) => {
                        return (
                            <FullProductCard catalog={this.props.catalog} compilation={this.props.compilation} item={item} key={index}/>
                        )
                    })}
                </div>
            </div>

        )
    }
}

export default ProductsCart;
