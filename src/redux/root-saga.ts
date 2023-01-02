import { all } from "redux-saga/effects";
import { watchUserRequests } from "src/redux/sagas";

function* CombineSagas() {
  yield all([watchUserRequests()]);
}

export default CombineSagas;
