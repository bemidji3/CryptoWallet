const initialState = {
    errors: []
}

export default function firebaseReducer(state = initialState, action) {
    switch (action.type) {
        case "LOGIN_FAILURE":
            return {
                ...state,
                errors: "loginError",
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