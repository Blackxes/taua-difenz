/**
 * @File main entrance
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { StyleSheetManager } from 'styled-components';

import store from './Logic/store';
import { generateId } from './logic/miscellaneous/functions';

import App from './Components/App';
import GlobalStyle from './GlobalStyle';

if (process.env.NODE_ENV == 'development') {
    console.group('Random Hash Ids');
    for (let i = 0; i < 5; i++) console.log(generateId());
    console.groupEnd();
}

render(
    <Provider store={store}>
        <GlobalStyle />
        <StyleSheetManager disableVendorPrefixes>
            <App />
        </StyleSheetManager>
    </Provider>,
    document.getElementById('app')
);
