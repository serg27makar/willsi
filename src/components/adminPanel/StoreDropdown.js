import React from "react";
import {actionOpenModal, actionSelectedStore} from "../../action";
import {connect} from "react-redux";
import {isEmptyObject} from "../../js/sharedFunctions";

class StoreDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameStore: "",
            open: "",
            StoreArr: [],
            firstLoad: true,
        };
        this.changeItem = this.changeItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.closeOpen = this.closeOpen.bind(this);
    }

    componentDidMount() {}

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.StoreArr !== this.props.StoreArr && this.props.StoreArr.length > 0 && this.state.firstLoad) {
            this.setState({
                ...this.state,
                StoreArr: this.props.StoreArr,
                nameStore: !isEmptyObject(this.props.selectedStore) ? this.props.selectedStore.nameStore : this.props.StoreArr[0].nameStore,
                firstLoad: false,
            })
        }
        if (!isEmptyObject(this.props.selectedStore) && this.state.nameStore !== this.props.selectedStore.nameStore) {
            this.setState({...this.state, nameStore: this.props.selectedStore.nameStore,})
        }
        if (this.state.StoreArr !== this.props.StoreArr && this.props.StoreArr.length > 0 && !this.state.firstLoad) {
            this.setState({
                ...this.state,
                StoreArr: this.props.StoreArr,
            })
        }
    }

    closeOpen() {
        this.setState({
            ...this.state,
            open: this.state.open === "" ? "open" : "",
        })
    };

    changeItem(item) {
        this.closeOpen();
        this.props.selectedStoreFunction(item);
    }

    addItem() {
        this.closeOpen();
        this.props.openModalFunction("addServiceModal");
    }

    renderItem = (item, index) => {
        return (
            <div className="dropdown-info__item" key={index} onClick={() => {this.changeItem(item)}}>
                <div className="border-line" />
                <div className="dropdown-info__link text-16 bold uppercase">{item.nameStore}</div>
            </div>
        )
    };

    render() {
        return (
            <div className="select-fitting-user">
                <div className="catalog-top__dropdown-info">
                    <div className="catalog-top__button-drop" onClick={this.closeOpen}>
                        <div className="catalog-top__button-text text-16 bold uppercase">{this.state.nameStore}</div>
                        <span className="catalog-top__button-icon">
                            <svg className="icon icon-arrow-small ">
                              <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                            </svg>
                        </span>
                    </div>
                    <div className={"dropdown-info " + this.state.open}>
                        {this.state.StoreArr && this.state.StoreArr.map((item, index) => {
                            return this.renderItem(item, index);
                        })}
                        <div className="dropdown-info__item" onClick={this.addItem} hidden={this.props.hidden}>
                            <div className="dropdown-info__link icon-plus"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        StoreArr: state.storeReducer.StoreArr,
        addStore: state.storeReducer.addStore,
        selectedStore: state.storeReducer.selectedStore,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        openModalFunction: (modal) => {
            dispatch(actionOpenModal(modal))
        },
        selectedStoreFunction: (selectedStore) => {
            dispatch(actionSelectedStore(selectedStore))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(StoreDropdown);
