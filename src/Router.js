import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Login from "./layouts/Login/LoginWrapper";
import Landing from "./layouts/Landing/LandingWrapper";
import React from "react";

function MainRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" children={<Login/>} />
                <Route path="/home" children={<Landing/>} />
            </Switch>
        </Router>
    )
}

export default MainRouter;
