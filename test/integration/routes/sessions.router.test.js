import { expect } from 'chai';
import supertest from 'supertest';

import UsersDAO from '../../../src/dao/Users.dao.js';
import { passwordValidation } from '../../../src/utils/index.js';

import { baseUrl } from '../../helpers/server.js';
import { connectTestDb, clearTestDb, disconnectTestDb } from '../../helpers/db.js';

const requester = supertest(baseUrl);

const parseCookie = (setCookieHeader) => {
  console.log(setCookieHeader);
  const [nameAndValue] = setCookieHeader.split(';');
  const [name, value] = nameAndValue.split('=');
  return { name, value };
};

describe('Sessions router', () => {
  const usersDao = new UsersDAO();

  const mockUser = {
    first_name: 'Linus',
    last_name: 'Torvalds',
    email: 'linus@mail.com',
    password: '123',
  };

  before(async () => {
    await connectTestDb();
    await clearTestDb();
  });

  after(() => disconnectTestDb());

  describe('Flujo registro -> login -> current', () => {
    let cookie;

    it('POST /register deberia registrar el usuario y devolver su id', async () => {
      const response = await requester.post('/api/sessions/register').send(mockUser);

      // console.log(response)
      console.log(response.statusCode, response.body);

      expect(response.statusCode).to.equal(200);
      expect(response.body.payload).to.be.a('string');
    });
  });
});
