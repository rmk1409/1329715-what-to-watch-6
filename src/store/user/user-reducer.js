import {ActionType} from "../action";

const initState = {
  authorizationStatus: false,
  authInfo: {
    email: `Oliver.conner@gmail.com`,
    [`avatar_url`]: `img/avatar.jpg`,
  },
};

const userReducer = (state = initState, {type, payload}) => {
  let newState = state;
  switch (type) {
    case ActionType.SET_AUTH_INFO:
      newState = {...state, authInfo: payload};
      break;
    case ActionType.SET_AUTHORIZATION_STATUS:
      newState = {...state, authorizationStatus: payload};
      break;
  }
  return newState;
};

export {userReducer};
