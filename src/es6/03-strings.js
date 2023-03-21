let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world + '!';
console.log(epicPhrase);

//concatenate space can cause confusion, not recommended if using a large string string

let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);

let lorem = 'esto es un string \n ' + 'esto es otra linea';
let lorem2 = `Esta es una frase epica
la continuacion de esa frase epica.
    `;

console.log(lorem);
console.log(lorem2);