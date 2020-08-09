import React from "react";
import {actionOpenCatalog, actionOpenModal} from "../action";
import {connect} from "react-redux";

class RutCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
        this.closeOpen = this.closeOpen.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.catalog !== this.props.catalog)
            this.setState({
                ...this.state,
                isOpen: this.props.index === this.props.catalog,
            })
    }

    closeOpen = () => {
        this.props.openCatalogFunction(this.props.index);
        if (this.props.index === this.props.catalog) {
            this.setState({
                ...this.state,
                isOpen: !this.state.isOpen,
            })
        }
    };

    dropdownListItem = (item, index) => {
        return (
            <li className="dropdown-list__item" key={index}>
                <div className="dropdown-list__link text-14 light" >{item}</div>
            </li>
        )
    };

    render() {
        return (
            <div className="catalog-product">
                <button className="catalog-button" onClick={this.closeOpen}>
                    <span className={"catalog-button__text text-16 light " + (this.state.isOpen ? "catalog-opened" : "")}>{this.props.item.dropdownTitle}</span>
                    <svg className="icon icon-arrow-small ">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                    </svg>
                </button>
                <ul className={"dropdown-list " + (this.state.isOpen ? "open" : "")}>
                    {this.props.item.dropdownItems && this.props.item.dropdownItems.map((itemList, indexList) => {
                        return this.dropdownListItem(itemList, indexList);
                    })}
                </ul>
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

export default connect(MapStateToProps, mapDispatchToProps)(RutCategory);
