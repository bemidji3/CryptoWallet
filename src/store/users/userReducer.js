const initialState = {
    errors: [],
    user: {},
}

export default function firebaseReducer(state = initialState, action) {
    switch (action.type) {
        case "LOGIN_FAILURE":
            return {
                ...state,
                errors: "loginError",
            };
        case "RECEIVE_USER_DATA":
            return {
                ...state,
                user: action.userData,
            };
        case "REGISTER_SUCCESS":
        case "LOGIN_SUCCESS":
        case "LOGOUT":
        case "FETCH_USER":
            return action.currentUser;
        default:
            return state;
    }
}