import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { register, login } from "../../store/users/actions";

export default () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const registerUser = ({
        firstName, lastName, email, dateOfBirth, userName, password
    }) => {
        console.log(email)
        console.log(password)
        return dispatch(register(email, password))
    };

    const loginUser = ({ email, password }) => {
        return dispatch(login(email, password))
    };

    return { registerUser, loginUser };
}