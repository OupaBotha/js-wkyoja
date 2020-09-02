// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Procedural Programming
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

const getWage = (baseSalary, overtime, rate) => {
  return baseSalary + (overtime*rate)
}

// OOP

let employee = {
  baseSalary: 30_000,
  overtime: 10,
  rate: 20,
  getWage: function() {
    return this.baseSalary + (this.overtime * this.rate);
  }
};

employee.getWage();

console.log(employee.getWage())