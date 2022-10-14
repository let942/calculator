
function insert(num) {
  let number = document.getElementById('display').innerHTML
  document.getElementById('display').innerHTML = number + num;
}

function clearScreem() {
  document.getElementById('display').innerHTML = "";
}

function clearNumber() {
  let number = document.getElementById('display').innerHTML
  document.getElementById('display').innerHTML = number.substring(0, number.length - 1)
}

function calculation() {
  let number = document.getElementById('display').innerHTML
  if (number) {
    document.getElementById('display').innerHTML = eval(number);
  }
}
