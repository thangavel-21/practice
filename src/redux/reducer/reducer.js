import {SET_USER_DETAILS } from '../action/actionTypes';
const initialState = {
    userObj: {
        userName: '',
        dob: 'Date Of Birth',
        phoneNumber: '',
        fileUri: '',
        address: '',
      },
};
const createReducer = (state = initialState, action) => {
  //console.log(action)
switch(action.type) {
case SET_USER_DETAILS:
return {
...state,
userObj:action.payload
};
default:
return state;
}
}
export default createReducer;