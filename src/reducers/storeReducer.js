const initialState = {
    StoreArr: [],
    addStore: false,
    AllStoresData: [],
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
        case "ALL_STORES_DATA":
            return {
                ...state,
                AllStoresData: action.AllStoresData
            };

        default:
            return state;
    }
}
