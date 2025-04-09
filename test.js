import { generatePassword } from './index.js';

// Prueba 1: Contraseña por defecto
console.log('Prueba 1 - Contraseña por defecto:');
console.log(generatePassword());
console.log('--------------------------------');

// Prueba 2: Contraseña personalizada
console.log('Prueba 2 - Contraseña personalizada:');
console.log(generatePassword({
  length: 20,
  includeUppercase: true,
  includeLowercase: true,
  includeNumbers: true,
  includeSymbols: true
}));
console.log('--------------------------------');

// Prueba 3: Solo números
console.log('Prueba 3 - Solo números:');
console.log(generatePassword({
  length: 10,
  includeUppercase: false,
  includeLowercase: false,
  includeNumbers: true,
  includeSymbols: false
}));
console.log('--------------------------------');

// Prueba 4: Solo letras
console.log('Prueba 4 - Solo letras:');
console.log(generatePassword({
  length: 15,
  includeUppercase: true,
  includeLowercase: true,
  includeNumbers: false,
  includeSymbols: false
})); 