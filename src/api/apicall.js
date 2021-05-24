import {create} from 'apisauce';
import Api from './apiurl';

const api = create({
  baseURL: Api.API_BASE_URL,
  headers: {
    Accept: 'application/json',
    Content_Type: 'application/json',
  },
});

function postApi(endpoint, data) {
  return api.post(endpoint, data);
}
function getApi(endpoint, data) {
  return api.get(endpoint, data);
}
export const Apiservice = {
  postApi,
  getApi
};
