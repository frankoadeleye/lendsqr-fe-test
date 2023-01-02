import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  GetAllUsersReducer,
  GetUserByIdReducer,
  AlertReducer,
  LoginUserReducer,
} from "src/redux/reducers";

const GetAllUsersConfig = {
  key: "allUsers",
  storage,
  blacklist: ["isGetting"],
};

const LoginUserConfig = {
  key: "loginUser",
  storage,
  blacklist: [""],
};

const GetUsersConfig = {
  key: "getUser",
  storage,
  blacklist: ["isGetting"],
};

export default combineReducers({
  alert: AlertReducer,
  loginUser: persistReducer(LoginUserConfig, LoginUserReducer),
  allUsers: persistReducer(GetAllUsersConfig, GetAllUsersReducer),
  getUser: persistReducer(GetUsersConfig, GetUserByIdReducer),
});
