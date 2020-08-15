const initialState = {
    modal: "",
    AlertText: "",
};

export default function modalReducer(state = initialState, action) {

    switch (action.type) {
        case "OPEN_MODAL":
            return {
                ...state,
                modal: action.modal
            };
        case "ALERT_TEXT_MODAL":
            return {
                ...state,
                AlertText: action.AlertText
            };
        default:
            return state;
    }
}
