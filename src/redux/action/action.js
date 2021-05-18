import *  as types from './actionTypes'
export function setUserDetails(userObj) {
    return {
            type:types. SET_USER_DETAILS,
            payload: userObj
    }
}