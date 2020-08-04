import axios from 'axios'

export const setActionServerPost = (direct, user, callbackInfo) => {
    let userInfo={
        dataID: '',
    };

    axios.post(`http://localhost:3001/users/`+ direct, user)
        .then(req => {
            localStorage.token = req.data.insertedId;
            userInfo= {
                dataID: req.data.insertedId,
            };
            callbackInfo(userInfo);
        })
};
