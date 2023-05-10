//function horas trabajadas.
const hourlyWage = 10;
const hoursWorked = 40;
const dolarfurro = 468;

const billedTime = () => {
  return hourlyWage * hoursWorked;
};
console.log(billedTime());

//a pesitos
const makeThePesosHitTheFloor = () => {
  return billedTime () * dolarfurro;
};
console.log(makeThePesosHitTheFloor());

//random AFIP
const randomZeroOrOne = () => {
  return Math.round(Math.random());
}

let sliceAfip;
if (randomZeroOrOne () === 0) {
  sliceAfip = 5;
} else {
  sliceAfip = 7;
}

console.log (sliceAfip)
// afip life

const tax = (sliceAfip * 0.01)
const pesosLessAfip = () => {
    return makeThePesosHitTheFloor () - (makeThePesosHitTheFloor () * tax)
}

console.log (pesosLessAfip())
//the  taxing k
const toxicTax = 0.035
const pesosWithtax = () => {
    return makeThePesosHitTheFloor() - (makeThePesosHitTheFloor() * toxicTax)
}
console.log (pesosWithtax())