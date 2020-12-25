import axios from 'axios'

const Url = "http://localhost:3001";

export const postRegister = (user, callbackInfo) => {
    axios.post(Url + `/users/register`, user)
        .then(req => {
            localStorage.UserId = req.data.insertedId;
            callbackInfo(req.data.insertedId);
        }).catch(err => {
            console.log(err);
    })
};

export const postLogin = (user, callbackInfo) => {
    axios.post(Url + `/users/login`, user)
        .then(req => {
            localStorage.UserId = req.data.UserID;
            callbackInfo(req.data);
        }).catch(err => {
            console.log(err);
    })
};

export const postCheckEmail = (email, callbackInfo) => {
    axios.post(Url + `/users/checkEmail`, email)
        .then(req => {
            callbackInfo(req.data);
        }).catch(err => {
            console.log(err);
    })
};

export const postUpdate = (user, callbackInfo) => {
    axios.post(Url + `/users/update`, user, {
        headers: {'token': localStorage.UserId}
    })
        .then(req => {
            callbackInfo(req.data);
        }).catch(err => {
            console.log(err);
    })
};

export const postStoreRegister = (store, callbackInfo) => {
    axios.post(Url + `/store/register`, store, {
        headers: {'token': localStorage.UserId}
    })
        .then(req => {
            callbackInfo(req.data);
        }).catch(err => {
            console.log(err);
    })
};

export const getUserData = (callbackInfo) => {
    axios.get(Url + `/users/getUserData`, {
        headers: {'token': localStorage.UserId}
    })
        .then(req => {
            callbackInfo(req.data);
        }).catch(err => {
            callbackInfo(err);
    })
};

export const getAllUsers = (callbackInfo) => {
    axios.post(Url + `/users/getAllUsers`)
        .then(req => {
            callbackInfo(req.data);
        }).catch(err => {
            callbackInfo(err);
    })
};

export const getStoreData = (callbackInfo) => {
    axios.get(Url + `/store/getStoreData`, {
        headers: {'token': localStorage.UserId}
    })
        .then(req => {
            callbackInfo(req.data);
        }).catch(err => {
            callbackInfo(err);
    })
};

export const getProductDataToId = (ProductStoreID, callbackInfo) => {
    const productData = {ProductStoreID};
    axios.post(Url + `/product/getProductDataToId`, productData, {
        headers: {'token': localStorage.UserId}
    })
        .then(req => {
            callbackInfo(req.data);
        }).catch(err => {
        callbackInfo(err);
    })
};

export const getParametersToId = (ProductID, callbackInfo) => {
    axios.post(Url + `/parameter/getParametersToId`, {ProductID}, {
        headers: {'token': localStorage.UserId}
    })
        .then(req => {
            callbackInfo(req.data);
        }).catch(err => {
        callbackInfo(err);
    })
};


export const parametersUpdate = (parameter, callbackInfo) => {
    axios.post(Url + `/parameter/update`, parameter, {
        headers: {'token': localStorage.UserId}
    })
        .then(req => {
            callbackInfo(req.data);
        }).catch(err => {
        console.log(err);
    })
};

export const postUpdateProduct = (product, callbackInfo) => {
    axios.post(Url + `/product/update`, product, {
        headers: {'token': localStorage.UserId}
    })
        .then(req => {
            callbackInfo(req.data);
        }).catch(err => {
        console.log(err);
    })
};

export const getProductData = (callbackInfo) => {
    axios.get(Url + `/product/getProductData`, {
        headers: {'token': localStorage.UserId}
    })
        .then(req => {
            callbackInfo(req.data);
        }).catch(err => {
        callbackInfo(err);
    })
};

export const getProductDataToParams = (callbackInfo, dataSearch) => {
    axios.post(Url + `/product/getProductDataToParams`, dataSearch, {
        headers: {'token': localStorage.UserId}
    })
        .then(req => {
            callbackInfo(req.data);
        }).catch(err => {
        callbackInfo(err);
    })
};

export const getAllProductDataToParams = (callbackInfo, dataSearch) => {
    axios.post(Url + `/product/getAllProductDataToParams`, dataSearch, {
        headers: {'token': localStorage.UserId}
    })
        .then(req => {
            callbackInfo(req.data);
        }).catch(err => {
        callbackInfo(err);
    })
};

export const postUpdateStore = (store, callbackInfo) => {
    const StoreID = store._id;
    store = {...store, StoreID};
    delete store._id;
    axios.post(Url + `/store/update`, store, {
        headers: {'token': localStorage.UserId}
    })
        .then(req => {
            callbackInfo(req.data);
        }).catch(err => {
        console.log(err);
    })
};

export const postRemoveStore = (StoreID, callbackInfo) => {
    axios.post(Url + `/store/remove`, {StoreID}, {
        headers: {'token': localStorage.UserId}
    })
        .then(req => {
            callbackInfo(req.data);
        }).catch(err => {
        console.log(err);
    })
};

export const postAddedProduct = (Product, callbackInfo) => {
    axios.post(Url + `/product/added`, Product, {
        headers: {'token': localStorage.UserId}
    })
        .then(req => {
            callbackInfo(req.data.insertedId);
        }).catch(err => {
        console.log(err);
    })
};

export const postAddedProductParameters = (Parameters, callbackInfo) => {
    axios.post(Url + `/parameter/added`, Parameters, {
        headers: {'token': localStorage.UserId}
    })
        .then(req => {
            callbackInfo(req.data.insertedId);
        }).catch(err => {
        console.log(err);
    })
};

export const getPostpone = (dataSearch, callbackInfo) => {
    axios.post(Url + `/product/getPostpone`, dataSearch, {
        headers: {'token': localStorage.UserId}
    })
        .then(req => {
            callbackInfo(req.data);
        }).catch(err => {
        callbackInfo(err);
    })
};

export const postSendEmail = (data, callbackInfo) => {
    axios.post(Url + `/users/postSendEmail`, data)
        .then(req => {
            callbackInfo(req.data);
        }).catch(err => {
        callbackInfo(err);
    })
};

export const postGetAllUsersData = (data, callbackInfo) => {
    axios.post(Url + `/users/getAllUsersData`, data,{
        headers: {'token': localStorage.UserId}
    })
        .then(req => {
            callbackInfo(req.data);
        }).catch(err => {
        callbackInfo(err);
    })
};

export const postGetAllStoresData = (data, callbackInfo) => {
    axios.post(Url + `/store/getAllStoresData`, data,{
        headers: {'token': localStorage.UserId}
    })
        .then(req => {
            callbackInfo(req.data);
        }).catch(err => {
        callbackInfo(err);
    })
};

export const postRemoveStoreData = (store, callbackInfo) => {
    axios.post(Url + `/store/removeStoreData`, store,{
        headers: {'token': localStorage.UserId}
    })
        .then(req => {
            callbackInfo(req.data);
        }).catch(err => {
        callbackInfo(err);
    })
};

export const postSetStoreData = (store, callbackInfo) => {
    axios.post(Url + `/store/setStoreData`, store,{
        headers: {'token': localStorage.UserId}
    })
        .then(req => {
            callbackInfo(req.data);
        }).catch(err => {
        callbackInfo(err);
    })
};

export const postUnsetProductData = (data, callbackInfo) => {
    axios.post(Url + `/product/unsetProductData`, data,{
        headers: {'token': localStorage.UserId}
    })
        .then(req => {
            callbackInfo(req.data);
        }).catch(err => {
        callbackInfo(err);
    })
};

export const postSetProductData = (data, callbackInfo) => {
    axios.post(Url + `/product/setProductData`, data,{
        headers: {'token': localStorage.UserId}
    })
        .then(req => {
            callbackInfo(req.data);
        }).catch(err => {
        callbackInfo(err);
    })
};

export const getAllProductsData = (data, callbackInfo) => {
    axios.post(Url + `/product/getAllProductsData`, data,{
        headers: {'token': localStorage.UserId}
    })
        .then(req => {
            callbackInfo(req.data);
        }).catch(err => {
        callbackInfo(err);
    })
};

export const getGeoInfo = (callbackInfo) => {
    axios.get('https://ipapi.co/json/').then((req) => {
        callbackInfo(req.data);
    }).catch((error) => {
        console.log(error);
    });
};

export const getAllCountry = (callbackInfo) => {
    axios.get('http://www.geognos.com/api/en/countries/info/all.json').then((req) => {
        callbackInfo(req.data);
    }).catch((error) => {
        console.log(error);
    });
};
