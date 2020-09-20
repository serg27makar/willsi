const initialState = {
    catalog: "",
    catalogName: "",
    subCatalogName: "",
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
        default:
            return state;
    }
}
