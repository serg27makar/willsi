import React from "react";
import ru from "../access/lang/LangConstants";
import RutCategory from "./RutCategory";

class RutCatalogSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.selectedSubCatalog = this.selectedSubCatalog.bind(this);
    }

    selectedSubCatalog(data) {
        this.props.selectedSubCatalog(data);
    }

    render() {
        return (
            <div className="catalog-sidebar__item">
                <div className="catalog-envelope text-18 medium">
                    <span className="catalog-envelope__name">{ru.Catalog}</span>
                </div>
                <div className="catalog-body">
                    {this.props.Categories && this.props.Categories.map((item, index) => {
                        return (
                            <RutCategory item={item} key={index} index={index} selectItem={this.selectedSubCatalog}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default RutCatalogSidebar;
