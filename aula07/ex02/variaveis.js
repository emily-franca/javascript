let varA = 'A'; //b
let varB = 'B'; //c
let varC = 'C'; //a
const tempA = varA;
varA = varB;
varB = varC;
varC = tempA;

/*VETORES
[varA, varB, varC] = [varB, varC, varA]
*/

console.log(varA, varB, varC);