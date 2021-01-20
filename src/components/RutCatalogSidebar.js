import React from "react";
import RutCategoryCatalog from "./dropdowns/RutCategoryCatalog";
import {connect} from "react-redux";
import {langCode} from "../access/lang/translaterJS";

class RutCatalogSidebar extends React.Component {

    render() {
        return (
            <div className="catalog-sidebar__item">
                <div className="catalog-envelope text-18 medium">
                    <span className="catalog-envelope__name">{langCode(this.props.lang, "Catalog")}</span>
                </div>
                <div className="catalog-body">
                    {this.props.Categories && this.props.Categories.map((item, index) => {
                        return (
                            <RutCategoryCatalog item={item} key={index} index={index}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        lang: state.utiliteReducer.lang,
    }
}

export default connect(MapStateToProps)(RutCatalogSidebar);

