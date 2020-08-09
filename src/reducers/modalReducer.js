const initialState = {
    modal: "",
};

export default function modalReducer(state = initialState, action) {

    switch (action.type) {
        case "OPEN_MODAL":
            return {
                ...state,
                modal: action.modal
            };
        default:
            return state;
    }
}
