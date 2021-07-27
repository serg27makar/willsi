import React from "react";
import {connect} from "react-redux";
import {langCode, langCodeCatalog} from "../../access/lang/translaterJS";
import {allProductsList} from "../../access/temporaryConstants";

class SearchDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerItem: "",
            searchItem: "",
            open: "",
            langCat: {},
            ProductsList: [],
        };
        this.changeItem = this.changeItem.bind(this);
        this.closeOpen = this.closeOpen.bind(this);
        this.onChange = this.onChange.bind(this);
        this.fillProductsList = this.fillProductsList.bind(this);
    }

    componentDidMount() {
       this.fillProductsList()
    }

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
        if (prevState.searchItem !== this.state.searchItem) {
            this.fillProductsList()
        }
    }

    fillProductsList() {
        const ProductsList = [];
        this.props.subItem.map(item => {
            if (langCodeCatalog(this.props.lang, item).toUpperCase().indexOf(this.state.searchItem.toUpperCase()) !== -1) ProductsList.push(item);
        })
        this.setState({
            ...this.state,
            ProductsList,
        })
    }

    closeOpen = () => {
        this.setState({
            ...this.state,
            open: this.state.open === "" ? "open" : "",
        });
        this.props.toggleClose(this.props.index);
    };

    changeItem(item, index) {
        this.props.changeItem(index);
        this.setState({
            ...this.state,
            open: "",
            headerItem: item,
            searchItem: langCodeCatalog(this.props.lang, item),
        })
    }

    onChange(e) {
        this.setState({
            ...this.state,
            searchItem: e.target.value,
            open: "open",
        })
    }

    renderItem = (item, index) => {
        if (item.indexOf(this.state.searchItem !== -1)) {
            return (
                <div className="dropdown-info__item" key={index} onClick={() => {this.changeItem(item, index)}}>
                    <div className="border-line"/>
                    <div className="dropdown-info__link text-16 bold uppercase">{langCodeCatalog(this.props.lang, item)}</div>
                </div>
            )
        }
    };

    render() {
        return (
            <div className="catalog-top__dropdown-admin">
                <div className="catalog-top__button-drop">
                    <input className="catalog-top__input-text text-16 bold uppercase"
                           value={this.state.searchItem} onChange={this.onChange} placeholder={langCode(this.props.lang, "selectProductName")}
                    />
                    <span className="catalog-top__button-icon" onClick={this.closeOpen}>
                        <svg className="icon icon-arrow-small ">
                          <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                        </svg>
                    </span>
                </div>
                <div className={"search-dropdown-info-admin dropdown-info-admin " + this.state.open}>
                    {this.state.ProductsList && this.state.ProductsList.map((item, index) => {
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

export default connect(MapStateToProps)(SearchDropdown);

