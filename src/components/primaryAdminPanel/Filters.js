import React from "react";
import {connect} from "react-redux";
import ru from "../../access/lang/LangConstants";

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
        }
        this.dataChange = this.dataChange.bind(this);
    }
    componentDidMount() {

    }

    dataChange(e) {
        const name = e.target.name;
        const group = e.target.id.substr(0, 1);
        this.setState({
            [name]: !this.state[name],
        })
    }

    outputCheckbox(item, index, group) {
        const idCheckbox = group + index;
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
        const group = "u";
        return usersFiltersData.map((item, index) => {
            return this.outputCheckbox(item, index, group);
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
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Filters);
