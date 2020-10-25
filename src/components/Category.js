import React from "react";
import {actionSearchItemParams} from "../action";
import {connect} from "react-redux";
import ru from "../access/lang/LangConstants";

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: "",
        };
        this.closeOpen = this.closeOpen.bind(this);
        this.checkedItem = this.checkedItem.bind(this);
    }

    closeOpen() {
        this.setState({
            ...this.state,
            open: this.state.open === "" ?
                "open" : "",
        })
    };

    checkedItem(catalogName, itemValue, e) {
        const searchItemParams = this.props.searchItemParams || {};
        const name = e.target.name;
        const value = e.target.value;
        let item;
        if (catalogName === "Manufacturer") {
            if (searchItemParams.itemValue) {
                const index = searchItemParams.itemValue.indexOf(itemValue);
                if (index === -1) {
                    searchItemParams.itemValue.push(itemValue)
                } else {
                    searchItemParams.itemValue.splice(index, 1)
                }
                item = {catalogName, itemValue: searchItemParams.itemValue};
            } else {
                item = {catalogName, itemValue: [itemValue] }
            }
            this.props.searchItemParamsFunction(item);
        }

        this.setState({
            ...this.state,
            [name]: !value,
        });
    }

    renderCategoryList(item, index, parentIndex, catalogName) {
        const idCheckbox = "checkbox" + parentIndex + index;
        return (
            <div key={index}>
                <input className="category-list__input"
                       type="checkbox" id={idCheckbox}
                       name={item}
                       value={this.state[item]}
                       onChange={(e) => {this.checkedItem(catalogName, item, e)}}
                />
                <label className="category-list__label text-14 light" htmlFor={idCheckbox}>{catalogName === "color" ? ru[item] : item}</label>
            </div>
        )
    };

    render() {
        return (
            <div className="catalog-sidebar__item">
                <div className="catalog-wrapper text-18 medium" onClick={this.closeOpen}>
                    <span className="catalog-wrapper__name">{this.props.item.catalogTitle}</span>
                    <svg className="icon icon-arrow-small ">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                    </svg>
                </div>
                <div className={"catalog__category-list " + this.state.open}>
                    <div className="category-list">
                        {this.props.item.catalogItems && this.props.item.catalogItems.map((listItem, listIndex) => {
                            return this.renderCategoryList(listItem, listIndex, this.props.index, this.props.item.catalogName)
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
function MapStateToProps(state) {
    return {
        searchItemParams: state.catalogReducer.searchItemParams,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        searchItemParamsFunction: (searchItemParams) => {
            dispatch(actionSearchItemParams(searchItemParams))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Category);
