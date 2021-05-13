import {Apiservice} from './apicall';
import api from './apiurl';

export async function login(data) {
  try {
    console.log('data', data);
    let response = await Apiservice.postApi(api.LOGIN, data);
    console.log('response', response);
    return Promise.resolve(response.data);
  } catch (e) {
    return Promise.reject('error');
  }
}
//export const user = {login}
