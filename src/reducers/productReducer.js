const initialState = {
    Product: {},
    ProductsArr: [],
};

export default function productReducer(state = initialState, action) {

    switch (action.type) {
        case "SET_PRODUCT":
            return {
                ...state,
                Product: action.Product
            };
        case "PRODUCT_ARR":
            return {
                ...state,
                ProductsArr: action.ProductsArr
            };

        default:
            return state;
    }
}
