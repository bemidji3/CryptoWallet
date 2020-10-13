// import { useDispatch } from "react-redux";
// import { performRegistration } from "../../store/users/actions";
// import { changePage } from "../../store/pages/actions";
// import { useHistory } from "react-router-dom";

// export default () => {
//   const dispatch = useDispatch();
//   const history = useHistory();

//   const registerUser = (url, body) => {
//     const filteredBody = {
//       ...body,
//       api_key: "15c97b04fd8ebe0d590455aeba453c50",
//       timestamp: Date.now(),
//     };
//     dispatch(performRegistration(url, filteredBody))
//       .then(history.push("/home"), dispatch(changePage("home")))
//       .catch((error) => console.log(error));
//   };

//   return { registerUser };
// };
