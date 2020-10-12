import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { register, login } from "../../store/users/actions";

export default () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const registerUser = (email, password) => {
        return dispatch(register(email, password))
            .then(history.push("/home"))
            .catch((error) => console.log(error));
    };

    const loginUser = ({ email, password }) => {
        return dispatch(login(email, password))
    };

    return { registerUser, loginUser };
}