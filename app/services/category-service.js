import * as base from '../utils/base-service';

const serviceUri = 'categories';
const queryString = '?page=1&per_page=50&exclude=1&fields=id,name';

const getCategories = () => base.get(`${serviceUri}${queryString}`);

export default getCategories;
