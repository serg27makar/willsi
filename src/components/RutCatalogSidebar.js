import React from "react";
import ru from "../access/lang/LangConstants";
import RutCategory from "./RutCategory";

class RutCatalogSidebar extends React.Component {
    render() {
        return (
            <div className="catalog-sidebar__item">
                <div className="catalog-envelope text-18 medium">
                    <span className="catalog-envelope__name">{ru.Catalog}</span>
                </div>
                <div className="catalog-body">
                    {this.props.Categories && this.props.Categories.map((item, index) => {
                        return (
                            <RutCategory item={item} key={index} index={index}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default RutCatalogSidebar;
