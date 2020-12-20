const initialState = {
    catalog: "0",
    catalogName: "",
    subCatalogName: "",
    selectedSubCatalogID: 0,
    searchItemParams: {},
    searchItemColor: {},
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
        default:
            return state;
    }
}
