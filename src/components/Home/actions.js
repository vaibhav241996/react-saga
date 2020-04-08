import { TEST_SAGA_CALL } from './constants';

export function sagaCall() {
  console.log('action called');
  return {
    type: TEST_SAGA_CALL,
  };
}