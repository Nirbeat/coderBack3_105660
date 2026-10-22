// import assert from 'node:assert';
import { expect, assert } from 'chai';
import UsersDAO from '../../../src/dao/Users.dao.js';

import { connectTestDb, clearTestDb, disconnectTestDb } from '../../helpers/db.js';

describe('Users DAO', () => {
  let usersDao;

  before(async () => {
    await connectTestDb();
    usersDao = new UsersDAO();
    await clearTestDb();
  });

  after(async () => disconnectTestDb());

  const mockUser = {
    first_name: 'Nico',
    last_name: 'Oriti',
    email: 'nico.oriti@example.com',
    password: 'securepassword123',
  };

  it('save() Deberia guardar un usuario', async () => {
    const userResult = await usersDao.save(mockUser);

    assert.ok(userResult._id);
    expect(userResult).to.have.property('_id');
  });

  it('get() deberia obtener todos los usuarios', async () => {
    const users = await usersDao.get();
    assert.ok(Array.isArray(users));
    expect(users).to.be.an('array');
    assert.ok(users.length > 0);
  });

  it('getBy() deberia obtener un usuario por su email', async () => {
    const user = await usersDao.getBy({ email: mockUser.email });
    assert.ok(user);
    expect(user).to.be.an('object');
    assert.strictEqual(user.email, mockUser.email);
    expect(user.email).to.equal(mockUser.email);
  });

  it('getBy() deberia retornar null si no encuentra un usuario', async () => {
    const user = await usersDao.getBy({ email: 'nonexistent@example.com' });
    assert.strictEqual(user, null);
  });

  it('save() deberia rechazar un usuario con email duplicado', async () => {
    let error;
    try {
      await usersDao.save(mockUser);
    } catch (err) {
      error = err;
    }

    assert.ok(error);
    expect(error.code).to.equal(11000);
  });
});
