import {SET_USER_DETAILS, SET_USER_LOGIN, SET_USER_TOKEN} from '../action/actionTypes';
const initialState = {
  userObj: {
    userName: '',
    dob: 'Date Of Birth',
    phoneNumber: '',
    fileUri: '',
    address: '',
  },
  // params:{
  //   email: '',
  //   password: ''
  // }
};
const createReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DETAILS:
      return {
        ...state,
        userObj: action.payload,
      };
      case SET_USER_TOKEN:
    return {
    ...state,
    successFunc: action.payload
    };
      
    default:
      return state;
  }
};
export default createReducer;
