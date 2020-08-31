const initialState = {
    page: "",
    dataRedirect: {
        accessR: false,
        to: "/",
    },
    update: false,
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
        case "DATA_UPDATE":
            return {
                ...state,
                update: action.update
            };
        default:
            return state;
    }
}
