const initialState = {
    page: "",
    dataRedirect: false,
};

export default function pageReducer(state = initialState, action) {

    switch (action.type) {
        case "SET_ADMIN_PANEL":
            return {
                ...state,
                page: action.page
            };
        case "DATA_REDIRECT":
            return {
                ...state,
                dataRedirect: action.dataRedirect
            };
        default:
            return state;
    }
}
