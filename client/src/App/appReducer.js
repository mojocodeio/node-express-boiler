import { combineReducers } from 'redux';

/** reducers */
import { authReducer } from './Auth/authReducer';

const rootReducer = combineReducers({
    auth: authReducer,
});

export default rootReducer;
