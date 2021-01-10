import {getProductDataToId, postSetProductData, postSetStoreData} from "../utilite/axiosConnect";
import {updateResult} from "./sharedFunctions";

export function showHiddenAllStoreData(ProductStoreID, adminPermission, value, callBack) {
    let i = 0
    const productsData = (data) => {
        data.map(item => {
            i++;
            const productData = {
                ProductID: item._id,
                setData: {[adminPermission]: value}
            }
            postSetProductData(productData, updateResult)
        })
        if (i === data.length) {
            const storeData = {
                StoreID: ProductStoreID,
                setData: {[adminPermission]: !value}
            }
            postSetStoreData(storeData, callBack);
        }
    }
    getProductDataToId(ProductStoreID, productsData);
}

export function showHiddenCatalogData(ProductStoreID, topCatalog , adminPermission, value = false, callBack) {
    let i = 0
    const productsData = (data) => {
        data.map(item => {
            i++;
            if (item.topCatalog === topCatalog) {
                const productData = {
                    ProductID: item._id,
                    setData: {[adminPermission]: value}
                }
                postSetProductData(productData, updateResult);
            }
        })
        if (i === data.length) {
            if (!value) {
                const storeData = {
                    StoreID: ProductStoreID,
                    setData: {[adminPermission]: !value}
                }
                postSetStoreData(storeData, callBack);
            } else {
                callBack();
            }
        }
    }
    getProductDataToId(ProductStoreID, productsData);
}

export function showHiddenSubCatalogData(ProductStoreID, subCatalog , adminPermission, value = false, callBack) {
    let i = 0
    const productsData = (data) => {
        data.map(item => {
            i++;
            if (item.subCatalog === subCatalog) {
                const productData = {
                    ProductID: item._id,
                    setData: {[adminPermission]: value}
                }
                postSetProductData(productData, updateResult);
            }
        })
        if (i === data.length) {
            if (!value) {
                const storeData = {
                    StoreID: ProductStoreID,
                    setData: {[adminPermission]: !value}
                }
                postSetStoreData(storeData, callBack);
            } else {
                callBack();
            }
        }
    }
    getProductDataToId(ProductStoreID, productsData);
}

export function showHiddenDataSet(ProductStoreID, dataArr ,adminPermission, value = false, callBack) {
    let i = 0
    dataArr.map(item => {
    i++;
        const productData = {
            ProductID: item._id,
            setData: {[adminPermission]: value}
        }
        postSetProductData(productData, updateResult);
    })
    if (i === dataArr.length) {
        if (!value) {
            const storeData = {
                StoreID: ProductStoreID,
                setData: {[adminPermission]: !value}
            }
            postSetStoreData(storeData, callBack);
        } else {
            callBack();
        }
    }
}

export function showHiddenItemData(ProductStoreID, productID , adminPermission, value, callBack) {
    const productData = {
        ProductID: productID,
        setData: {[adminPermission]: value}
    }
    postSetProductData(productData, updateResult);
    if (!value) {
        const storeData = {
            StoreID: ProductStoreID,
            setData: {[adminPermission]: !value}
        }
        postSetStoreData(storeData, callBack);
    } else {
        callBack();
    }
}
