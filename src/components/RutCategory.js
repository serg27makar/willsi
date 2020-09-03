import React from "react";
import {actionOpenCatalog} from "../action";
import {connect} from "react-redux";
import ru from "../access/lang/LangConstants";

class RutCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            selected: -1,
        };
        this.closeOpen = this.closeOpen.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.catalog !== this.props.catalog)
            this.setState({
                ...this.state,
                isOpen: this.props.index === this.props.catalog,
                selected: -1,
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

    chooseListItem(item, index) {
        if (this.state.selected === index) {
            index = -1
        }
        this.setState({
            ...this.state,
            selected: index
        });
        this.props.selectItem(index);
    }

    dropdownListItem = (item, index) => {
        let name;
        let deleteBtn = false;
        if (typeof item === "object") {
            name = item.name;
            deleteBtn = item.deleteBtn;
        } else {
            name = item;
        }
        return (
            <li className={"dropdown-list__item " + (this.state.selected === index ? "item-select" : "")} key={index} onClick={() => {this.chooseListItem(name, index)}}>
                <div className="dropdown-list__link text-14" >{name}</div>
                {this.deleteBtn(deleteBtn, index)}
            </li>
        )
    };

    deleteBtn(deleteBtn, index) {
        if(deleteBtn) {
            return (
                <div className="deleteBtn" onClick={(e) => {this.props.deleteBtnFun(index, e)}}>+</div>
            )
        } else {
            return null;
        }
    }

    addListItem = () => {
        if (this.props.isAddItem) {
            return (
                <li className="dropdown-list__item" onClick={this.props.addItem}>
                    <div className="dropdown-list__link text-14" >{this.props.isAddItem}</div>
                </li>
            )
        } else {
            return null;
        }
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
                    {this.addListItem()}
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
