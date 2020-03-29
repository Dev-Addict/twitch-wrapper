import {signInActionType, signOutActionType} from "../actions/types";

export default (state = {isSignedIn: null, userId: null}, action) => {
    if (action.type === signInActionType) {
        return {...state, isSignedIn: true, userId: action.payload};
    } else if (action.type === signOutActionType) {
        return {...state, isSignedIn: false, userId: null};
    }
    return state;
};