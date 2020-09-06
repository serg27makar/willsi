const initialState = {
    StoreArr: [],
    addStore: false,
};

export default function storeReducer(state = initialState, action) {

    switch (action.type) {
        case "SET_STORE_ARR":
            return {
                ...state,
                StoreArr: action.StoreArr
            };
        case "SET_ADD_STORE":
            return {
                ...state,
                addStore: action.addStore
            };

        default:
            return state;
    }
}
