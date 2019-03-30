import { categoryActions } from '../actions/category-action';

const initialState = {
  data: [],
  error: null,
  requesting: false,
};
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case categoryActions.PENDING: {
      return { ...state, requesting: true };
    }
    case categoryActions.FULFILLED: {
      return { ...state, requesting: false, data: action.payload };
    }
    case categoryActions.REJECTED: {
      return { ...state, requesting: false, error: 'Terjadi kesalahan saat mengambil data kategori' };
    }
    default: {
      return state;
    }
  }
};

export default categoryReducer;
