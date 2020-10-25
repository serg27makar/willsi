export const setActionAdminPanel = (page) => {
    return {
        type: 'SET_ADMIN_PANEL',
        page: page
    }
};

export const actionOpenModal = (modal) => {
    return {
        type: 'OPEN_MODAL',
        modal: modal
    }
};

export const actionOpenCatalog = (catalog) => {
    return {
        type: 'OPEN_CATALOG',
        catalog: catalog
    }
};

export const actionUserID = (UserID) => {
    return {
        type: 'SET_USER_ID',
        UserID: UserID
    }
};

export const actionUserName = (UserName) => {
    return {
        type: 'SET_USER_NAME',
        UserName: UserName
    }
};

export const actionEmail = (Email) => {
    return {
        type: 'SET_USER_EMAIL',
        Email: Email
    }
};

export const actionPublicAuth = (PublicAuth) => {
    return {
        type: 'SET_PUBLIC_AUTH',
        PublicAuth: PublicAuth
    }
};

export const actionPhone = (Phone) => {
    return {
        type: 'SET_PHONE',
        Phone: Phone
    }
};

export const actionUsersParameters = (UsersParameters) => {
    return {
        type: 'SET_USERS_PARAMETERS',
        UsersParameters: UsersParameters
    }
};

export const actionUserUpdate = (UserUpdate) => {
    return {
        type: 'SET_USER_UPDATE',
        UserUpdate: UserUpdate
    }
};

export const actionAlertText = (AlertText) => {
    return {
        type: 'ALERT_TEXT_MODAL',
        AlertText: AlertText
    }
};

export const actionAddUser = (AddUser) => {
    return {
        type: 'ADD_USER',
        AddUser: AddUser
    }
};

export const actionDataRedirect = (dataRedirect) => {
    return {
        type: 'DATA_REDIRECT',
        dataRedirect: dataRedirect
    }
};

export const actionPermission = (Permission) => {
    return {
        type: 'USER_PERMISSION',
        Permission: Permission
    }
};

export const actionHeaderUser = (HeaderUser) => {
    return {
        type: 'HEADER_USER',
        HeaderUser: HeaderUser
    }
};

export const actionUserStore = (UserStore) => {
    return {
        type: 'USER_STORE',
        UserStore: UserStore
    }
};

export const actionDataUpdate = (update) => {
    return {
        type: 'DATA_UPDATE',
        update: update
    }
};

export const actionSetStoreArr = (StoreArr) => {
    return {
        type: 'SET_STORE_ARR',
        StoreArr: StoreArr
    }
};

export const actionAddStore = (addStore) => {
    return {
        type: 'SET_ADD_STORE',
        addStore: addStore
    }
};

export const actionProductID = (ProductID) => {
    return {
        type: 'SET_PRODUCT_ID',
        ProductID: ProductID
    }
};

export const actionProductsArr = (ProductsArr) => {
    return {
        type: 'PRODUCT_ARR',
        ProductsArr: ProductsArr
    }
};

export const actionSelectProduct = (SelectProduct) => {
    return {
        type: 'SELECT_PRODUCT',
        SelectProduct: SelectProduct
    }
};

export const actionSubspecies = (Subspecies) => {
    return {
        type: 'SET_SUBSPECIES',
        Subspecies: Subspecies
    }
};

export const actionSaveParams = (SaveParams) => {
    return {
        type: 'SAVE_PARAMS',
        SaveParams: SaveParams
    }
};

export const actionSearchParams = (SearchParams) => {
    return {
        type: 'SEARCH_PARAMS',
        SearchParams: SearchParams
    }
};

export const actionCatalogName = (catalogName) => {
    return {
        type: 'CHOOSE_CATALOG_NAME',
        catalogName: catalogName
    }
};

export const actionSubCatalogName = (subCatalogName) => {
    return {
        type: 'CHOOSE_SUB_CATALOG_NAME',
        subCatalogName: subCatalogName
    }
};

export const actionUpdateEditorModal = (updateEditorModal) => {
    return {
        type: 'UPDATE_EDITOR_MODAL',
        updateEditorModal: updateEditorModal
    }
};

export const actionUpdateSearchParams = (UpdateSearchParams) => {
    return {
        type: 'UPDATE_SEARCH_PARAMS',
        UpdateSearchParams: UpdateSearchParams
    }
};

export const actionPostpone = (Postpone) => {
    return {
        type: 'SET_POSTPONE',
        Postpone: Postpone
    }
};

export const actionSetActionPostpone = (SetActionPostpone) => {
    return {
        type: 'SET_ACTION_POSTPONE',
        SetActionPostpone: SetActionPostpone
    }
};

export const actionShopEditParams = (ShopEditParams) => {
    return {
        type: 'SHOP_EDIT_PARAMS',
        ShopEditParams: ShopEditParams
    }
};

export const actionShopEditParamsAction = (ShopEditParamsAction) => {
    return {
        type: 'SHOP_EDIT_PARAMS_ACTION',
        ShopEditParamsAction: ShopEditParamsAction
    }
};

export const actionSelectedProductToEdit = (SelectedProductToEdit) => {
    return {
        type: 'SELECTED_PRODUCT_TO_EDIT',
        SelectedProductToEdit: SelectedProductToEdit
    }
};

export const actionSelectedProductToEditID = (SelectedProductToEditID) => {
    return {
        type: 'SELECTED_PRODUCT_TO_EDIT_ID',
        SelectedProductToEditID: SelectedProductToEditID
    }
};

export const actionRecalculateParams = (recalculateParams) => {
    return {
        type: 'RECALCULATE_PARAMS',
        recalculateParams: recalculateParams
    }
};

export const actionNewUser = (NewUser) => {
    return {
        type: 'SET_NEW_USER',
        NewUser: NewUser
    }
};

export const actionSearchDisabled = (searchDisabled) => {
    return {
        type: 'SEARCH_DISABLED',
        searchDisabled: searchDisabled
    }
};

export const actionSelectedSubCatalogID = (selectedSubCatalogID) => {
    return {
        type: 'SELECTED_SUB_CATALOG_ID',
        selectedSubCatalogID: selectedSubCatalogID
    }
};

export const actionUpdateSubspecies = (updateSubspecies) => {
    return {
        type: 'UPDATE_SUBSPECIES',
        updateSubspecies: updateSubspecies
    }
};

export const actionAlertModalCloseEvent = (alertModalCloseEvent) => {
    return {
        type: 'ALERT_MODAL_CLOSE_EVENT',
        alertModalCloseEvent: alertModalCloseEvent
    }
};

export const actionSearchItemParams = (searchItemParams) => {
    return {
        type: 'SEARCH_ITEM_PARAMS',
        searchItemParams: searchItemParams
    }
};
