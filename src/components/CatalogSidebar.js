import React from "react";
import Category from "./Category";
import {sidebarCatalogArr} from "../access/temporaryConstants";
import {getAllProductsData} from "../utilite/axiosConnect";
import PriceCategory from "./dropdowns/PriceCategory";

class CatalogSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Categories: sidebarCatalogArr,
        };
        this.getDataProducts = this.getDataProducts.bind(this);
    }

    componentDidMount() {
        let search = {};
        getAllProductsData(search, this.getDataProducts);
    }

    getDataProducts(data) {
        const catalogItemsSearch = [];
        const catalogItems = [];
        if (data) {
            data.map(item => {
                if (catalogItemsSearch.indexOf(item.Manufacturer.toUpperCase()) === -1) {
                    catalogItemsSearch.push(item.Manufacturer.toUpperCase());
                    catalogItems.push(item.Manufacturer);
                }
                return catalogItems;
            })
        }
        const Categories = this.state.Categories;
        Categories.map((item, index) => {
            if (item.catalogName === "Manufacturer") {
                item.catalogItems = catalogItems;
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

export default CatalogSidebar;
