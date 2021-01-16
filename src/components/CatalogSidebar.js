import React from "react";
import Category from "./Category";
import {sidebarCatalogArr} from "../access/temporaryConstants";
import PriceCategory from "./dropdowns/PriceCategory";
import {connect} from "react-redux";

class CatalogSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Categories: sidebarCatalogArr,
            Manufacturer: [],
        };
        this.getDataProducts = this.getDataProducts.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.Manufacturer !== this.props.Manufacturer || this.state.Manufacturer !== this.props.Manufacturer) {
            this.setState({
                ...this.state,
                Manufacturer: this.props.Manufacturer,
                Categories: [],
            })
            this.getDataProducts()
        }
    }

    getDataProducts() {
        const Categories = this.state.Categories;
        Categories.map((item, index) => {
            if (item.catalogName === "Manufacturer") {
                item.catalogItems = this.props.Manufacturer;
            }
            return index;
        })
        this.setState({Categories})
    }

    render() {
        return (
           <div>
               {this.state.Categories && this.state.Categories.map((item, index) => {
                   if (item.catalogName === "Price") {
                       return (
                           <PriceCategory item={item} index={index} key={index}/>
                       )
                   }
                   return <Category item={item} index={index} key={index}/>
               })}
           </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        Manufacturer: state.catalogReducer.Manufacturer,
    }
}
const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(MapStateToProps, mapDispatchToProps)(CatalogSidebar);
