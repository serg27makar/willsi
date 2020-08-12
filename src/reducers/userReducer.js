const initialState = {
    UserID: "",
    UserName: "",
    Email: "",
    PublicAuth: {},
    Phone: "",
    UsersParameters: []
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_USER_ID":
            return {
                ...state,
                UserID: action.UserID
            };
        case "SET_USER_NAME":
            return {
                ...state,
                UserName: action.UserName
            };
        case "SET_USER_EMAIL":
            return {
                ...state,
                Email: action.Email
            };
        case "SET_PUBLIC_AUTH":
            return {
                ...state,
                PublicAuth: action.PublicAuth
            };
        case "SET_PHONE":
            return {
                ...state,
                Phone: action.Phone
            };
        case "SET_USERS_PARAMETERS":
            return {
                ...state,
                UsersParameters: action.UsersParameters
            };
        default:
            return state;
    }
}
