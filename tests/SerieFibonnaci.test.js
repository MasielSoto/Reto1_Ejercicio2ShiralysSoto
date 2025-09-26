const { generar_secuencia_fibonacci } = require("../src/Fibonacci");

describe('TDD - generar_secuencia_fibonacci', () => {
	test('n=1 => "0" (caso base RED)', () => {
		expect(generar_secuencia_fibonacci(1)).toBe('0');
	});

	test('n=2 => "01"', () => {
		expect(generar_secuencia_fibonacci(2)).toBe('01');
	});

	test('n=7 => "0112358"', () => {
		expect(generar_secuencia_fibonacci(7)).toBe('0112358');
	});

	test('n=0 => "" (cadena vacía)', () => {
		expect(generar_secuencia_fibonacci(0)).toBe('');
	});

	test('n negativo lanza error', () => {
		expect(() => generar_secuencia_fibonacci(-1)).toThrow();
	});

	test('n mayor a 50 lanza error', () => {
		expect(() => generar_secuencia_fibonacci(51)).toThrow();
	});

	test('n no entero lanza error', () => {
		expect(() => generar_secuencia_fibonacci(3.5)).toThrow();
	});
});
