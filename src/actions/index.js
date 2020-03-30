import streams from "../apis/streams";
import {
    signInActionType,
    signOutActionType,
    createStreamActionType,
    getStreamsActionType,
    getStreamActionType,
    updateStreamActionType,
    deleteStreamActionType
} from "./types";
import history from "../history";

export const signIn = userId => {
    return {
        type: signInActionType,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: signOutActionType
    };
};

export const createStream = formValues => async (dispatch, getState) => {
    const {userId} = getState().auth;
    const response = await streams.post('/streams', {...formValues, userId});
    dispatch({
        type: createStreamActionType,
        payload: response.data
    });
    history.push('/');
};

export const getStreams = () => async dispatch => {
    const response = await streams.get('/streams');
    dispatch({
        type: getStreamsActionType,
        payload: response.data
    });
};

export const getStream = id => async dispatch => {
    const response = await streams.get(`/streams/${id}`);
    dispatch({
        type: getStreamActionType,
        payload: response.data
    });
};

export const updateStream = (id, formValues) => async dispatch => {
    const response = await streams.patch(`/streams/${id}`, formValues);
    dispatch({
        type: updateStreamActionType,
        payload: response.data
    });
    history.push('/');
};

export const deleteStream = id => async dispatch => {
    await streams.delete(`/streams/${id}`);
    dispatch({
        type: deleteStreamActionType,
        payload: id
    });
};