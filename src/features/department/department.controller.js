import { model } from './department.model.js';
import { services } from '../../services/index.js';

const index = async (req, res) => {
  const { data, meta } = await services.crud.index({ model, params: req.querymen });
  return services.response.send({ res, data, meta, message: 'the list of departments has been successfully retrieved' });
};

const show = async (req, res) => {
  const data = await services.crud.show({ model, value: req.params.id });
  if (!data) return services.response.send({ res, data, error: 'the department with the provided ID does not exist' });
  services.response.send({ res, data, message: 'department successfully retrieved' });
};

export const controller = {
  index,
  show,
};
