import {
    getProductDataToId,
    postGetAllStoresData,
    postRemoveStoreData,
    postSetProductData,
    postSetStoreData,
    postUnsetProductData
} from "../utilite/axiosConnect";
import {updateResult} from "./sharedFunctions";
import React from "react";

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
{/*<label className="main-list__label">*/}
{/*    <input className="main-list__input-search text-14 italic" type="text" placeholder="Поиск..."/>*/}
{/*    <button className="main-list__button-search">*/}
{/*        <svg className="icon icon-search ">*/}
{/*            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#search"/>*/}
{/*        </svg>*/}
{/*    </button>*/}
{/*</label>*/}