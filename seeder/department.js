import mongoose from 'mongoose';
import { department } from '../src/features/department/index.js';
import { config } from '../config/index.js';

const data = [
  { name: 'Administración' },
  { name: 'Administración (service)' },
  { name: 'Almacén' },
  { name: 'Almacen (service)' },
  { name: 'Cad Cam' },
  { name: 'Casting' },
  { name: 'Centro de distribucion' },
  { name: 'Control de producción' },
  { name: 'Counter Sketch Design' },
  { name: 'Desarrollo humano' },
  { name: 'Diseño 3D' },
  { name: 'Electropulido' },
  { name: 'Engarce' },
  { name: 'Gerencia de calidad' },
  { name: 'Gerencia de producción' },
  { name: 'Informática' },
  { name: 'Joyería' },
  { name: 'Lavado' },
  { name: 'Mantenimiento' },
  { name: 'Platinado' },
  { name: 'Prepping' },
  { name: 'Pulido' },
  { name: 'Seguridad' },
  { name: 'Seguridad industrial' },
  { name: 'Tráfico' },
  { name: 'Ventas' },
  { name: 'Wax' },
];

export const department = async () => {
  await mongoose.connect(config.database.url);
  await department.model.deleteMany({});
  await department.model.insertMany(data);
  process.exit(0);
};
