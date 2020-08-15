/**
 * @File root sagas combining all sagas
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([]);
}
