import {signInActionType, signOutActionType} from "./types";

export const signIn = () => {
    return {
        type: signInActionType,
    };
};

export const signOut = () => {
    return {
        type: signOutActionType
    };
};