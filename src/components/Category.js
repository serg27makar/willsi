import React from "react";
import {actionCloseAllCatalogs, actionSearchItemColor, actionSearchItemParams} from "../action";
import {connect} from "react-redux";
import ru from "../access/lang/LangConstants";
import {isEmptyObject} from "../js/sharedFunctions";

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
        this.closeOpen = this.closeOpen.bind(this);
        this.checkedItem = this.checkedItem.bind(this);
        this.clearState = this.clearState.bind(this);
        this.toggleItemValue = this.toggleItemValue.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.searchItemParams !== this.props.searchItemParams) {
            if (isEmptyObject(this.props.searchItemParams)) {
                this.clearState();
            }
        }
        if (prevProps.closeAllCatalogs !== this.props.closeAllCatalogs) {
            if (this.props.closeAllCatalogs !== this.props.item.catalogName) {
                this.setState({
                    ...this.state,
                    open: false,
                })
            }
        }
    }

    clearState() {
        let clearState = {}
        for (const i in this.state) {
            if (typeof this.state[i] === "boolean") {
                clearState = {...clearState, [i]: false}
            }
        }
        this.setState(clearState)
    }

    closeOpen() {
        this.props.closeAllCatalogsFunction(this.state.open ? "" : this.props.item.catalogName);
        this.setState({
            ...this.state,
            open: !this.state.open,
        })
    };

    checkedItem(catalogName, itemValue, e) {
        const searchItemParams = this.props.searchItemParams || {};
        const searchItemColor = this.props.searchItemColor || {};
        const value = (e.target.value === "true");
        let item;
        if (catalogName === "Manufacturer") {
            item = this.createSearchItem(searchItemParams, "ManufacturerSearch", String(itemValue).toUpperCase() , itemValue, value);
            this.props.searchItemParamsFunction(item);
        }
        if (catalogName === "color") {
            item = this.createSearchItem(searchItemColor, catalogName, itemValue, itemValue, value);
            this.props.searchItemColorFunction(item);
        }
    }

    createSearchItem(searchItem, catalogName, itemValue, toggleValue, value) {
        let item;
        if (searchItem.itemValue) {
            const index = searchItem.itemValue.indexOf(itemValue);
            if (index === -1) {
                searchItem.itemValue.push(itemValue);
            } else if (value) {
                searchItem.itemValue.splice(index, 1);
            }
            item = {catalogName, itemValue: searchItem.itemValue};
        } else {
            item = {catalogName, itemValue: [itemValue] };
        }
        this.toggleItemValue(toggleValue, value);
        return item;
    }

    toggleItemValue(name, value) {
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
                       checked={this.state[item] || false}
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
                    <span className="catalog-wrapper__name">{ru[this.props.item.catalogName]}</span>
                    <svg className="icon icon-arrow-small ">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                    </svg>
                </div>
                <div className={"catalog__category-list " + (this.state.open ? "open" : "")}>
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
        searchItemColor: state.catalogReducer.searchItemColor,
        closeAllCatalogs: state.catalogReducer.closeAllCatalogs,
        Manufacturer: state.catalogReducer.Manufacturer,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        searchItemParamsFunction: (searchItemParams) => {
            dispatch(actionSearchItemParams(searchItemParams))
        },
        searchItemColorFunction: (searchItemColor) => {
            dispatch(actionSearchItemColor(searchItemColor))
        },
        closeAllCatalogsFunction: (closeAllCatalogs) => {
            dispatch(actionCloseAllCatalogs(closeAllCatalogs))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Category);
