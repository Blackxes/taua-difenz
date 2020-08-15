/**
 * @File store creation and configuration
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmx.de
 */

import { applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import { setupInitialState, createInitialStore, setupInitialStoreListeners } from './initialState';

const environment = process.env.NODE_ENV;
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
			// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
		})
		: compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// setup state
const initialState = setupInitialState(rootReducer);
const initialStore = createInitialStore(rootReducer, initialState, enhancer);
const store = setupInitialStoreListeners(initialStore);

sagaMiddleware.run(rootSaga);

export default store;
