import React from "react";
import ru from "../access/lang/LangConstants";
import RutCategory from "./RutCategory";
import {actionOpenCatalog} from "../action";
import {connect} from "react-redux";

class RutCatalogSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.selectedSubCatalog = this.selectedSubCatalog.bind(this);
        this.selectedCatalog = this.selectedCatalog.bind(this);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.catalog !== this.props.catalog) {
            this.selectedCatalog(this.props.catalog);
        }
    }

    selectedSubCatalog(data) {
        this.props.selectedSubCatalog(data);
    }

    selectedCatalog(data) {
        this.props.selectedCatalog(data);
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

function MapStateToProps(state) {
    return {
        catalog: state.catalogReducer.catalog,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        openCatalogFunction: (catalog) => {
            dispatch(actionOpenCatalog(catalog))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(RutCatalogSidebar);
