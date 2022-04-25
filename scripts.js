let inp = ''
let tempInp = ''

let temp = document.getElementById('temp')
let display = document.getElementById('display')
function clearDis() {
  temp.textContent = '';
  display.textContent = '0';
  inp = '';
  
  tempInp = '';
}

function nine() {
  inp += 9
  tempInp += 9
  temp.textContent = tempInp
  display.textContent = tempInp
}
function eight() {
  inp += 8
  tempInp += 8
  temp.textContent = tempInp
  display.textContent = tempInp
}
function seven() {
  inp += 7
  tempInp += 7
  temp.textContent = tempInp
  display.textContent = tempInp
}
function six() {
  inp += 6
  tempInp += 6
  temp.textContent = tempInp
  display.textContent = tempInp
}
function five() {
  inp += 5
  tempInp += 5
  temp.textContent = tempInp
  display.textContent = tempInp
}
function four() {
  inp += 4
  tempInp += 4
  temp.textContent = tempInp
  display.textContent = tempInp
}
function three() {
  inp += 3
  tempInp += 3
  temp.textContent = tempInp
  display.textContent = tempInp
}
function two() {
  inp += 2
  tempInp += 2
  temp.textContent = tempInp
  display.textContent = tempInp
}
function one() {
  inp += 1
  tempInp += 1
  temp.textContent = tempInp
  display.textContent = tempInp
}
function zero() {
  if (tempInp !== '0') {
    inp += 0
    tempInp += 0
    temp.textContent = tempInp
    //display.textContent = inp
    display.textContent = tempInp
  }
}

function division() {
  if (tempInp.slice(-1) === '/' || tempInp.slice(-1) === '*' || tempInp.slice(-1) === '-' || tempInp.slice(-1) === '+') {
    tempInp = tempInp.slice(0,-1)
    tempInp += '/'
    temp.textContent = tempInp
  } else {
    tempInp += '/'
    temp.textContent = tempInp
  }
}
function multiply() {
  if (tempInp.slice(-1) === '/' || tempInp.slice(-1) === '*' || tempInp.slice(-1) === '-' || tempInp.slice(-1) === '+') {
    tempInp = tempInp.slice(0,-1)
    tempInp += '*'
    temp.textContent = tempInp
  } else {
    tempInp += '*'
    temp.textContent = tempInp
  }
}
function subtract() {
  tempInp += '-'
  temp.textContent = tempInp
}
function add() {
  if (tempInp.slice(-2) === '*-') {
    tempInp = tempInp.slice(0,-2)
    tempInp += '+'
    temp.textContent = tempInp
  } else if (tempInp.slice(-1) === '/' || tempInp.slice(-1) === '*' || tempInp.slice(-1) === '-' || tempInp.slice(-1) === '+') {
    tempInp = tempInp.slice(0,-1)
    tempInp += '+'
    temp.textContent = tempInp
  } else {
    tempInp += '+'
    temp.textContent = tempInp
  }
}

function equals() {
  display.textContent = eval(tempInp)
  //tempInp += "="
  temp.textContent = tempInp
  
  tempInp = eval(tempInp)
}

function decimal() {
  let splitted = tempInp.split(/[\+\-\/\*]/g)
  if (splitted[splitted.length-1].includes('.') === false) {
    tempInp += "."
    temp.textContent = tempInp
    
    display.textContent = tempInp
  }
}