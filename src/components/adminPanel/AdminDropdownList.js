import React from "react";
import {connect} from "react-redux";
import {langCodeCatalog} from "../../access/lang/translaterJS";

class AdminDropdownList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerItem: "",
            open: "",
            langCat: {},
        };
        this.changeItem = this.changeItem.bind(this);
        this.closeOpen = this.closeOpen.bind(this);
    }

    componentDidMount() {}

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.headerItem !== this.props.headerItem) {
            this.setState({
                headerItem: this.props.headerItem
            })
        }
        if (prevProps.closeOpen !== this.props.closeOpen) {
            if (this.props.closeOpen !== this.props.index) {
                this.setState({
                    ...this.state,
                    open: "",
                });
            }
        }
    }

    closeOpen = () => {
        this.setState({
            ...this.state,
            open: this.state.open === "" ? "open" : "",
        });
        this.props.toggleClose(this.props.index);
    };

    changeItem(index) {
        this.props.changeItem(index);
        this.closeOpen();
    }

    renderItem = (item, index) => {
        if (item !== this.state.headerItem) {
            return (
                <div className="dropdown-info__item" key={index} onClick={() => {this.changeItem(index)}}>
                    <div className="border-line"/>
                    <div className="dropdown-info__link text-16 bold uppercase">{langCodeCatalog(this.props.lang, item)}</div>
                </div>
            )
        }
    };

    render() {
        return (
            <div className="catalog-top__dropdown-admin">
                <div className="catalog-top__button-drop" onClick={this.closeOpen}>
                    <div className="catalog-top__button-text text-16 bold uppercase">{langCodeCatalog(this.props.lang, this.state.headerItem)}</div>
                    <span className="catalog-top__button-icon">
                        <svg className="icon icon-arrow-small ">
                          <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                        </svg>
                    </span>
                </div>
                <div className={"dropdown-info-admin " + this.state.open}>
                    {this.props.subItem && this.props.subItem.map((item, index) => {
                        return this.renderItem(item, index);
                    })}
                </div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        lang: state.utiliteReducer.lang,
    }
}

export default connect(MapStateToProps)(AdminDropdownList);

