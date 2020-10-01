import React from "react";
import Login from "./Login";
import useForm from "../../lib/hooks/useForm";
import useUser from "../../lib/hooks/useUser";
import { initialValues } from "./config";

function LoginWrapper() {
  const { registerUser } = useUser();
  const {
    formData,
    handleChange,
    //errors,
  } = useForm(initialValues, registerUser);

  return (
    <Login
      formData={formData}
      handleChange={handleChange}
      createNewUser={registerUser}
      loginString="Register your Account Here"
    />
  );
}

export default LoginWrapper;
