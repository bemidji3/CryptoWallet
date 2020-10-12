import React from "react";
import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";

// import Login from "./layouts/Login/LoginWrapper";
// import Landing from "./layouts/Landing/LandingWrapper";

// function MainRouter() {
//     return (
//         <Router>
//             <Switch>
//                 <Route exact path="/" children={<Login/>} />
//                 <Route path="/home" children={<Landing/>} />
//             </Switch>
//         </Router>
//     )
// }

// export default MainRouter;


import "bulma/css/bulma.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Home from "./components/home"
import Header from "./components/header"
import Public from "./components/public"
import Private from "./components/private"
import Login from "./components/login"
import Register from "./components/register"


function MainRouter() {
    return (
        <Router>
            <section className="section">
                <div className="container">
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/public" component={Public} />
                        <Route path="/private" component={Private} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                    </Switch>
                    <ToastContainer autoClose={3000} hideProgressBar />
                </div>
            </section>
        </Router>
    )
}

export default MainRouter;
