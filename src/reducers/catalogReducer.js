const initialState = {
    catalog: "",
};

export default function catalogReducer(state = initialState, action) {

    switch (action.type) {
        case "OPEN_CATALOG":
            return {
                ...state,
                catalog: action.catalog
            };
        default:
            return state;
    }
}
