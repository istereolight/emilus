import { all } from 'redux-saga/effects';
import Auth from './Auth';
import GetUsers from './GetUsers';

export default function* rootSaga(getState) {
  yield all([
    Auth(),
    GetUsers()
  ]);
}
