
function insert(num) {
  let number = document.getElementById('result').innerHTML
  document.getElementById('result').innerHTML = number + num;
}

function clearScreem() {
  document.getElementById('result').innerHTML = "";
}

function clearNumber() {
  let number = document.getElementById('result').innerHTML
  document.getElementById('result').innerHTML = number.substring(0, number.length - 1)
}

function calculation() {
  let number = document.getElementById('result').innerHTML
  if (number) {
    document.getElementById('result').innerHTML = eval(number);
  }
}
