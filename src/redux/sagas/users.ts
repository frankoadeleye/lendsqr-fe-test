/* ------------------------------------ GET ALL USER PROFILE -------------------- */
import { GET_ALL_USERS } from "src/redux/types";
import { takeLatest, all, call, put, take, fork } from "redux-saga/effects";
import Services from "src/utils/network-requests/services";
import { GetUsersAction } from "./../actions/users";
import { GET_USER_BY_ID } from "src/redux/types";

/* -----------------------------  GET ALL USERS  ------------------------ */

function* watchGetAllUsersRequest() {
  yield takeLatest(GET_ALL_USERS.START, handleGetAllUsersRequest);
}

function* handleGetAllUsersRequest(action: any) {
  const { payload: data, meta: onSuccess, error: onError } = action;

  try {
    const response = yield call(Services.GET_USERS, data);
    yield put(GetUsersAction.all.success(response));
    onSuccess?.(response);
  } catch (error) {
    onError?.(error.response);
  }
}

/* -----------------------------  GET USER BY ID  ------------------------ */

function* watchGetUserIdRequest() {
  while (true) {
    const { payload } = yield take(GET_USER_BY_ID.START);
    yield fork(handleGetUserIdRequest, payload);
  }
}

function* handleGetUserIdRequest(payload: any) {
  try {
    const response = yield call(Services.GET_USER_DETAILS, payload);
    yield put(GetUsersAction.all.success(response));
  } catch (error) {
    yield put(GetUsersAction.all.fail(error.response.data.message));
  }
}

function* watchUserRequests() {
  yield all([watchGetUserIdRequest(), watchGetAllUsersRequest()]);
}

export default watchUserRequests;
