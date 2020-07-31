import React from "react";
import Category from "./Category";

class CatalogSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Categories: [],
        };
    }

    render() {
        return (
           <div>
               {this.props.Categories && this.props.Categories.map((item, index) => {
                   return <Category item={item} index={index} key={index}/>
               })}
           </div>
        )
    }
}

export default CatalogSidebar;
