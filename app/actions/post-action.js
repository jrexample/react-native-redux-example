import { NavigationActions } from 'react-navigation';
import { getPosts } from '../services/post-service';

const postsActions = {
  PENDING: 'FETCH_POSTS_PENDING',
  FULFILLED: 'FETCH_POSTS_FULFILLED',
  REJECTED: 'FETCH_POSTS_REJECTED',
};

const fetchPosts = (categoryId => (dispatch) => {
  dispatch({ type: postsActions.PENDING });

  getPosts(categoryId)
    .then(response => response.json())
    .then(responseJSON => dispatch({ type: postsActions.FULFILLED, payload: responseJSON }))
    .catch(error => dispatch({ type: postsActions.REJECTED, payload: error }));
});

const goToPostDetail = (postId, postTitle) => (dispatch =>
  dispatch(NavigationActions.navigate({ routeName: 'PostDetail', params: { postId, postTitle } }))
);


export {
  postsActions,
  fetchPosts,
  goToPostDetail,
};
