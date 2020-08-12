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
