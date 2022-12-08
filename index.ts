// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let mynumber1, mynumber2: number;

let mynumber3: number;

mynumber1 = 7;

mynumber2 = 14;

mynumber3 = mynumber1;

mynumber1 = mynumber2;

mynumber2 = mynumber3;

console.log('variable1', mynumber1);

console.log('variable2', mynumber2);

