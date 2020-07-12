const initialState = {
    page: "",
};

export default function pageReducer(state = initialState, action) {

    switch (action.type) {
        case "SET_ADMIN_PANEL":
            return {
                ...state,
                page: action.page
            };
        default:
            return state;
    }
}
