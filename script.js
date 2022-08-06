const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');
const button3 = document.getElementById('button-3');
const button4 = document.getElementById('button-4');
const button5 = document.getElementById('button-5');
const button6 = document.getElementById('button-6');
const button7 = document.getElementById('button-7');
const button8 = document.getElementById('button-8');
const button9 = document.getElementById('button-9');
const button0 = document.getElementById('button-0');
const sum = document.getElementById('+');
const subtraction = document.getElementById('-');
const multiplication = document.getElementById('*');
const division = document.getElementById('/');
const result = document.getElementById('=');
const visor = document.getElementById('visor');
const clear = document.getElementById('clear');
const password = document.getElementById('password');
let lastInput = 0;
let signal = null;
let accumulator = 0;

function writeNumber(event) {
  if (parseInt(visor.value) === 0) {
    visor.value = '';
  }
  const button = (event.target.value);
  visor.value += button;
}

function clearVisor() {
  visor.value = '';
  accumulator = 0;
}


function resultOperation(event) {
  const newInput = parseInt(visor.value);
  console.log(newInput);

  if (signal === '+') {
    visor.value = parseInt(lastInput) + newInput;

  } else if (signal === '-') {
    visor.value = parseInt(lastInput) - newInput;

  } else if (signal === '*') {
    visor.value = parseInt(lastInput) * newInput;
  } else if (signal === '/') {
    visor.value = parseInt(lastInput) / newInput;
  } else {
    visor.value = 0
  }
  console.log(lastInput)
  console.log(accumulator)

}
