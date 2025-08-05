/*
Emily de França tem 18 anos, pesa 48kg
tem 1.6 de altura e seu IMC é de ...
Emily nasceu em 2006
*/
const nome = 'Emily';
const sobrenome = 'de França';
const idade = 18;
const peso = 48;
const altMetro = 1.65;
let imc; // p / (a * a)
let anoNascimento;

imc = peso / (altMetro * altMetro);
anoNascimento = 2025 - idade;

//template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}Kg.`);
console.log(`Tem ${altMetro} e seu IMC é: ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);