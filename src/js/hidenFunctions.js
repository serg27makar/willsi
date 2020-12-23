import {
    getProductDataToId,
    postGetAllStoresData,
    postRemoveStoreData,
    postSetProductData,
    postSetStoreData,
    postUnsetProductData
} from "../utilite/axiosConnect";
import {updateResult} from "./sharedFunctions";

export function removeItemDataToStore() {
    let search = {};
    const getDataStores = (data) => {
        data.map(item => {
            const storeData = {
                StoreID: item._id,
                removeData: {"textStore": item.textStore} // todo your remove data
            }
            postRemoveStoreData(storeData, updateResult)
        })
    }
    postGetAllStoresData(search, getDataStores);
}

export function addItemDataToStore(addedData) {
    let search = {};
    const getDataStores = (data) => {
        data.map(item => {
            const storeData = {
                StoreID: item._id,
                setData: {"country": addedData} // todo your added data
            }
            postSetStoreData(storeData, updateResult)
        })
    }
    postGetAllStoresData(search, getDataStores);
}

export function removeItemDataToProduct(ProductStoreID) {
    const productsData = (data) => {
        data.map(item => {
            const productData = {
                ProductID: item._id,
                removeData: {"textStore": item.textStore} // todo your remove data
            }
            postUnsetProductData(productData, updateResult)
        })
    }
    getProductDataToId(ProductStoreID, productsData);
}

export function addItemDataToProduct(ProductStoreID, addedData) {
    const productsData = (data) => {
        data.map(item => {
            const productData = {
                ProductID: item._id,
                setData: {"country": addedData} // todo your added data
            }
            postSetProductData(productData, updateResult)
        })
    }
    getProductDataToId(ProductStoreID, productsData);
}
