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
