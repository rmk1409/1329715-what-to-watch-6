import {combineReducers} from "redux";
import {dataReducer} from "./data/data-reducer";
import {userReducer} from "./user/user-reducer";

const NameSpace = {
  DATA: `DATA`,
  USER: `USER`,
};

const combinedReducer = combineReducers({
  [NameSpace.DATA]: dataReducer,
  [NameSpace.USER]: userReducer,
});

export {NameSpace, combinedReducer};
