import { RECEIVE_USER_DATA } from "./actions";

const initialState = {
    currentUser: {
        userName: "",
        email: "",
        dateOfBirth: "",
        ravenCoin: {},
        bitCoin: {},
    }
}

export default function users(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_USER_DATA:
            return {
                ...state,
                action.filteredBody,
            }
    }
}