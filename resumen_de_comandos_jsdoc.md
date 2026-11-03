# Guía Rápida de JSDoc: Etiquetas y Comandos Más Usuales

JSDoc es un estándar de facto para documentar código en JavaScript mediante comentarios estructurados. Esta guía recopila las etiquetas más utilizadas en el desarrollo diario para mejorar la legibilidad, facilitar el autocompletado en los editores y generar documentación automática.

---

## 1. Documentación Básica de Funciones y Métodos

### `@param`
Define los parámetros que recibe una función, especificando su tipo, nombre y una descripción opcional.

```javascript
/**
 * Suma dos números.
 * @param {number} a - El primer número.
 * @param {number} b - El segundo número.
 * @returns {number} El resultado de la suma.
 */
function sumar(a, b) {
  return a + b;
}
```

### `@returns` (o `@return`)
Indica el tipo de dato y el valor que retorna una función.

```javascript
/**
 * @returns {boolean} Retorna true si es mayor de edad.
 */
function esMayorDeEdad(edad) {
  return edad >= 18;
}
```

---

## 2. Definición de Tipos y Objetos Complejos

### `@typedef` y `@property`
Permiten definir tipos de datos personalizados o la estructura de un objeto complejo para reutilizarlos en los parámetros.

```javascript
/**
 * @typedef {Object} Usuario
 * @property {number} id - Identificador único.
 * @property {string} nombre - Nombre del usuario.
 * @property {string} [email] - Correo electrónico opcional.
 */

/**
 * Registra un nuevo usuario en el sistema.
 * @param {Usuario} usuario - Objeto con los datos del usuario.
 */
function registrarUsuario(usuario) {
  // Lógica de registro
}
```

---

## 3. Clases y Programación Orientada a Objetos

### `@class` (o `@constructor`)
Indica que una función actúa como una clase constructora.

### `@extends`
Indica la herencia entre clases.

### `@private` y `@public`
Definen la visibilidad de los métodos o propiedades de una clase.

```javascript
/**
 * Representa un animal genérico.
 * @class
 */
class Animal {
  /**
   * Crea un animal.
   * @param {string} nombre - Nombre del animal.
   */
  constructor(nombre) {
    /** @private */
    this.nombre = nombre;
  }

  /**
   * Emite un sonido.
   * @public
   */
   hacerSonido() {
     return "Sonido genérico";
   }
}
```

---

## 4. Control de Versiones, Estados y Metadatos

### `@deprecated`
Marca una función, clase o propiedad como obsoleta, advirtiendo que será eliminada en futuras versiones.

### `@author`
Especifica el autor del bloque de código.

### `@version`
Indica la versión actual del módulo, función o clase.

```javascript
/**
 * Calcula el impuesto (Obsoleto).
 * @deprecated Utilizar `calcularImpuestoModerno` en su lugar.
 * @author Juan Pérez
 * @version 1.0.0
 */
function calcularImpuestoViejo(monto) {
  return monto * 0.21;
}
```

---

## 5. Ejemplos de Uso

### `@example`
Proporciona un ejemplo práctico de cómo utilizar la función o clase documentada.

```javascript
/**
 * Multiplica un número por dos.
 * @param {number} x - Número a multiplicar.
 * @returns {number} El doble del número.
 * @example
 * // Retorna 10
 * duplicar(5);
 */
function duplicar(x) {
  return x * 2;
}
```