import {signInActionType, signOutActionType} from "../actions/types";

export default (state = {isSignedIn: undefined}, action) => {
    if (action.type === signInActionType) {
        return {...state, isSignedIn: true};
    } else if (action.type === signOutActionType) {
        return {...state, isSignedIn: false};
    }
    return state;
};