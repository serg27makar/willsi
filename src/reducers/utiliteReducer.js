const initialState = {
    filters: {},
};

export default function utiliteReducer(state = initialState, action) {

    switch (action.type) {
        case "SET_FILTERS":
            return {
                ...state,
                filters: action.filters
            };

        default:
            return state;
    }
}
