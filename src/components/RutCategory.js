import React from "react";
import {actionCatalogName, actionOpenCatalog, actionSelectedSubCatalogID} from "../action";
import {connect} from "react-redux";
import LangCat from "../access/lang/CatalogLangConstants";

class RutCategory extends React.Component {
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
    }

    closeOpen() {
        this.props.openCatalogFunction(this.props.index);
        if (this.props.index === this.props.catalog) {
            this.setState({
                ...this.state,
                isOpen: !this.state.isOpen,
            })
        }
    };

    chooseListItem(item, index) {
        if (index !== undefined) {
            if (this.state.selected === index) {
                index = -1
            }
            this.props.selectedSubCatalogIDFunction(index);
            this.props.selectItem(index);
        }
    }

    dropdownListItem = (item, index) => {
        let name;
        let deleteBtn = false;
        if (typeof item === "object") {
            name = item.name;
            deleteBtn = item.deleteBtn;
        } else {
            name = LangCat[item];
        }
        return (
            <li className={"dropdown-list__item " + (this.state.selected === index ? "item-select" : "")} key={index} onClick={() => {this.chooseListItem(name, index)}}>
                <div className="dropdown-list__link text-14" >{name}</div>
                {this.deleteBtn(deleteBtn, index)}
            </li>
        )
    };

    deleteBtn(deleteBtn, index) {
        if(deleteBtn) {
            return (
                <div className="deleteBtn" onClick={(e) => {this.props.deleteBtnFun(index, e)}}>+</div>
            )
        } else {
            return null;
        }
    }

    addListItem = () => {
        if (this.props.isAddItem) {
            return (
                <li className="dropdown-list__item" onClick={this.props.addItem}>
                    <div className="dropdown-list__link text-14" >{this.props.isAddItem}</div>
                </li>
            )
        } else {
            return null;
        }
    };

    setPermission(dropdownTitle, genderPermission) {
        if (this.props.disabledFalse) {
            this.setState({
                ...this.state,
                genderPermission: true
            });
        } else if (genderPermission && dropdownTitle) {
            this.setState({
                ...this.state,
                genderPermission
            });
            this.props.catalogNameFunction(dropdownTitle);
        }
    }

    genderPermission() {
        this.setState({
            ...this.state,
            genderPermission: false,
        });
        if (this.props.UsersParameters && this.props.UsersParameters.length > 0) {
            const gender = this.props.UsersParameters[this.props.HeaderUser].Gender;
            const dropdownTitle = this.props.item.dropdownTitle;
            if (dropdownTitle === "catalogListMen" && gender === "man") {
                this.setPermission(dropdownTitle, true);
            } else if (dropdownTitle === "catalogListWomen" && gender === "woman") {
                this.setPermission(dropdownTitle, true);
            } else if (dropdownTitle === "catalogListBoy" && gender === "boy") {
                this.setPermission(dropdownTitle, true);
            } else if (dropdownTitle === "catalogListGirl" && gender === "girl") {
                this.setPermission(dropdownTitle, true);
            } else if (dropdownTitle === "catalogListDog" && gender === "dog") {
                this.setPermission(dropdownTitle, true);
            } else {
                this.setPermission(dropdownTitle, false);
            }
        }
    }

    render() {
        return (
            <div className="catalog-product">
                <button className="catalog-button" onClick={this.closeOpen} disabled={!this.state.genderPermission && this.props.page !== "Cabinet"}>
                    <span className={"catalog-button__text text-16 light " + (this.state.isOpen ? "catalog-opened" : "")}>{LangCat[this.props.item.dropdownTitle]}</span>
                    <svg className="icon icon-arrow-small ">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                    </svg>
                </button>
                <ul className={"dropdown-list " + (this.state.isOpen ? "open" : "")}>
                    {this.props.item.dropdownItems && this.props.item.dropdownItems.map((itemList, indexList) => {
                        return this.dropdownListItem(itemList, indexList);
                    })}
                    {this.addListItem()}
                </ul>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        page: state.pageReducer.page,
        catalog: state.catalogReducer.catalog,
        Gender: state.userReducer.Gender,
        UsersParameters: state.userReducer.UsersParameters,
        HeaderUser: state.userReducer.HeaderUser,
        selectedSubCatalogID: state.catalogReducer.selectedSubCatalogID,
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
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(RutCategory);
