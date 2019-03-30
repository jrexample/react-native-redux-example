import { NavigationActions } from 'react-navigation';
import getCategories from '../services/category-service';

const categoryActions = {
  PENDING: 'FETCH_CATEGORIES_PENDING',
  FULFILLED: 'FETCH_CATEGORIES_FULFILLED',
  REJECTED: 'FETCH_CATEGORIES_REJECTED',
};

const fetchCategories = () => (dispatch) => {
  dispatch({ type: categoryActions.PENDING });

  getCategories()
    .then(response => response.json())
    .then(responseJSON => dispatch({ type: categoryActions.FULFILLED, payload: responseJSON }))
    .catch(error => dispatch({ type: categoryActions.REJECTED, payload: error }));
};

const goToPost = (categoryId, categoryName) => (dispatch =>
  dispatch(NavigationActions.navigate({ routeName: 'Post', params: { categoryId, categoryName } }))
);

export {
  categoryActions,
  fetchCategories,
  goToPost,
};
