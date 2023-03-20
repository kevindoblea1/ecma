let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world + '!';
console.log(epicPhrase);

//concatenate space can cause confusion, not recommended if using a large string string

let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);