import {setAuthInfo, setAuthorizationStatus} from "../action";
import {initState, userReducer} from "./user-reducer";

describe(`Reducers work correctly`, () => {
  it(`should set auth status`, function () {
    const newStatus = true;
    expect(userReducer(initState, setAuthorizationStatus(newStatus))).toEqual({
      ...initState,
      authorizationStatus: newStatus,
    });
  });
  it(`should set auth info`, function () {
    const newAuthInfo = `some-auth-info`;
    expect(userReducer(initState, setAuthInfo(newAuthInfo))).toEqual({
      ...initState,
      authInfo: newAuthInfo,
    });
  });
});
