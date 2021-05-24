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
export function* list(data) {
  console.log('data',data)
  let list = yield call(Apiservice.getApi, api.PAGE+data.page);
  console.log('list',list)
  if (list.status === 200) {
    data.succfun(list.data);
  } else {
    data.failurefunc(list.data.error);
  }
}
