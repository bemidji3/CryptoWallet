import React from "react";
import { Form as SemanticForm } from "semantic-ui-react";
import "semantic-ui-css/components/form.css";

function FormField(props) {
    return <SemanticForm.Field {...props}>{props.children}</SemanticForm.Field>;
}

export default FormField;