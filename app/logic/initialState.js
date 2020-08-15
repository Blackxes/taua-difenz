/**
 * @File store setup for the local storage usage in different environments
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import { createStore } from 'redux';

const Environment = process.env.NODE_ENV;
const AppKey = 'Pnpt';
const AppVersion = '1.0.0';

const SetupAction = {
    type: '_' + AppKey + 'SetupAction',
    pl: { version: AppVersion }
};

const storageKeyify = (key) => (AppKey + '-' + key).toLowerCase();

/**
 * builds the initial state based on local storage and environment
 *
 * @param {function} rootReducer the root reducer from the combineReducers function
 */
export const setupInitialState = (rootReducer) => {
    // depending on what environment mode current app is
    // when in production the Debug property will be deleted
    // every other property stays untouched
    // well.. except the case when they get overwritten by the data in the storage
    let initialState = rootReducer({}, SetupAction);

    // if (Environment == 'development') {
    //     // regardless of the permission debug permission have to be loaded
    //     const settings = JSON.parse(
    //         localStorage.getItem(storageKeyify('debug'))
    //     );
    //     initialState.Debug = {
    //         ...initialState.Debug,
    //         ...settings,
    //         _loadedFromStorage: settings != null
    //     };

    //     // define new debug options when none given
    //     if (!settings) {
    //         localStorage.setItem(
    //             storageKeyify('debug'),
    //             JSON.stringify(initialState.Debug)
    //         );
    //     }
    //     //
    //     else {
    //         // Fixme: the _loadedFromStorage property in state is either true
    //         // or will not be loaded since its in the scope when loading is allowed
    //         // _loadedFromStorage should be always in the state representing the value
    //         // whether its loaded from storage or its the initial state from the (reducers)

    //         // loads data from storage when allowed
    //         if (settings.loadFromStoragePermission) {
    //             const reducerKeys = Object.keys(initialState);

    //             for (const key of reducerKeys) {
    //                 const data = JSON.parse(
    //                     localStorage.getItem(storageKeyify(key))
    //                 );

    //                 initialState[key] = {
    //                     ...initialState[key],
    //                     ...(data || {}),
    //                     _loadedFromStorage: data != null
    //                 };
    //             }
    //         }
    //     }
    // }
    // //
    // else if (Environment == 'production') {
    //     delete initialState.Debug;
    // }

    return initialState;
};

/**
 * creates the store
 */
export const createInitialStore = (rootReducer, preloadedState, enhancer) => {
    const store = createStore(rootReducer, preloadedState, enhancer);

    return store;
};

/**
 * sets up initial listeners for the store
 */
export const setupInitialStoreListeners = (store) => {
    // save debug configuration regardless of save permission
    // if (Environment == 'development') {
    //     store.subscribe(() => {
    //         const currentState = store.getState();
    //         localStorage.setItem(
    //             storageKeyify('debug'),
    //             JSON.stringify(currentState.Debug)
    //         );
    //     });
    // }

    // since the debug settings might change during the application runtime
    // the current state needs to be checked
    // store.subscribe(() => {
    //     const debugSettings = store.getState().Debug;

    //     // prettier-ignore
    //     if (Environment == 'production' || (debugSettings.saveToStoragePermission && debugSettings.loadFromStoragePermission)) {
    //         const state = store.getState();
    //         const reducerKeys = Object.keys(state);

    //         for (const key of reducerKeys) {
    //             localStorage.setItem(storageKeyify(key), JSON.stringify(state[key]));
    //         }
    //     }
    // });

    return store;
};
