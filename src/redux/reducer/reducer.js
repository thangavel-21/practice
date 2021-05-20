import * as user from '../action/actionTypes';
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
  switch (action.type) {
    case user.SET_USER_DETAILS:
      return {
        ...state,
        userObj: action.payload,
      };
    case user.SET_USER_TOKEN:
      return {
        ...state,
        successFunc: action.payload,
      };

    default:
      return state;
  }
};
export default createReducer;
