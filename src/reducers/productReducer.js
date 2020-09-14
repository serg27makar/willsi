const initialState = {
    SelectProduct: {},
    ProductsArr: [],
    ProductID: "",
    Subspecies: [],
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

        default:
            return state;
    }
}
