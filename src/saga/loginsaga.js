import {Apiservice} from '../api/apicall';
import { call, put } from 'redux-saga/effects'
import * as UserActions from '../redux/action/action'
import api from '../api/apiurl';


export function* login(data) {
  //   try {
     console.log('data', data);
      let response = yield call(Apiservice.postApi,api.LOGIN, data.params);
      console.log('response', response);
      if(response.status === 200){  
        //return response.status
       // return response.data.token
       yield put(UserActions.setToken(response.data.token));
         data.succfun(response.data.token)  
      }
      else{
        console.log(response.data.error)
        data.failurefunc(response.data.error)

      }
      
  //    // return Promise.resolve(response.data.token);
  //   } catch (e) {
  //     return Promise.reject('error',e.code);
  //   }
   }
  