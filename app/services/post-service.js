import * as base from '../utils/base-service';

const serviceUri = 'posts';
const queryString = '?posts?page=1&per_page=500&fields=id,title.rendered&orderby=title&order=asc&categories=';

const getPosts = (categoryId => base.get(`${serviceUri}${queryString}${categoryId}`));
const getPostById = (postId => base.get(`${serviceUri}/${postId}?fields=content,slug`));

export {
  getPosts,
  getPostById,
};
