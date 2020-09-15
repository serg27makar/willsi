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
            callbackInfo(req.data.insertedId);
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
