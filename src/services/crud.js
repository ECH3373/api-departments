import { constrainedMemory } from 'process';

const index = async ({ model, params = {} }) => {
  const data = await model.find(params.query).limit(params.cursor.limit).skip(params.cursor.skip).sort(params.cursor.sort);
  const total = await model.countDocuments(params.query);
  const meta = { pagination: { page: 1, pages: Math.ceil(total / params.cursor.limit), total } };
  return { data, meta };
};

const show = async ({ model, value, fields = ['_id', 'index'] } = {}) => {
  const data = await model.findById(id);
  return data;
};

export const crud = {
  index,
  show,
};
