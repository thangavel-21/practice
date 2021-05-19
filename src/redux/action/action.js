import * as types from './actionTypes';
export function setUserDetails(userObj) {
  return {
    type: types.SET_USER_DETAILS,
    payload: userObj,
  };
}
export function userLoginApi(params,failurefunc,succfun) {
  return {
    type: types.SET_USER_LOGIN,
    params,failurefunc,succfun
  };
}
export function setToken(successFunc) {
  return {
      type: types.SET_USER_TOKEN,
      payload: successFunc
  }
}

