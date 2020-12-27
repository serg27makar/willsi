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
