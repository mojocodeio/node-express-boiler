import { combineReducers } from 'redux';

/** reducers */
import { authReducer } from './Auth/authReducer';
import { configReducer } from './Config/configReducer';
import { errorReducer } from './FlashError/errorReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    config: configReducer,
    error: errorReducer,
});

export default rootReducer;
