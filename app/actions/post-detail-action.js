import { getPostById } from '../services/post-service';

const postActions = {
  PENDING: 'FETCH_POST_PENDING',
  FULFILLED: 'FETCH_POST_FULFILLED',
  REJECTED: 'FETCH_POST_REJECTED',
};

const fetchPostById = (postId => (dispatch) => {
  dispatch({ type: postActions.PENDING });

  getPostById(postId)
    .then(response => response.json())
    .then(responseJSON => dispatch({ type: postActions.FULFILLED, payload: responseJSON }))
    .catch(error => dispatch({ type: postActions.REJECTED, payload: error }));
});

export {
  postActions,
  fetchPostById,
};
