import { call, put, takeEvery } from "redux-saga/effects";
import { setCoinsLoaded } from "../redux/coinReducer";
// import coinsList from "./coins.json";

function* fetchingCoins() {
  const response = yield call(() =>
    fetch("https://api.coinstats.app/public/v1/coins?skip=0")
  );
  const coins = yield response.json();
  yield put(setCoinsLoaded(coins.coins));

  // yield put(setCoinsLoaded(coinsList));
}

function* coinSaga() {
  yield takeEvery("coins/lodingCoins", fetchingCoins);
}

export default coinSaga;
