const initialState = {
    SelectProduct: {},
    ProductsArr: [],
    ProductID: "",
    Subspecies: {},
    SaveParams: false,
    UpdateSearchParams: false,
};

export default function productReducer(state = initialState, action) {

    switch (action.type) {
        case "SET_PRODUCT_ID":
            return {
                ...state,
                ProductID: action.ProductID
            };
        case "SELECT_PRODUCT":
            return {
                ...state,
                SelectProduct: action.SelectProduct
            };
        case "PRODUCT_ARR":
            return {
                ...state,
                ProductsArr: action.ProductsArr
            };
        case "SET_SUBSPECIES":
            return {
                ...state,
                Subspecies: action.Subspecies
            };
        case "SAVE_PARAMS":
            return {
                ...state,
                SaveParams: action.SaveParams
            };
        case "SEARCH_PARAMS":
            return {
                ...state,
                SearchParams: action.SearchParams
            };
        case "UPDATE_SEARCH_PARAMS":
            return {
                ...state,
                UpdateSearchParams: action.UpdateSearchParams
            };
        default:
            return state;
    }
}
