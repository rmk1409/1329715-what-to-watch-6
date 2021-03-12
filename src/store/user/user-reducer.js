import {setAuthInfo, setAuthorizationStatus} from "../action";
import {createReducer} from "@reduxjs/toolkit";

const initState = {
  authorizationStatus: false,
  authInfo: {
    email: `Oliver.conner@gmail.com`,
    [`avatar_url`]: `img/avatar.jpg`,
  },
};

const userReducer = createReducer(initState, (builder) => {
  builder.addCase(setAuthInfo, (state, action) => {
    state.authInfo = action.payload;
  });
  builder.addCase(setAuthorizationStatus, (state, action) => {
    state.authorizationStatus = action.payload;
  });
});

export {userReducer, initState};
