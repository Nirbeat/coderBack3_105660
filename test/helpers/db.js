import mongoose from 'mongoose';
import { environment } from '../../src/config/config.js';

const assertIsTestDatabase = async () => {
  const dbName = mongoose.connection.name;
  if (!dbName.includes('test')) {
    await mongoose.disconnect();
    throw new Error(`Error al conectar porque la db no es de test, ${dbName}`);
  }
};

export const connectTestDb = async () => {
  if (!environment.MONGO_URI) {
    throw new Error('MONGO_URI no está definido en el entorno de test');
  }
  await mongoose.connect(environment.MONGO_URI);
  await assertIsTestDatabase();
};

export const clearTestDb = async () => {
  const collections = Object.values(mongoose.connection.collections);
  console.log(
    'Clearing test database...',
    collections.map((c) => c.name),
  );
  for (const collection of collections) {
    console.log(`Clearing collection: ${collection.name}`);
    await collection.deleteMany({});
  }
};

export const disconnectTestDb = () => mongoose.disconnect();
