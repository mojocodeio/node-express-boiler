import { createSelector } from 'reselect';
import deep from 'deep-get-set';

/** action types */
import {
    USER_LOGIN_SUCCESS,
} from './actions';

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                userId: action.userId,
                userName: action.userName,
            };
        default:
            return state;
    };
};

export default authReducer;

/** selectors */
export const getAuthReducer = createSelector(
    state => deep(state, 'auth'),
);

export const getUserId = createSelector(
    getAuthReducer,
    auth => deep(auth, 'userId') || '',
);

export const getUserName = createSelector(
    getAuthReducer,
    auth => deep(auth, 'userName') || '',
);