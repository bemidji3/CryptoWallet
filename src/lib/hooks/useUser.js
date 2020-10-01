import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createNewUser } from "../../store/users/actions";
import { changePage } from "../../store/pages/actions";

export default () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const registerUser = body => {
        dispatch(createNewUser(body))
            .then(history.push("/home"), dispatch(changePage("home")))
            .catch((error) => console.log(error));
    };

    return { registerUser };
}