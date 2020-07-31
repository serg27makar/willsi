import React from "react";
import ru from "../access/lang/LangConstants";
import "../access/css/cart.css"

class ShowProductsBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerUser: this.props.subUsers[0].userName,
            subUsers: [],
            open: "",
        };
        this.renderUser = this.renderUser.bind(this);
    }

    closeOpen = () => {
        this.setState({
            ...this.state,
            open: this.state.open === "" ?
                "open" : "",
        });
    };

    changeUser = (index) => {
        this.setState({
            ...this.state,
            headerUser: this.props.subUsers[index].userName,
            open: this.state.open === "" ?
                "open" : "",
        });
    };

    renderUser = (item, index) => {
        if (item.userName !== this.state.headerUser) {
            return (
                <li className="dropdown-info-list__item" key={index} onClick={() => {this.changeUser(index)}}>
                    <div className="border-line" />
                    <div className="dropdown-info-list__link text-16 bold uppercase">{item.userName}</div>
                </li>
            )
        }
    };

    render() {
        return (
            <div className="row-wrap">
                <div className="deferred-goods show-products">
                    <div className="catalog-middle__product-all text-16 bold uppercase" >{ru.ShowProducts}</div>
                </div>
                <div className="deferred-goods show-products">
                    <div className="catalog-middle__for-me">
                        <ul>
                            <li className="for-me__button-drop">
                                <div className="for-me__button" onClick={this.closeOpen}>
                                    <div className="for-me__button-text text-16 bold uppercase">{this.state.headerUser}</div>
                                    <span className="for-me__button-icon">
                                        <svg className="icon">
                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                                        </svg>
                                    </span>
                                </div>
                                <ul className={"dropdown-info-list " + this.state.open}>
                                    {this.props.subUsers && this.props.subUsers.map((item, index) => {
                                        return this.renderUser(item, index);
                                    })}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowProductsBar;
