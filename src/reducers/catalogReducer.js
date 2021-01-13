const initialState = {
    catalog: "0",
    catalogName: "",
    subCatalogName: "",
    selectedSubCatalogID: 0,
    searchItemParams: {},
    searchItemColor: {},
    searchItemPrice: {},
    searchItemNew: 0,
};

export default function catalogReducer(state = initialState, action) {

    switch (action.type) {
        case "OPEN_CATALOG":
            return {
                ...state,
                catalog: action.catalog
            };
        case "CHOOSE_CATALOG_NAME":
            return {
                ...state,
                catalogName: action.catalogName
            };
        case "CHOOSE_SUB_CATALOG_NAME":
            return {
                ...state,
                subCatalogName: action.subCatalogName
            };
        case "SELECTED_SUB_CATALOG_ID":
            return {
                ...state,
                selectedSubCatalogID: action.selectedSubCatalogID
            };
        case "SEARCH_ITEM_PARAMS":
            return {
                ...state,
                searchItemParams: action.searchItemParams
            };
        case "SEARCH_ITEM_COLOR":
            return {
                ...state,
                searchItemColor: action.searchItemColor
            };
        case "SEARCH_ITEM_PRICE":
            return {
                ...state,
                searchItemPrice: action.searchItemPrice
            };
        case "SEARCH_ITEM_NEW":
            return {
                ...state,
                searchItemNew: action.searchItemNew
            };
        case "CLOSE_ALL_CATALOGS":
            return {
                ...state,
                closeAllCatalogs: action.closeAllCatalogs
            };
        case "DEFINE_CATALOG":
            return {
                ...state,
                defineCatalog: action.defineCatalog
            };
        default:
            return state;
    }
}
