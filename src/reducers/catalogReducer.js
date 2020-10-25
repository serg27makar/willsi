const initialState = {
    catalog: "0",
    catalogName: "",
    subCatalogName: "",
    searchDisabled: false,
    selectedSubCatalogID: -1,
    searchItemParams: {},
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
        case "SEARCH_DISABLED":
            return {
                ...state,
                searchDisabled: action.searchDisabled
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
        default:
            return state;
    }
}
