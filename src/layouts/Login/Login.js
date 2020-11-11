import React from "react";
import { Grid } from "semantic-ui-react";
import "semantic-ui-css/components/grid.css";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Link from "../../components/Link";
import "./Login.scss";

function Login({
  onSubmit,
  formData,
  handleChange,
}) {
  const { password, email} = formData;
  return (
    <Grid columns={1}>
      <Grid.Column width={16}>
        <div className="MainLoginContent">

          <Form>
            <Input
              label="Email"
              value={email}
              onChange={(_, { value }) => handleChange("email", value)}
            />
            <Input
                type="password"
                label="Password"
                value={password}
                onChange={(_, { value }) => handleChange("password", value)}
            />
            <Button
              onClick={() => {
                onSubmit(formData)
              }}
            >
              Login!
            </Button>
          </Form>
          <p>
            Don't have an account? Register <Link to="/register"> here </Link>
          </p>
        </div>
      </Grid.Column>
    </Grid>
  );
}

export default Login;
