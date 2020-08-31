const initialState = {
    StoreArr: []
};

export default function storeReducer(state = initialState, action) {

    switch (action.type) {
        case "SET_STORE_ARR":
            return {
                ...state,
                StoreArr: action.StoreArr
            };

        default:
            return state;
    }
}
