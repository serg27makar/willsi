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
