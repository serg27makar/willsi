const initialState = {
    UserID: "",
    UserName: "",
    Email: "",
    PublicAuth: {},
    Phone: "",
    UsersParameters: [],
    UserUpdate: {},
    AddUser: false,
    Permission: "unknown",
    HeaderUser: 0,
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
        case "SET_USER_UPDATE":
            return {
                ...state,
                UserUpdate: action.UserUpdate
            };
        case "ADD_USER":
            return {
                ...state,
                AddUser: action.AddUser
            };
        case "USER_PERMISSION":
            return {
                ...state,
                Permission: action.Permission
            };
        case "HEADER_USER":
            return {
                ...state,
                HeaderUser: action.HeaderUser
            };
        default:
            return state;
    }
}
