import React from "react";
import {
    actionCatalogName,
    actionCloseAllCatalogs,
    actionOpenCatalog,
    actionSearchItemColor,
    actionSearchItemParams,
    actionSelectedSubCatalogID
} from "../../action";
import {connect} from "react-redux";
import LangCat from "../../access/lang/CatalogLangConstants";
import {langCodeCatalog} from "../../access/lang/translaterJS";

class RutCategoryCatalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            selected: -1,
            genderPermission: true,
        };
        this.closeOpen = this.closeOpen.bind(this);
        this.genderPermission = this.genderPermission.bind(this);
        this.chooseListItem = this.chooseListItem.bind(this);
    }

    componentDidMount() {
        if (this.props.catalog || this.props.catalog === 0) {
            this.chooseListItem(this.props.selectedSubCatalogID);
        }
        if (this.props.UsersParameters) {
            this.genderPermission();
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.catalog !== this.props.catalog) {
            this.props.selectedSubCatalogIDFunction(-1);
            this.setState({
                ...this.state,
                isOpen: this.props.index === this.props.catalog,
                selected: -1,
            });
        }
        if (prevProps.selectedSubCatalogID !== this.props.selectedSubCatalogID ||
            prevState.selected !== this.props.selectedSubCatalogID) {
            if (this.props.index === this.props.catalog) {
                this.setState({
                    ...this.state,
                    isOpen: true,
                    selected: this.props.selectedSubCatalogID,
                });
            }

        }
        if (prevProps.UsersParameters !== this.props.UsersParameters ||
            prevProps.HeaderUser !== this.props.HeaderUser) {
            this.genderPermission();
            this.props.openCatalogFunction(-1);
        }
        if (prevProps.closeAllCatalogs !== this.props.closeAllCatalogs) {
            if (this.props.closeAllCatalogs !== "catalogList") {
                this.setState({
                    ...this.state,
                    isOpen: false,
                })
            }
        }
    }

    closeOpen() {
        this.props.openCatalogFunction(this.props.index);
        this.props.closeAllCatalogsFunction(this.state.isOpen ? "" : "catalogList");
        if (this.props.index === this.props.catalog) {
            this.setState({
                ...this.state,
                isOpen: !this.state.isOpen,
            })
        }
    };

    chooseListItem(item, index) {
        if (index !== undefined) {
            this.props.searchItemParamsFunction({});
            this.props.searchItemColorFunction({});
            this.props.selectedSubCatalogIDFunction(index);
        }
    }

    setPermission(dropdownTitle, genderPermission) {
        if (dropdownTitle) {
            this.setState({
                ...this.state,
                genderPermission
            });
            if (genderPermission) {
                this.props.catalogNameFunction(dropdownTitle);
            }
        }
    }

    genderPermission() {
        this.setState({
            ...this.state,
            genderPermission: false,
        });
        if (this.props.UsersParameters && this.props.UsersParameters.length &&
            this.props.UsersParameters.length > this.props.HeaderUser) {
            const gender = this.props.UsersParameters[this.props.HeaderUser].Gender;
            const dropdownTitle = this.props.item.dropdownTitle;
            if ((dropdownTitle === "catalogListMen" && gender === "man") ||
                (dropdownTitle === "catalogListWomen" && gender === "woman") ||
                (dropdownTitle === "catalogListBoy" && gender === "boy") ||
                (dropdownTitle === "catalogListGirl" && gender === "girl") ||
                (dropdownTitle === "catalogListDog" && gender === "dog")) {
                this.setPermission(dropdownTitle, true);
            } else {
                this.setPermission(dropdownTitle, false);
            }
        }
    }

    dropdownListItem = (item, index) => {
        return (
            <li className={"dropdown-list__item " + (this.state.selected === index ? "item-select" : "")} key={index} onClick={() => {this.chooseListItem(item, index)}}>
                <div className="dropdown-list__link text-14" >{langCodeCatalog(this.props.lang, item)}</div>
            </li>
        )
    };

    render() {
        return (
            <div className="catalog-product">
                <button className="catalog-button" onClick={this.closeOpen} disabled={this.props.catalogName !== this.props.item.dropdownTitle}>
                    <span className={"catalog-button__text text-16 light " + (this.state.isOpen ? "catalog-opened" : "")}>{langCodeCatalog(this.props.lang, this.props.item.dropdownTitle)}</span>
                    <svg className="icon icon-arrow-small ">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                    </svg>
                </button>
                <ul className={"dropdown-list " + (this.state.isOpen ? "open" : "")}>
                    {this.props.item.dropdownItems && this.props.item.dropdownItems.map((itemList, indexList) => {
                        return this.dropdownListItem(itemList, indexList);
                    })}
                </ul>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        catalog: state.catalogReducer.catalog,
        catalogName: state.catalogReducer.catalogName,
        UsersParameters: state.userReducer.UsersParameters,
        HeaderUser: state.userReducer.HeaderUser,
        selectedSubCatalogID: state.catalogReducer.selectedSubCatalogID,
        closeAllCatalogs: state.catalogReducer.closeAllCatalogs,
        lang: state.utiliteReducer.lang,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        openCatalogFunction: (catalog) => {
            dispatch(actionOpenCatalog(catalog))
        },
        catalogNameFunction: (catalogName) => {
            dispatch(actionCatalogName(catalogName))
        },
        selectedSubCatalogIDFunction: (selectedSubCatalogID) => {
            dispatch(actionSelectedSubCatalogID(selectedSubCatalogID))
        },
        searchItemParamsFunction: (searchItemParams) => {
            dispatch(actionSearchItemParams(searchItemParams))
        },
        searchItemColorFunction: (searchItemColor) => {
            dispatch(actionSearchItemColor(searchItemColor))
        },
        closeAllCatalogsFunction: (closeAllCatalogs) => {
            dispatch(actionCloseAllCatalogs(closeAllCatalogs))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(RutCategoryCatalog);
