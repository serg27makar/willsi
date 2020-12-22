import React from "react";

class DropdownModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: "",
        };
        this.closeOpen = this.closeOpen.bind(this);
    }

    closeOpen = () => {
        this.setState({
            ...this.state,
            open: this.state.open === "" ? "open" : "",
        })
    };

    changeItem(item, index) {
        this.props.changeItem(item);
        this.closeOpen();
    }

    renderItem = (item, index) => {
        return (
            <li className={"dropdown-country " + (this.props.selected === item ? "item-select" : "")} key={index} onClick={() => {this.changeItem(item, index)}}>
                <div className="dropdown-list__link text-14" >{item}</div>
            </li>
        )
    };

    render() {
        return (
            <div className="catalog-top__dropdown-info">
                <div className="catalog-top__button-drop-modal" onClick={this.closeOpen}>
                    <div className="catalog-top__button-text text-14 uppercase">{this.props.title}</div>
                    <span className="catalog-top__button-icon">
                        <svg className="icon icon-arrow-small ">
                          <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                        </svg>
                    </span>
                </div>
                <div className={"dropdown-info country-list " + this.state.open}>
                    <ul>
                        {this.props.items && this.props.items.map((item, index) => {
                            return this.renderItem(item, index);
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default DropdownModal;
