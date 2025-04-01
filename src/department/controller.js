import { services } from '../shared/services/index.js';

const index = async (req, res) => {
  const { data, meta } = await services.crud.index({ model: 'department', query: req.query, search: ['name'], filters: ['name'] });
  return services.response.send({ res, data, meta, message: 'the list of departments has been successfully retrieved' });
};

const show = async (req, res) => {
  const data = await services.crud.show({ model: 'department', target: req.params.id, keys: ['id', 'name'] });
  if (!data) return services.response.send({ res, data, error: 'the department with the provided ID does not exist' });
  return services.response.send({ res, data, message: 'department successfully retrieved' });
};

export const controller = {
  index,
  show,
};
