import { expect } from 'chai';
import supertest from 'supertest';

import { connectTestDb, clearTestDb, disconnectTestDb } from '../../helpers/db.js';
import { baseUrl } from '../../helpers/server.js';

const requester = supertest(baseUrl);

describe('Pets Router', () => {
  before(() => connectTestDb());

  beforeEach(() => clearTestDb());

  after(() => disconnectTestDb());

  const petMock = {
    name: 'Fido',
    specie: 'dog',
    birthDate: '2020-01-01',
  };

  describe('POST /api/pets', () => {
    it('Deberia crear una mascota y devolverla en el payload', async () => {
      const response = await requester.post('/api/pets').send(petMock);

      expect(response.statusCode).to.equal(200);
      expect(response.ok).to.be.true;
      expect(response.body.status).to.equal('success');
      expect(response.body.payload).to.have.property('_id');
    });

    it('Deberia crear la mascota con adopted: false', async () => {
      const response = await requester.post('/api/pets').send({ ...petMock, adopted: true });

      expect(response.body.payload).to.have.property('adopted');
      expect(response.body.payload.adopted).to.be.false;
    });

    it('Deberia responder 400 si faltan campos obligatorios', async () => {
      const { statusCode, body } = await requester.post('/api/pets').send({ name: 'Fido' });

      expect(statusCode).to.equal(400);
      expect(body.status).to.equal('error');
      expect(body.error).to.equal('Incomplete values');
    });
  });
});
