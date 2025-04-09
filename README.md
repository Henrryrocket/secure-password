# Secure Password Generator

Un generador de contraseñas seguras y aleatorias para Node.js que utiliza el módulo `crypto` para garantizar la aleatoriedad y seguridad de las contraseñas generadas.

## Instalación

```bash
npm install secure-password
```

## Uso

```javascript
const { generatePassword } = require("secure-password");

// Generar una contraseña con la configuración por defecto (16 caracteres)
const password = generatePassword();
console.log(password);

// Generar una contraseña personalizada
const customPassword = generatePassword({
  length: 20,
  includeUppercase: true,
  includeLowercase: true,
  includeNumbers: true,
  includeSymbols: true,
});
console.log(customPassword);
```

## Opciones

El generador de contraseñas acepta las siguientes opciones:

- `length` (number): Longitud de la contraseña (por defecto: 16)
- `includeUppercase` (boolean): Incluir letras mayúsculas (por defecto: true)
- `includeLowercase` (boolean): Incluir letras minúsculas (por defecto: true)
- `includeNumbers` (boolean): Incluir números (por defecto: true)
- `includeSymbols` (boolean): Incluir símbolos (por defecto: true)

## Características

- Utiliza el módulo `crypto` de Node.js para generar bytes aleatorios criptográficamente seguros
- Permite personalizar la longitud y los tipos de caracteres incluidos
- Incluye documentación JSDoc para mejor integración con IDEs
- No tiene dependencias externas

## Licencia

MIT
