import { TEST_SAGA_CALL } from './constants';

export const initialState = {
  loading: false,
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST_SAGA_CALL:
      return Object.assign({}, state, { loading: true });
      break;
    default: return state;
  }
};

export default HomeReducer;
