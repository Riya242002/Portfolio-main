import { createStore,compose,applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import Viewer from './reducers/Viewer';

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const rootReducer = combineReducers({
  viewer: Viewer,
})


const store = createStore(rootReducer, composeEnhances(
    applyMiddleware(thunk)
));

export default store;