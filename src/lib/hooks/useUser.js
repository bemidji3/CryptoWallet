import { useDispatch } from "react-redux";
import { register, login, logout, fetchCustomUser } from "../../store/users/actions";
import { getCurrentUser } from "../auth/authService";

export default () => {
    const dispatch = useDispatch();

    const registerUser = ({
        firstName, lastName, email, dateOfBirth, userName, password
    }) => {
        const otherUserInfo = {
            firstName,
            lastName,
            email,
            dateOfBirth,
            userName,
            memberSince: new Date(),
        };
        return dispatch(register(email, password, otherUserInfo))
    };

    const loginUser = ({ email, password }) => {
        return dispatch(login(email, password))
    };


    const logoutUser = () => {
        return dispatch(logout())
    };

    const fetchUser = (email) => {
        return dispatch(fetchCustomUser(email))
    }

    return { registerUser, loginUser, logoutUser, fetchUser, getCurrentUser };
}