import { createSelector } from 'reselect';
import deep from 'deep-get-set';

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_USER':
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