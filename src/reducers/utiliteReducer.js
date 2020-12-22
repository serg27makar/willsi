const initialState = {
    filters: {},
    dataViewIndicator: "",
    dataView: [],
    setCountry: "",
    allCountries: [],
};

export default function utiliteReducer(state = initialState, action) {

    switch (action.type) {
        case "SET_FILTERS":
            return {
                ...state,
                filters: action.filters
            };
        case "DATA_VIEW":
            return {
                ...state,
                dataView: action.dataView
            };
        case "DATA_VIEW_INDICATOR":
            return {
                ...state,
                dataViewIndicator: action.dataViewIndicator
            };
        case "SET_COUNTRY":
            return {
                ...state,
                setCountry: action.setCountry
            };
        case "ALL_COUNTRIES":
            return {
                ...state,
                allCountries: action.allCountries
            };

        default:
            return state;
    }
}
