import { postsActions } from '../actions/post-action';

const initialState = {
  data: [],
  error: null,
  requesting: false,
};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case postsActions.PENDING: {
      return { ...state, requesting: true };
    }
    case postsActions.FULFILLED: {
      return { ...state, requesting: false, data: action.payload };
    }
    case postsActions.REJECTED: {
      return { ...state, requesting: false, error: 'Terjadi kesalahan saat mengambil data lagu' };
    }
    default: {
      return state;
    }
  }
};

export default postReducer;
