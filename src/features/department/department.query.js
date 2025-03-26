import { helpers } from '../../helpers/index.js';

const index = helpers.query.index({
  search: ['name', 'description'],
  filters: ['index', 'name'],
});

export const query = {
  index,
};
