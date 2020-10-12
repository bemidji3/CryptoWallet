import React from "react";
import Register from "./Register";
import { initialValues } from "./config";
import useUser from "../../lib/hooks/useUser";
import useForm from "../../lib/hooks/useForm"
import {toast} from "react-toastify";
import {useHistory} from "react-router";

function RegisterWrapper() {
    const { registerUser } = useUser();
    const history = useHistory();

    const onSubmit = (event, data) => {
        event.preventDefault();
        registerUser(data).then(() => {
            toast.success("Registration successful");
            history.push("/home")
        }).catch(error => {
            toast.error("Registration failed");
            console.error(error)
        })
    };

    const {
        formData,
        handleChange,
        simpleSubmit,
    } = useForm(initialValues, onSubmit);


    return (
        <Register
            formData={formData}
            handleChange={handleChange}
            handleSubmit={simpleSubmit}
        />
    )
}

export default RegisterWrapper;