import React from "react";
import {actionCloseAllCatalogs} from "../../action";
import {connect} from "react-redux";

class DefaultDropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
        this.closeOpen = this.closeOpen.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.closeAllCatalogs !== this.props.closeAllCatalogs) {
            if (this.props.closeAllCatalogs !== this.props.title) {
                this.setState({
                    ...this.state,
                    open: false,
                })
            }
        }
    }

    closeOpen() {
        this.props.closeAllCatalogsFunction(this.state.open ? "" : this.props.title);
        this.setState({
            ...this.state,
            open: !this.state.open,
        })
    };

    dropdownListItem = (item, index) => {
        return (
            <li className={"dropdown-country " + (this.props.selected === item ? "item-select" : "")} key={index} onClick={() => {this.props.chooseListItem(item, index)}}>
                <div className="dropdown-list__link text-14" >{item}</div>
            </li>
        )
    };

    render() {
        return (
            <div className="catalog-sidebar__item">
                <div className="catalog-wrapper text-18 medium" onClick={this.closeOpen}>
                    <span className="catalog-wrapper__name">{this.props.title}</span>
                    <svg className="icon icon-arrow-small ">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                    </svg>
                </div>
                <div className={"catalog__category-list country-list " + (this.state.open ? "open" : "")}>
                        <ul>
                            {this.props.items && this.props.items.map((itemList, indexList) => {
                                return this.dropdownListItem(itemList, indexList);
                            })}
                        </ul>
                </div>
            </div>
        )
    }
}
function MapStateToProps(state) {
    return {
        closeAllCatalogs: state.catalogReducer.closeAllCatalogs,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        closeAllCatalogsFunction: (closeAllCatalogs) => {
            dispatch(actionCloseAllCatalogs(closeAllCatalogs))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(DefaultDropDown);
