import { faker } from '@faker-js/faker';
import { createHash } from '../utils/index.js';

const PET_SPECIES = ['dog', 'cat', 'bird', 'fish', 'hamster'];

const generateUniqueEmail = (firstName, lastName) => {
  return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@mail.com`;
};

export const generateUser = () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    first_name: firstName,
    last_name: lastName,
    email: generateUniqueEmail(firstName, lastName),
    password: faker.internet.password(),
    role: faker.helpers.arrayElement(['user', 'admin']),
    pets: [],
  };
};

export const generatePet = () => {
  return {
    name: faker.person.firstName(),
    specie: faker.helpers.arrayElement(PET_SPECIES),
    birthDate: faker.date.past(),
    adopted: false,
  };
};

export const generatePets = (quantity) => {
  return Array.from({ length: quantity }, generatePet);
};

export const generateUsers = (quantity) => {
  return Array.from({ length: quantity }, generateUser);
};
