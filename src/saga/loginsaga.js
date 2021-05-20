import {Apiservice} from '../api/apicall';
import {call, put} from 'redux-saga/effects';
import * as UserActions from '../redux/action/action';
import api from '../api/apiurl';

export function* login(data) {
  let response = yield call(Apiservice.postApi, api.LOGIN, data.params);
  if (response.status === 200) {
    yield put(UserActions.setToken(response.data.token));
    data.succfun(response.data.token);
  } else {
    data.failurefunc(response.data.error);
  }
}
