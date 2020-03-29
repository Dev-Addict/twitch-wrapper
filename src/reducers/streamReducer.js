import _ from 'lodash';

import {
    createStreamActionType,
    getStreamsActionType,
    getStreamActionType,
    updateStreamActionType,
    deleteStreamActionType
} from '../actions/types';

export default (state = {}, action) => {
    if (action.type === getStreamsActionType) {
        return _.mapKeys(action.payload, 'id');
    } else if (action.type === getStreamActionType ||
        action.type === createStreamActionType ||
        action.type === updateStreamActionType) {
        return {state, [action.payload.id]: action.payload};
    } else if (action.type === deleteStreamActionType) {
        return _.omit(state, action.payload);
    }
    return state;
};