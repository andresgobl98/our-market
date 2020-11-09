import * as actionTypes from "../actions/actionTypes";
import updateObject from "../utility";

const initialState = {
  isUserLoggedIn: false,
  userLoggedIn: {
    userName: "",
    idToken: "",
    localId: "",
  },
  errMessage: "",
};

const logIn = (state, action) => {
  console.log("llego al reducer");
  return updateObject(state, {
    isUserLoggedIn: true,
    userLoggedIn: {
      userName: action.payload.userName,
      idToken: action.payload.idToken,
      localId: action.payload.localId,
    },
  });
};

const signUp = (state, action) => {
  return updateObject(state, {
    isUserLoggedIn: true,
    userLoggedIn: {
      userName: action.payload.userName,
      idToken: action.payload.idToken,
      localId: action.payload.localId,
    },
  });
};

const logOut = (state, action) => {
  return updateObject(state, {
    isUserLoggedIn: false,
    userLoggedIn: {
      userName: "",
      idToken: "",
      localId: "",
    },
  });
};

const getError = (state, action) => {
  var err = action.payload.error;
  return updateObject(state, { errMessage: err.response.data.error });
};

const cleanError = (state, action) => {
  return updateObject(state, { errMessage: {} });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return logIn(state, action);
    case actionTypes.SIGN_UP:
      return signUp(state, action);
    case actionTypes.LOG_OUT:
      return logOut(state, action);
    case actionTypes.ERR_DISPLAY:
      return getError(state, action);
    case actionTypes.ERR_CLEANER:
      return cleanError(state, action);
    default:
      return state;
  }
};

export default reducer;
