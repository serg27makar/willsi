import React from "react";
import {actionSetCountry} from "../action";
import {connect} from "react-redux";
import DefaultDropDown from "./dropdowns/DefaultDropDown";
import {langCode} from "../access/lang/translaterJS";

class CountryDropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allCountries: [],
            setCountry: ""
        };
        this.chooseListItem = this.chooseListItem.bind(this);
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            allCountries: this.props.allCountries,
            setCountry: this.props.setCountry
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
        const title = langCode(this.props.lang, "country") + ": " + this.state.setCountry;
        return (
            <div>
                <DefaultDropDown items={this.state.allCountries} selected={this.state.setCountry} title={title} chooseListItem={this.chooseListItem}/>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        setCountry: state.utiliteReducer.setCountry,
        allCountries: state.utiliteReducer.allCountries,
        lang: state.utiliteReducer.lang,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setCountryFunction: (setCountry) => {
            dispatch(actionSetCountry(setCountry))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(CountryDropDown);
