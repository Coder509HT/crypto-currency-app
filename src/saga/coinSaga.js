import { call, put, takeEvery } from "redux-saga/effects";
import { setCoinsLoaded } from "../redux/coinReducer";

function* fetchingCoins() {
  const response = yield call(() => fetch(process.env.REACT_APP_API_LINK));
  const coins = yield response.json();
  yield put(setCoinsLoaded(coins.coins));
}

function* coinSaga() {
  yield takeEvery("coins/lodingCoins", fetchingCoins);
}

export default coinSaga;
