import { auth } from "../../lib/auth/authService"
// import {
//   sendRegistrationRequest,
//   receiveRegistrationResponse,
// } from "../requests/actions";
// import { post } from "../../lib/Api";

export const loginSuccess = () => {
  return {
    type: "LOGIN_SUCCESS",
    currentUser: auth.currentUser.toJSON(),
  }
}

export const registerSuccess = () => {
  return {
    type: "REGISTER_SUCCESS",
    currentUser: auth.currentUser.toJSON(),
  }
}

export const register = (email, password) => async dispatch => {
  try {
    await auth.createUserWithEmailAndPassword(email, password)
    dispatch(registerSuccess())
  } catch (error) {
    throw error
  }
}

export const login = (email, password) => async dispatch => {
  try {
    await auth.signInWithEmailAndPassword(email, password)
    dispatch(loginSuccess())
  } catch (error) {
    throw error
  }
}