import {
  GET_ALL_USERS,
  GET_USER_BY_ID,
  LOGIN_USER,
  LOGOUT_USER,
} from "src/redux/types";

const initGetAllUsersState = {
  isGetting: false,
  isGot: false,
  isFailedToGet: false,
  response: null,
};

export function GetAllUsersReducer(state = initGetAllUsersState, action) {
  switch (action.type) {
    case GET_ALL_USERS.START:
      return {
        ...state,
        isGetting: true,
      };

    case GET_ALL_USERS.SUCCESS:
      return {
        ...state,
        isGot: true,
        isGetting: false,
        response: action.payload,
      };

    case GET_ALL_USERS.FAIL:
      return {
        ...state,
        isFailedToGet: true,
        isGetting: false,
        reponse: action.payload,
      };

    case LOGOUT_USER:
      return {
        ...state,
        isGetting: false,
        isGot: false,
        isFailedToGet: false,
        response: null,
      };

    default:
      return state;
  }
}

const initGetUserByIdState = {
  isGetting: false,
  isGot: false,
  isFailedToGet: false,
  response: null,
};

export function GetUserByIdReducer(state = initGetUserByIdState, action) {
  switch (action.type) {
    case GET_USER_BY_ID.START:
      return {
        ...state,
        isGetting: true,
      };

    case GET_USER_BY_ID.SUCCESS:
      return {
        ...state,
        isGot: true,
        isGetting: false,
        response: action.payload,
      };

    case GET_USER_BY_ID.FAIL:
      return {
        ...state,
        isFailedToGet: true,
        isGetting: false,
        reponse: action.payload,
      };

    case LOGOUT_USER:
      return {
        ...state,
        isGetting: false,
        isGot: false,
        isFailedToGet: false,
        response: null,
      };

    default:
      return state;
  }
}

const initLoginUserState = {
  isLoggedIn: false,
  response: null,
};

export function LoginUserReducer(state = initLoginUserState, action) {
  switch (action.type) {
    case LOGIN_USER.SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        response: action.payload,
      };

    case LOGOUT_USER:
      return {
        ...state,
        isLoggedIn: false,
        response: null,
      };

    default:
      return state;
  }
}
