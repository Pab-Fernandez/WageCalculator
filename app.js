//function horas trabajadas.
//const hourlyWage = 10;
//const hoursWorked = 40;
//const dolarfurro = 500;

// wage function

const billedTime = (wage, worked) => {
  return wage * worked;
};
console.log("Wage", billedTime(60, 10));
//a pesitos
const pesosWage = (wage, worked, dolar) => {
  return billedTime(wage, worked) * dolar;
};
console.log("Wage in pesos:", pesosWage(60, 10, 368));

//random AFIP
const randomZeroOrOne = () => {
  return Math.round(Math.random());
};
//let sliceAfip;
//if (randomZeroOrOne () === 0) {
//  sliceAfip = 5;
//} else {
//  sliceAfip = 7;
//}

const getRandomTax = () => {
  return randomZeroOrOne() == 0 ? 0.05 : 0.07;
};
console.log (getRandomTax())
// afip life

const taxAfip = () => {
  return pesosWage(60,10,368) * getRandomTax();
};

console.log(taxAfip());
//the taxing k

const taxedWageAgain = (wage, worked, dolar, tax) => {
  return pesosWage(60,10,368) * tax;
};

console.log("otro impuesto", taxedWageAgain(60, 10, 368, 0.035));
