import {getProductDataToId, postSetProductData, postSetStoreData} from "../utilite/axiosConnect";
import {updateResult} from "./sharedFunctions";

export function showHiddenAllStoreData(ProductStoreID, adminPermission, value) {
    const productsData = (data) => {
        data.map(item => {
            const productData = {
                ProductID: item._id,
                setData: {[adminPermission]: value}
            }
            postSetProductData(productData, updateResult)
        })
    }
    const storeData = {
        StoreID: ProductStoreID,
        setData: {[adminPermission]: !value}
    }
    postSetStoreData(storeData, updateResult)
    getProductDataToId(ProductStoreID, productsData);
}
