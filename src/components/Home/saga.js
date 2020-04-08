import { takeEvery } from 'redux-saga/effects';
import { TEST_SAGA_CALL } from './constants';

function* firstSagaCall() {
  console.log('saga called');
}

export default function* rootSaga() {
  yield takeEvery(TEST_SAGA_CALL, firstSagaCall);
}
