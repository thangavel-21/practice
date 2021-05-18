import {Apiservice} from './apicall';
import api from './apiurl';

export async function login(data,failurefunc,succfun) {
  try {
    console.log('data', data);
    let response = await Apiservice.postApi(api.LOGIN, data);
    if(response.status === 200){
      console.log('response', response);
      //return response.status
     // return response.data.token
       succfun(response.data.token)  
    }
    else{
      failurefunc(response.data.error)
    }
    
   // return Promise.resolve(response.data.token);
  } catch (e) {
    return Promise.reject('error',e.code);
  }
}
//export const user = {login}
