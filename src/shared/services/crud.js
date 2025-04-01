import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const index = async ({ model, query = {}, search = [], filters = [] }) => {
  // params
  const page = parseInt(query.page) || 1;
  const take = parseInt(query.limit) || 10;
  const skip = (page - 1) * take;

  let orderBy = [];
  if (query.sort) {
    try {
      const parsed = JSON.parse(query.sort);
      if (Array.isArray(parsed)) orderBy = parsed;
    } catch (e) {}
  }

  let where = {};
  if (query.search && search.length > 0) {
    const searchTerm = query.search.trim();
    where.OR = search.map((field) => ({ [field]: { contains: searchTerm } }));
  }

  filters.forEach((field) => {
    let value = query[field];
    if (value !== undefined) {
      if (typeof value === 'string' && value.startsWith('[') && value.endsWith(']')) {
        try {
          value = JSON.parse(value);
        } catch (e) {}
      }
      where[field] = Array.isArray(value) ? { in: value } : value;
    }
  });

  // query
  const data = await prisma[model].findMany({ skip, take, orderBy, where });
  const total = await prisma[model].count({ where });

  // meta
  const meta = { pagination: { total, page, pages: Math.ceil(total / take) } };

  // response
  return { data, meta };
};

const show = async ({ model, target, keys = ['id'] } = {}) => {
  for (const key of keys) {
    try {
      const query = { where: { [key]: target } };
      const data = await prisma[model].findFirst(query);
      if (data) return data;
    } catch (error) {
      console.log(error);
      continue;
    }
  }

  return null;
};

export const crud = {
  index,
  show,
};
