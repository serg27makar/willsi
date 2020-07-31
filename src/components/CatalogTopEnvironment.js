import React from 'react';
import "./../access/css/cart.css";
import ru from "../access/lang/LangConstants";

class CatalogTopEnvironment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerUser: this.props.subUsers[0].userName,
            params: this.props.subUsers[0].params,
            open: "",
        }
    }

    closeOpen = () => {
        this.setState({
            ...this.state,
            open: this.state.open === "" ?
                "open" : "",
        })
    };

    changeUser = (index) => {
        this.setState({
            ...this.state,
            headerUser: this.props.subUsers[index].userName,
            params: this.props.subUsers[index].params,
            open: this.state.open === "" ?
                "open" : "",
        });
    };

    renderParams = (item, index) => {
        return (
            <li className="list-object__item text-16 bold" key={index}>
                <p className="list-object__text">{item.title + " -"}</p>
                <span className="list-object__text-value color-aqua">{item.size + ru.sm}</span>
            </li>
        )
    };

    renderUser = (item, index) => {
        if (item.userName !== this.state.headerUser) {
            return (
                <div className="dropdown-info__item" key={index} onClick={() => {this.changeUser(index)}}>
                    <div className="border-line" />
                    <div className="dropdown-info__link text-16 bold uppercase">{item.userName}</div>
                </div>
            )
        }
    };

    render() {
        return (
            <div className="catalog-top-env container">
                <div className="environment-row align-items-center">
                    <div className="select-fitting-user">

                        <div className="catalog-top__dropdown-info">
                            <div className="catalog-top__button-drop" onClick={this.closeOpen}>
                                <div className="catalog-top__button-text text-16 bold uppercase">{this.state.headerUser}</div>
                                <span className="catalog-top__button-icon">
                                    <svg className="icon icon-arrow-small ">
                                      <use
                                          xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                                    </svg>
                                </span>
                            </div>
                            <div className={"dropdown-info " + this.state.open}>
                                {this.props.subUsers && this.props.subUsers.map((item, index) => {
                                    return this.renderUser(item, index);
                                })}
                                <div className="dropdown-info__item">
                                    <div className="dropdown-info__link icon-plus"/>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-12 catalog-top__list-object">
                        <ul className="list-object">
                            {this.state.params && this.state.params.map((item, index) => {
                                return this.renderParams(item, index);
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    };
}

export default CatalogTopEnvironment;
