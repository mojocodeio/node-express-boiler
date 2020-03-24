import { combineReducers } from 'redux';

/** reducers */
import { authReducer } from './Auth/authReducer';
import { configReducer } from './Config/configReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    config: configReducer,
});

export default rootReducer;
