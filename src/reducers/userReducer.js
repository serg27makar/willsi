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
    UserStore: [],
    Postpone: [],
    SetActionPostpone: false,
    NewUser: 0,
    AllUsersData: [],
    Gender: "",
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
                UsersParameters: action.UsersParameters || []
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
        case "USER_STORE":
            return {
                ...state,
                UserStore: action.UserStore || []
            };
        case "SET_POSTPONE":
            return {
                ...state,
                Postpone: action.Postpone || []
            };
        case "SET_ACTION_POSTPONE":
            return {
                ...state,
                SetActionPostpone: action.SetActionPostpone
            };
        case "SET_NEW_USER":
            return {
                ...state,
                NewUser: action.NewUser
            };
        case "ALL_USERS_DATA":
            return {
                ...state,
                AllUsersData: action.AllUsersData || []
            };
        case "SET_GENDER":
            return {
                ...state,
                Gender: action.Gender
            };
        default:
            return state;
    }
}
