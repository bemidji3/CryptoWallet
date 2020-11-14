import { auth } from "../../lib/auth/authService"
 import { post } from "../../lib/Api";

export const loginSuccess = () => {
  return {
    type: "LOGIN_SUCCESS",
    currentUser: auth.currentUser.toJSON(),
  }
};

export const loginFailure = () => {
  return {
    type: "LOGIN_FAILURE",
    currentUser: null,
  }
};

export const registerSuccess = (body) => {
  return {
    type: "REGISTER_SUCCESS",
    currentUser: auth.currentUser.toJSON(),
    user: body,
  }
};

export const registerFailure = (error) => {
  return {
    type: "REGISTER FAILURE",
    currentUser: null,
    errors: error,
  }
};

export const receiveUserData = (data) => {
  return {
    type: "RECEIVE_USER_DATA",
    user: data,
  }
};

export const userDataFailure = (error) => {
  return {
    type: "USER_DATA_FAILURE",
    errors: error,
  }
}

export const register = (email, password, personalInfo) => dispatch => {
    return auth.createUserWithEmailAndPassword(email, password).then(() => {
      post("http://localhost:6969/new-user", personalInfo).then(newResult => {
        dispatch(registerSuccess(newResult));
      })
    }).catch(error => {
      console.log("error ", error);
      dispatch(registerFailure(error));
    });

};

export const login = (email, password) => dispatch => {
  return auth.signInWithEmailAndPassword(email, password).then((result) => {
    dispatch(loginSuccess(result));
    }).catch(error => {
      dispatch(loginFailure(error));
    })

};

export const logout = () => async dispatch => {
  try {
    await auth.signOut();
    dispatch({ type: "LOGOUT", currentUser: auth.currentUser })
  } catch (error) {
    throw error
  }
};

export const fetchCustomUser = (email) => dispatch => {
  return post("http://localhost:6969/get-user-info", {email: email}).then(result => {
    dispatch(receiveUserData(result));
    return result;
  }).catch(error => {
    dispatch(userDataFailure(error));
    return error;
  });
};

export const fetchUser = () => async dispatch => {
  try {
    await auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        localStorage.setItem("isAuthenticated", true);
        dispatch({
          type: "FETCH_USER",
          currentUser: currentUser.toJSON(),
        })
      } else {
        localStorage.removeItem("isAuthenticated");
        dispatch({
          type: "FETCH_USER",
          currentUser: null,
        })
      }
    })
  } catch (error) {
    throw error
  }
};