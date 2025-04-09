const crypto = require('crypto');

/**
 * Genera una contraseña segura y aleatoria
 * @param {Object} options - Opciones de configuración
 * @param {number} [options.length=16] - Longitud de la contraseña
 * @param {boolean} [options.includeUppercase=true] - Incluir letras mayúsculas
 * @param {boolean} [options.includeLowercase=true] - Incluir letras minúsculas
 * @param {boolean} [options.includeNumbers=true] - Incluir números
 * @param {boolean} [options.includeSymbols=true] - Incluir símbolos
 * @returns {string} Contraseña generada
 */
function generatePassword(options = {}) {
  const {
    length = 16,
    includeUppercase = true,
    includeLowercase = true,
    includeNumbers = true,
    includeSymbols = true
  } = options;

  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  let chars = '';
  if (includeUppercase) chars += uppercase;
  if (includeLowercase) chars += lowercase;
  if (includeNumbers) chars += numbers;
  if (includeSymbols) chars += symbols;

  if (chars === '') {
    throw new Error('Debe incluir al menos un tipo de caracteres');
  }

  let password = '';
  const randomBytes = crypto.randomBytes(length);
  
  for (let i = 0; i < length; i++) {
    const randomIndex = randomBytes[i] % chars.length;
    password += chars[randomIndex];
  }

  return password;
}

module.exports = {
  generatePassword
}; 