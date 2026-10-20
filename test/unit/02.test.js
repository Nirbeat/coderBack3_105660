import assert from 'node:assert';

describe('Nivel 2 testing - Ciclo de vida', () => {
  const calls = [];
  let cart;

  before(() => calls.push('before'));

  beforeEach(() => {
    calls.push('beforeEach');

    cart = [];
  });

  afterEach(() => calls.push('afterEach'));

  after(() => {
    assert.deepStrictEqual(calls, ['before', 'beforeEach', 'test 1', 'afterEach']);
  })

  it('test 1: Deberia agregar un item al carrito', () => {
    calls.push('test 1');
    cart.push('item 1');
    assert.strictEqual(cart.length, 1);
  })
});
