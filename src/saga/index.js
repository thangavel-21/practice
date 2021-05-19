import {takeLatest, all} from 'redux-saga/effects'
import * as actions from '../redux/action/actionTypes'
import {login} from './loginsaga'

export default function* root(){
    console.log('sagaroot')
    yield all([
        takeLatest(actions.SET_USER_LOGIN,login)
    ])
}