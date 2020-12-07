import React from "react";
import {connect} from "react-redux";
import ru from "../../access/lang/LangConstants";
import {actionSetFilters} from "../../action";

const usersFiltersData = [
    "unknown", "storeAdmin", "buyer"
]
class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buyer: false,
            unknown: false,
            storeAdmin: false,
            type: "",
        }
        this.dataChange = this.dataChange.bind(this);
    }
    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState !== this.state) {
            if (this.state.type && this.state.type === "u") {
                const filter = {
                    type: "u",
                    buyer: this.state.buyer,
                    unknown: this.state.unknown,
                    storeAdmin: this.state.storeAdmin,
                }
                this.props.setFiltersFunction(filter)
            }
        }
    }

    dataChange(e) {
        const name = e.target.name;
        const type = e.target.id.substr(0, 1);
        this.setState({
            [name]: !this.state[name],
            type,
        })
    }

    outputCheckbox(item, index, type) {
        const idCheckbox = type + index;
        return (
            <div className="filter-check-box" key={index}>
                <input className="category-list__input"
                       type="checkbox" id={idCheckbox}
                       value={this.state[item]}
                       checked={this.state[item]}
                       name={item}
                       onChange={this.dataChange}/>
                <label className="category-list__label text-14 light" htmlFor={idCheckbox}>{ru[item]}</label>
            </div>
        )
    }

    usersFilter() {
        const type = "u";
        return usersFiltersData.map((item, index) => {
            return this.outputCheckbox(item, index, type);
        })

    }

    storesFilter() {

    }

    productsFilter() {

    }

    renderFilters(data) {
        switch (data) {
            case "users":
                return (this.usersFilter());
            case "stores":
                return (this.storesFilter());
            case "products":
                return (this.productsFilter());
        }
    }

    render() {
        return (
            <div className="main-bar-wrap">
                <div className="filters-tag uppercase">{ru.filters}</div>
                {this.renderFilters("users")}
            </div>

        )
    }
}
function MapStateToProps(state) {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setFiltersFunction: (filters) => {
            dispatch(actionSetFilters(filters))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Filters);
