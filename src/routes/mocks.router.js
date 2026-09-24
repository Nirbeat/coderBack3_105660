import { Router } from 'express';
import { generateUser, generatePets, generateUsers } from '../mocks/mocking.module.js';
import { usersService, petsService } from '../services/index.js';
import compression from 'compression';

const router = Router();

router.get('/mockingpets', compression(), async (req, res) => {
  const { quantity } = req.query;
  const pets = generatePets(Number(quantity));
  res.send({ status: 'success', payload: pets });
});

router.get('/mockingusers', compression(), async (req, res) => {
  const { quantity } = req.query;
  const users = generateUsers(Number(quantity));
  res.send({ status: 'success', payload: users });
});

router.get('/mock-user', async (req, res) => {
  const user = generateUser();
  res.json({ status: 'success', user });
});

router.post('/generate-data', async (req, res) => {
  const { usersQuantity, petsQuantity } = req.body;

  // Validar la cantidad valida de usuarios y mascotas

  const generatedUsers = generateUsers(usersQuantity);
  const generatedPets = generatePets(petsQuantity);

  console.log('Generated Users:', generatedUsers);

  const createdUsers = await Promise.all(generatedUsers.map((user) => usersService.create(user)));
  const createdPets = await Promise.all(generatedPets.map((pet) => petsService.create(pet)));

  res.json({ status: 'success', users: createdUsers, pets: createdPets });
});

export default router;
