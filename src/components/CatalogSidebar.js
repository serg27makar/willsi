import React from "react";
import Category from "./Category";
import {sidebarCatalogArr} from "../access/temporaryConstants";
import {getAllProductsData} from "../utilite/axiosConnect";

class CatalogSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Categories: sidebarCatalogArr,
        };
        this.getDataProducts = this.getDataProducts.bind(this);
    }

    getDataProducts(data) {
        const catalogItems = [];
        if (data) {
            data.map(item => {
                catalogItems.push(item.Manufacturer);
            })
        }
        const Categories = this.state.Categories;
        Categories.map((item, index) => {
            if (item.catalogName === "Manufacturer") {
                item.catalogItems = catalogItems;
            }
        })
        this.setState({
            Categories,
        })
    }

    componentDidMount() {
        let search = {};
        getAllProductsData(search, this.getDataProducts);
    }

    render() {
        return (
           <div>
               {this.state.Categories && this.state.Categories.map((item, index) => {
                   return <Category item={item} index={index} key={index}/>
               })}
           </div>
        )
    }
}

export default CatalogSidebar;
