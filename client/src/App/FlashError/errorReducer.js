import deep from 'deep-get-set';

import { CLEAR_ERROR_MESSAGE } from './actions';
import { USER_LOGIN_FAILURE } from '../Auth/actions';

const initialState = {
    errorMessage: '',
}

export const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_FAILURE:
            return {
                ...state,
                errorMessage: action.message,
            }
        case CLEAR_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: '',
            }
        default:
            return state
    };
};

export default errorReducer;

export const getErrorReducer = state => {
    return deep(state, 'error');
}

export const getErrorMessage = state => {
    const error = getErrorReducer(state);
    return deep(error, 'errorMessage');
}