import React from "react"
import { getAuthenticationStatus } from "../authService"
import { Route, Redirect } from "react-router-dom"

function PrivateRoute({ component: Component, ...rest }){
  return (
    <Route
      {...rest}
      render={props =>
        getAuthenticationStatus() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute