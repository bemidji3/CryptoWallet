import React, { useLayoutEffect } from "react";

import PrivateRoute from "./lib/auth/PrivateRoute/PrivateRoute";
import {
    BrowserRouter as Router, Route, Switch, Redirect,
} from "react-router-dom";

import Login from "./layouts/Login";
import Landing from "./layouts/Landing/Landing";
import Register from "./layouts/Register";
import { fetchUser } from "./store/users/actions"

function MainRouter() {
    useLayoutEffect(() => {
        fetchUser()
    }, []);

    return (
        <Router>
            <Switch>
                <Route exact path="/" render={() => {
                    return (
                        <Redirect to="/login" />
                    )
                }} />
                <Route path="/login" children={<Login/>} />
                <Route path="/register" children={<Register />} />
                <PrivateRoute path="/home" component={Landing} />
            </Switch>
        </Router>
    )
}

export default MainRouter;
