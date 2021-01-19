const initialState = {
    filters: {},
    dataViewIndicator: "",
    dataView: [],
    setCountry: "",
    allCountries: [],
    thingToLink: false,
    clearOpenCatalogs: false,
    toggleHiddenUpdate: false,
    lang: "ru",
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
        case "THING_TO_LINK":
            return {
                ...state,
                thingToLink: action.thingToLink
            };
        case "CLEAR_OPEN_CATALOGS":
            return {
                ...state,
                clearOpenCatalogs: action.clearOpenCatalogs
            };
        case "TOGGLE_HIDDEN_UPDATE":
            return {
                ...state,
                toggleHiddenUpdate: action.toggleHiddenUpdate
            };
        case "SET_LANG":
            return {
                ...state,
                lang: action.lang
            };

        default:
            return state;
    }
}
