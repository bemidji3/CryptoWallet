import React from "react";
import { Grid } from "semantic-ui-react";
import "semantic-ui-css/components/grid.css";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import "./Login.scss";

function Login({
  loginString,
  createNewUser,
  formData,
  handleChange,
}) {
  const { firstName, lastName, userName, password, email, dateOfBirth } = formData;
  return (
    <Grid columns={1}>
      <Grid.Column width={16}>
        <div className="MainLoginContent">
          {loginString}
          <Form>
            <Input
              label="First Name"
              value={firstName}
              onChange={(_, { value }) => handleChange("firstName", value)}
            />
            <Input
              label="Last Name"
              value={lastName}
              onChange={(_, { value }) => handleChange("lastName", value)}
            />
            <Input
              label="Email"
              value={email}
              onChange={(_, { value }) => handleChange("email", value)}
            />
            <Input
              label="Date of Birth"
              value={dateOfBirth}
              onChange={(_, { value }) => handleChange("dateOfBirth", value)}
            />
            <Input
              label="Username"
              value={userName}
              onChange={(_, { value }) => handleChange("userName", value)}
            />
            <Input
              label="Password"
              value={password}
              onChange={(_, { value }) => handleChange("password", value)}
            />
            <Button onClick={() => createNewUser(formData)}>
              Register Now!
            </Button>
          </Form>
        </div>
      </Grid.Column>
    </Grid>
  );
}

export default Login;
