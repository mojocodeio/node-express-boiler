import deep from 'deep-get-set';

/** action types */
import {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_FETCH_SUCCESS,
    USER_FETCH_FAILURE,
    USER_FETCH_LOADING,
} from './actions';

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_FETCH_LOADING:
            return {
                ...state,
                isLoadingUser: true,
            }
        case USER_FETCH_SUCCESS:
            return {
                ...state,
                isLoadingUser: false,
                userId: action.userId,
                userName: action.userName,
            }
        case USER_FETCH_FAILURE:
            return {
                ...state,
                isLoadingUser: false,
                userId: '',
                userName: '',
            }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                userId: action.userId,
                userName: action.userName,
            };
        case USER_LOGIN_FAILURE:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    };
};

export default authReducer;

/** selectors */
export const getAuthReducer = state => deep(state, 'auth');

export const getUserId = state => {
    const auth = getAuthReducer(state);
    return deep(auth, 'userId');
};

export const getUserName = state => {
    const auth = getAuthReducer(state);
    return deep(auth, 'userName');
};

export const getIsLoadingUser = state => {
    const auth = getAuthReducer(state);
    return deep(auth, 'isLoadingUser');
};