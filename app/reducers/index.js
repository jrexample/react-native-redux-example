import { combineReducers } from 'redux';
import category from './category-reducer';
import nav from './nav-reducer';
import post from './post-reducer';
import postDetail from './post-detail-reducer';

export default combineReducers({
  category,
  nav,
  post,
  postDetail,
});
