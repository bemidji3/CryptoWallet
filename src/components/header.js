import React from "react"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <>
      <nav className="level">
        <NavLink to="/" exact className="link is-info">
          Home
        </NavLink>
        <NavLink to="/public" exact className="link is-info">
          Public
        </NavLink>
        <NavLink to="/private" exact className="link is-info">
          Private
        </NavLink>
        <NavLink to="/login" exact className="link is-info">
          Log in
        </NavLink>
        <NavLink to="/register" exact className="link is-info">
          Register
        </NavLink>
      </nav>
    </>
  )
}

export default Header