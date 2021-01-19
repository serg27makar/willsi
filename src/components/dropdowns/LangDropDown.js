import React from "react";
import {actionlang} from "../../action";
import {connect} from "react-redux";
import {allLanguages} from "../../access/lang/translaterJS";

class LangDropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
        this.closeOpen = this.closeOpen.bind(this);
        this.chooseLang = this.chooseLang.bind(this);
    }

    closeOpen() {
        this.setState({
            ...this.state,
            open: !this.state.open,
        })
    };

    chooseLang(item) {
        this.props.langFunction(item);
        this.closeOpen();
    }

    dropdownListItem = (item, index) => {
        return (
            <li className={"dropdown-lang " + (this.props.lang === item ? "item-select" : "")} key={index} onClick={() => {this.chooseLang(item)}}>
                <div className="dropdown-list__link text-18 uppercase" >{item}</div>
            </li>
        )
    };

    render() {
        return (
            <div className="catalog-sidebar__item catalog-sidebar-lang">
                <div className="catalog-wrapper text-18 medium lang-dropdown" onClick={this.closeOpen}>
                    <span className="catalog-wrapper__name uppercase text-18">{this.props.lang}</span>
                    <svg className="icon icon-arrow-small ">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                    </svg>
                </div>
                <div className={"lang-ul-wrap " + (this.state.open ? "open" : "")}>
                    <ul>
                        {allLanguages.map((itemList, indexList) => {
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
        lang: state.utiliteReducer.lang,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        langFunction: (lang) => {
            dispatch(actionlang(lang))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(LangDropDown);
