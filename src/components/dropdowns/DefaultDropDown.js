import React from "react";
import ru from "../../access/lang/LangConstants";

class DefaultDropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: "",
        };
        this.closeOpen = this.closeOpen.bind(this);
    }

    closeOpen() {
        this.setState({
            ...this.state,
            open: this.state.open === "" ?
                "open" : "",
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
                <div className={"catalog__category-list country-list " + this.state.open}>
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

export default DefaultDropDown;
