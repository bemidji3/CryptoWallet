import React from "react";
import Login from "./Login";
import useForm from "../../lib/hooks/useForm";
import useUser from "../../lib/hooks/useUser";
import { initialValues } from "./config";
import {toast} from "react-toastify";
import {useHistory} from "react-router-dom";

function LoginWrapper() {
  const { loginUser } = useUser();
  const history = useHistory();

  const onSubmit = (data) => {
    loginUser(data)
        .then(() => {
          toast.success("Login successful");
          history.push("/home")
        })
        .catch(error => {
          toast.error("Login failed");
          console.error(error)
        })
  };

  const {
    formData,
    handleChange,
    simpleSubmit,
  } = useForm(initialValues, onSubmit);

  return (
    <Login
      formData={formData}
      handleChange={handleChange}
      onSubmit={simpleSubmit}
      loginString="Login"
    />
  );
}

export default LoginWrapper;
