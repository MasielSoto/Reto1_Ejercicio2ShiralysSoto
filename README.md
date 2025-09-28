# Reto 1 - TDD: Secuencia Fibonacci

En este proyecto implemento la función `generar_secuencia_fibonacci(n)` y su suite de pruebas siguiendo la metodología TDD.

## Archivos relevantes
- src/Fibonacci.js — implementación de la función.
- tests/SerieFibonnaci.test.js — pruebas unitarias (Jest).
- package.json — scripts y dependencias.

## Descripción
La función devuelve los primeros `n` elementos de la sucesión de Fibonacci concatenados como una cadena. Ejemplo: `generar_secuencia_fibonacci(7)` → ` "0112358"`. Valida entradas: n debe ser entero, 0 ≤ n ≤ 50.

## Requisitos
- Node.js
- npm

## Instalación
Desde la carpeta del proyecto:
```powershell
npm install
```

## Ejecutar tests
```powershell
npm test
```

## Uso rápido
```js
const { generar_secuencia_fibonacci } = require('./src/Fibonacci');
console.log(generar_secuencia_fibonacci(7)); // "0112358"
```

## Notas
Los tests incluyen casos base (n=1, n=2), casos normales (n=7) y casos borde/validación (n=0, n<0, n>50, n no entero).
