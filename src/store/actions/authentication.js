import * as actionTypes from "./actionTypes";
import axios from "../../instances/axios-authentication";

const API_KEY = "AIzaSyDYkIUTN0J0neg-zWIE1xCrlH34_Emt6VU";

const displayError = (error) => {
  return {
    type: actionTypes.ERR_DISPLAY,
    payload: {
      error: error,
    },
  };
};

const saveSession = (userName, token, localId) => {
  return {
    type: actionTypes.LOGIN,
    payload: {
      userName: userName,
      idToken: token,
      localId: localId,
    },
  };
};

const saveSignUp = (userName, token, localId) => {
  return {
    type: actionTypes.SIGN_UP,
    payload: {
      userName: userName,
      idToken: token,
      localId: localId,
    },
  };
};

export const logIn = (authData, onSuccessCallback) => {
  console.log("llego al action");
  return (dispatch) => {
    axios
      .post("/accounts:signInWithPassword?key=" + API_KEY, authData)
      .then((response) => {
        const userEmail = authData.email;
        const token = response.data.idToken;
        const localId = response.data.localId;
        let userSession = {
          token,
          userEmail,
          localId,
        };

        userSession = JSON.stringify(userSession);

        console.log(response);

        localStorage.setItem("userSession", userSession);

        dispatch(saveSession(userEmail, token, localId));

        if (onSuccessCallback) {
          onSuccessCallback();
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(displayError(error));
      });
  };
};

export const signUp = (authData, onSuccessCallback) => {
  return (dispatch) => {
    axios
      .post("/accounts:signUp?key=" + API_KEY, authData)
      .then((response) => {
        const userEmail = authData.email;
        const token = response.data.idToken;
        const localId = response.data.localId;
        let userSession = {
          token,
          userEmail,
          localId,
        };

        userSession = JSON.stringify(userSession);

        console.log(response);

        localStorage.setItem("userSession", userSession);

        dispatch(saveSignUp(userEmail, token, localId));

        if (onSuccessCallback) {
          onSuccessCallback();
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(displayError(error));
      });
  };
};

export const persistAuthentication = () => {
  return (dispatch) => {
    let userSession = localStorage.getItem("userSession");

    if (!userSession) {
      dispatch(logOut());
    } else {
      userSession = JSON.parse(userSession);

      dispatch(
        saveSession(
          userSession.userEmail,
          userSession.token,
          userSession.localId
        )
      );
    }
  };
};

export const logOut = () => {
  localStorage.setItem("userSession", "");
  return {
    type: actionTypes.LOG_OUT,
  };
};

export const cleanError = () => {
  return {
    type: actionTypes.ERR_CLEANER,
  };
};
