const initialState = {
    modal: "",
    AlertText: "",
    updateEditorModal: false,
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
        case "UPDATE_EDITOR_MODAL":
            return {
                ...state,
                updateEditorModal: action.updateEditorModal
            };
        default:
            return state;
    }
}
