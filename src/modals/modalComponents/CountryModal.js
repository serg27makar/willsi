import React from "react";
import {actionSetCountry} from "../../action";
import {connect} from "react-redux";
import DropdownModal from "./DropdownModal";

class CountryModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.chooseListItem = this.chooseListItem.bind(this);
    }

    chooseListItem(item, index) {
        this.props.setCountryFunction(item);
    }

    render() {
        return (
            <div>
                <DropdownModal items={this.props.allCountries} selected={this.props.setCountry} title={this.props.setCountry} changeItem={this.chooseListItem}/>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        setCountry: state.utiliteReducer.setCountry,
        allCountries: state.utiliteReducer.allCountries,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setCountryFunction: (setCountry) => {
            dispatch(actionSetCountry(setCountry))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(CountryModal);
