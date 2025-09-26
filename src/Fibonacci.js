// Generador de secuencia Fibonacci como una única cadena.
// La función generar_secuencia_fibonacci(n) devuelve los primeros n elementos
// de la sucesión de Fibonacci concatenados como texto.
// Restricciones: n debe ser entero, 0 <= n <= 50.

function generar_secuencia_fibonacci(n) {
   if (!Number.isInteger(n) || n < 0 || n > 50) {
      throw new Error('n debe ser un entero entre 0 y 50');
   }

   if (n === 0) return '';

   let a = 0;
   let b = 1;
   let resultado = '';

   for (let i = 0; i < n; i++) {
      resultado += String(a);
      const siguiente = a + b;
      a = b;
      b = siguiente;
   }

   return resultado;
}

module.exports = { generar_secuencia_fibonacci };