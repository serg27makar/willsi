import React from "react";

class RutCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: "",
            catalogOpened: "",
        };
        this.closeOpen = this.closeOpen.bind(this);
    }

    closeOpen = () => {
        this.setState({
            ...this.state,
            open: this.state.open === "" ? "open" : "",
            catalogOpened: this.state.catalogOpened === "" ? "catalog-opened" : "",
        })
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
                    <span className={"catalog-button__text text-16 light " + this.state.catalogOpened}>{this.props.item.dropdownTitle}</span>
                    <svg className="icon icon-arrow-small ">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                    </svg>
                </button>
                <ul className={"dropdown-list " + this.state.open}>
                    {this.props.item.dropdownItems && this.props.item.dropdownItems.map((itemList, indexList) => {
                        return this.dropdownListItem(itemList, indexList);
                    })}
                </ul>
            </div>
        )
    }
}

export default RutCategory;
