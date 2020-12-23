import {postGetAllStoresData, postRemoveStoreData, postSetStoreData} from "../utilite/axiosConnect";
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