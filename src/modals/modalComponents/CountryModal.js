import React from "react";
import {actionSetCountry} from "../../action";
import {connect} from "react-redux";
import DropdownModal from "./DropdownModal";

class CountryModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allCountries: [],
            setCountry: "",
        };
        this.chooseListItem = this.chooseListItem.bind(this);
    }

    componentDidMount() {
        this.setState({
            allCountries: this.props.allCountries,
            setCountry: this.props.setCountry,
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.setCountry !== this.props.setCountry || this.state.allCountries !== this.props.allCountries) {
            this.setState({
                ...this.state,
                allCountries: this.props.allCountries,
                setCountry: this.props.setCountry
            })
        }
    }

    chooseListItem(item, index) {
        this.props.setCountryFunction(item);
    }

    render() {
        return (
            <div>
                <DropdownModal items={this.state.allCountries} selected={this.state.setCountry} title={this.state.setCountry} changeItem={this.chooseListItem}/>
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
