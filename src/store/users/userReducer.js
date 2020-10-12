// import { RECEIVE_USER_DATA } from "./actions";
// const initialState = {
//     currentUser: {
//         userName: "",
//         email: "",
//         dateOfBirth: "",
//         ravenCoin: {},
//         bitCoin: {},
//     }
// }

// export default function users(state = initialState, action) {
//     switch (action.type) {
//         case RECEIVE_USER_DATA:
//             console.log("action ", JSON.stringify(action))
//             return {
//                 ...state,
//                 currentUser: {
//                     ...action.filteredBody,
//                 },
//             };
//         default:
//             return state;
//     }
// }

export default function firebaseReducer(state = null, action) {
    switch (action.type) {
        case "REGISTER_SUCCESS":
        case "LOGIN_SUCCESS":
        case "LOGOUT":
        case "FETCH_USER":
            return action.currentUser
        default:
            return state;
    }
}