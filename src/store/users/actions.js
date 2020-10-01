import Parse from "parse";
import {
  sendRegistrationRequest,
  receiveRegistrationResponse,
} from "../requests/actions";
import { post } from "../../lib/Api";

export const RECEIVE_USER_DATA = "RECEIVE_USER_DATA";

export function receiveUserData(data) {
  return { type: RECEIVE_USER_DATA, data}
}

export function performRegistration(url, body) {
  return (dispatch) => {
    dispatch(sendRegistrationRequest(body));
    return post(url, body).then(({ status }) => {
      dispatch(receiveRegistrationResponse(status));
    });
  };
}

export function getUserData(userId) {
  const User = new Parse.Object.extend("Person");
  const userQuery = new Parse.Query(User);

  userQuery.equalTo("objectId", userId);

  userQuery.find().then((data) => {
    return (dispatch) => {
      const filteredData = {
        userName: data.get("userName"),
        email: data.get("email"),
        dateOfBirth: data.get("dateOfBirth"),
        ravenCoin: data.get("ravenCoin"),
        bitCoin: data.get("bitCoin"),
      };
      dispatch(receiveUserData(filteredData))
    }
  })
}

export function createNewUser(formData) {
  return (dispatch) => {
    const Person = new Parse.Object.extend("Person");
    const myNewUser = new Person();

    Object.keys(formData).forEach(key => {
      console.log("setting key ", key);
      myNewUser.set(key, formData[key])
    });
    dispatch(sendRegistrationRequest(formData));
    return myNewUser.save().then((result) => {
      dispatch(receiveRegistrationResponse(result.status))
      dispatch(receiveUserData(formData))
    }, (error) => {
      console.log("error creating user ", error)
    })
  }

}