import { postActions } from '../actions/post-detail-action';

const initialState = {
  data: { content: {}, slug: '' },
  error: null,
  requesting: false,
};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case postActions.PENDING: {
      return { ...state, requesting: true };
    }
    case postActions.FULFILLED: {
      return { ...state, requesting: false, data: action.payload };
    }
    case postActions.REJECTED: {
      return { ...state, requesting: false, error: 'Terjadi kesalahan saat mengambil data lagu' };
    }
    default: {
      return state;
    }
  }
};

export default postReducer;
