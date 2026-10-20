import assert from 'node:assert';

// function suma(valorA, valorB) {
//   const resultado = valorA + valorB;
//   return resultado;
// }

const suma = (valorA, valorB) => valorA + valorB;

describe('Nivel 1 testing', () => {
  describe('Suma de numeros', () => {
    it('Deberia sumar 2 numeros', () => {
      assert.strictEqual(suma(2, 3), 5);
    });

    // == igualdad de valor / debil
    // === igualdad de valor y tipo / fuerte

    it('Deberia sumar numeros negativos', () => {
      assert.strictEqual(suma(-2, -3), -5);
    });

    // Plantear mal un test
    // it('Planteamiento incorrecto del test', () => {
    //   assert.equal(suma(2, 2), 10)
    // })

    // Test correcto pero de una funcionalidad que aun no existe
    // it('Deberia sumar 3 numeros', () => {
    //   assert.equal(suma(2, 3, 4), 9)
    // })
  });

  describe('strictEqual vs deepStrictEqual', () => {
    it('Dos objetos con el mismo contenido pero no la misma referencia', () => {
      const obj1 = { name: 'Firulais' };
      const obj2 = { name: 'Firulais' };
      assert.deepStrictEqual(obj1, obj2);

      const arr1 = [1, 2, 3];
      assert.strictEqual(arr1, arr1);
    });
  });
});
