const response = await fetch('http://127.0.0.1:3399');
const text = await response.text();

console.log(`got`, text);