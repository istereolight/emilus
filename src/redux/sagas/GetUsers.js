import axios from "axios";
import { API_BASE_URL } from "constants/ApiConstant";
import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_USERS } from "redux/constants/GetUsers";
import { setUsers } from "redux/reducers/GetUsers";



const fetchUsersFromApi = () => axios.get(API_BASE_URL);

function* fetchUserWorker () {
  const respone = yield call(fetchUsersFromApi);
  yield put(setUsers(respone.data));
}

export default function* userWatcher () {
  yield takeEvery(FETCH_USERS, fetchUserWorker);
}