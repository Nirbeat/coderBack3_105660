import { faker } from '@faker-js/faker';

const PET_SPECIES = ['dog', 'cat', 'bird', 'fish', 'hamster'];

let emailSequence = 0;

const generateUniqueEmail = (firstName, lastName) => {
  emailSequence += 1;
  return `${firstName.toLowerCase()}.${lastName.toLowerCase()}${emailSequence}@mail.com`;
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
