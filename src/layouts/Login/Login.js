import React from "react";
import { Grid } from "semantic-ui-react";
import Form from "../../components/Form";
import Input from "../../components/Input";
import "./Login.scss";

function Login({loginString}) {
    return (
        <Grid columns={1}>
            <Grid.Column width={8}>
                <div className="MainLoginContent">
                    {loginString}
                    <Form>
                        <Input
                            label="First Name"
                        />
                        <Input
                            label="Last Name"
                        />
                        <Input
                            label="Email"
                        />
                    </Form>
                </div>
            </Grid.Column>
        </Grid>
    )
}

export default Login;