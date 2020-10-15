import { useDispatch } from "react-redux";
import { register, login, logout } from "../../store/users/actions";
import { useHistory } from "react-router-dom";

export default () => {
    const dispatch = useDispatch();

    const registerUser = ({
        firstName, lastName, email, dateOfBirth, userName, password
    }) => {
        return dispatch(register(email, password))
    };

    const loginUser = ({ email, password }) => {
        return dispatch(login(email, password))
    };


    const logoutUser = () => {
        return dispatch(logout())
    }

    return { registerUser, loginUser, logoutUser };
}