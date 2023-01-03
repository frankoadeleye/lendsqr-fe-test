import {
  GET_ALL_USERS,
  GET_USER_BY_ID,
  LOGIN_USER,
  LOGOUT_USER,
} from "src/redux/types";

/* --------------- GET ALL USERS -------------------- */

function GetAllUsersStart() {
  return {
    type: GET_ALL_USERS.START,
  };
}

function GetAllUsersSuccess(payload) {
  return {
    type: GET_ALL_USERS.SUCCESS,
    payload,
  };
}

function GetAllUsersFail(payload) {
  return {
    type: GET_ALL_USERS.FAIL,
    payload,
  };
}

/* --------------- GET USER BY ID -------------------- */

function GetUserByIdStart(payload) {
  return {
    type: GET_USER_BY_ID.START,
    payload,
  };
}

function GetUserByIdSuccess(payload) {
  return {
    type: GET_USER_BY_ID.SUCCESS,
    payload,
  };
}

function GetUserByIdFail(payload) {
  return {
    type: GET_USER_BY_ID.FAIL,
    payload,
  };
}

/* --------------- LOGIN USER -------------------- */


function LoginUser(payload) {
  return {
    type: LOGIN_USER.SUCCESS,
    payload,
  };
}

/* --------------- LOGOUT USER -------------------- */

function LogoutUser() {
  return {
    type: LOGOUT_USER,
  };
}

const GetUsersAction = {
  all: {
    start: GetAllUsersStart,
    success: GetAllUsersSuccess,
    fail: GetAllUsersFail,
  },
  byId: {
    start: GetUserByIdStart,
    success: GetUserByIdSuccess,
    fail: GetUserByIdFail,
  },
};

const AuthenticateAction = {
  login: {
    success: LoginUser,
  },
  logout: LogoutUser,
};

export { GetUsersAction, AuthenticateAction };
