import {takeLatest, all} from 'redux-saga/effects';
import * as actions from '../redux/action/actionTypes';
import {login,list} from './loginsaga';

export default function* root() {
  yield all([
    takeLatest(actions.SET_USER_LOGIN, login),
    takeLatest(actions.SET_USER_LIST, list),
    
  ]);
}
