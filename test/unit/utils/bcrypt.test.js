import { expect } from 'chai';
import { createHash, passwordValidation } from '../../../src/utils/index.js';

describe('bcrypt utils', () => {
  let hashedPassword;
  const mockPassword = 'testPassword123';

  before(async () => {
    hashedPassword = await createHash(mockPassword);
  });

  describe('createHash()', () => {
    it('Deberia retornar un hash distinto de la password original', () => {
      expect(hashedPassword).to.be.a('string');
      expect(hashedPassword).to.not.equal(mockPassword);
    });

    it('Deberia usar un salt aleatorio: misma password, distinto hash', async () => {
      const otherHashedPassword = await createHash(mockPassword);
      expect(otherHashedPassword).to.not.equal(hashedPassword);
    });
  });

  describe('passwordValidation()', () => {
    it('Deberia retornar true para la password correcta', async () => {
      const isValid = await passwordValidation({ password: hashedPassword }, mockPassword);
      expect(isValid).to.be.true;
    });

    it('Deberia retornar false para una password incorrecta', async () => {
      const isValid = await passwordValidation({ password: hashedPassword }, 'wrongPassword');
      expect(isValid).to.be.false;
    });

    it('Deberia fallar si el hash fue alterado', async () => {
      const alteredHashedPassword =
        hashedPassword.slice(0, -1) + (hashedPassword.slice(-1) === 'a' ? 'b' : 'a');
      const isValid = await passwordValidation({ password: alteredHashedPassword }, mockPassword);
      expect(isValid).to.be.false;
    });
  });
});
