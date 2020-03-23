import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './App/appReducer';

const enhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, {}, enhancers);

if (module.hot) {
    module.hot.accept('./App/appReducer', () => {
        const nextRootReducer = require('./App/appReducer').default;
        store.replaceReducer(nextRootReducer);
    })
}

export default store;
