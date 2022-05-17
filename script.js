
function readInput(val, id) {
  const input = document.getElementById('i' + id)

  input.value = val
  document.getElementById('r' + id).value = val
}

function readRange(val, id) {
  const rng = document.getElementById('r' + id)
  rng.value = val
  document.getElementById('i' + id).value = val
}

document.querySelector('.close').onclick = () => {
  document.querySelector('.form-item-text').classList.add('click')
}


function getSelectid(id) {
  let selected = document.querySelector(`.select-box[data-id=${id}]`)
  let optionsContainer = selected.querySelector(".options-container")
  optionsContainer.classList.toggle("active");
  selected.querySelectorAll(".option").forEach(o => {
    o.onclick = () => {
      selected.querySelector('.selected').innerHTML = o.querySelector("label").innerHTML;

      optionsContainer.classList.remove(".active");
    };
  });
}


function animateValue(id, val) {
  var obj = document.getElementById(id);
  obj.innerHTML = val + " %";
}


function credit() {
  let value = document.getElementById('i1').value - document.getElementById('i2').value
  document.getElementById('credit').innerHTML = value
  return value
}
let id1 = ""
function monthPayment(id) {
  id1 = id
  let radio = document.getElementById(id)
  let percent = 18.6
  percent = radio.value

  let value = Math.round((credit() / 12) / 100 * percent)
  document.getElementById("month").innerHTML = value
}

function contribution(money) {
  let tallage = 20;
  let max = Math.round(money - (money / 100 * tallage))
  let min = Math.round(max / 100 * tallage)
  let length = "" + money.length
  min = "" + min
  max = "" + max
  document.getElementById('r2').max = max
  document.getElementById('r2').min = min

  if (document.getElementById('i1').value > document.getElementById('r2').value) {
    document.getElementById('i2').value = document.getElementById('r2').max
  }
  if (document.getElementById('i1').value < document.getElementById('r2').value) {
    document.getElementById('i2').value = document.getElementById('r2').min
  }

  if (length == 6) {

    min = min.slice(0, -3)
    max = max.slice(0, -3)

    document.getElementById('min').innerHTML = min + " тыс. ₽"
    document.getElementById('max').innerHTML = max + " тыс. ₽"


  }
  else if (length == 7) {
    min = min.slice(0, -4)
    max = max.slice(0, -4)

    document.getElementById('min').innerHTML = min + " тыс. ₽"
    document.getElementById('max').innerHTML = max + " тыс. ₽"
  }
  else if (length == 8) {
    min = min.slice(0, -6)
    max = max.slice(0, -6)

    document.getElementById('min').innerHTML = min + " млн. ₽"
    document.getElementById('max').innerHTML = max + " млн. ₽"
  }


  console.log(document.getElementById('r2').max)
}
function taxes() {
  let value = Math.round(credit() / 100 * 13)
  document.getElementById('taxes').innerHTML = value
}
function getValueI1() {
  return document.getElementById('i1').value
}

function getValueR1() {
  return document.getElementById('r1').value
}


document.getElementById('i1').onchange = () => {
  document.getElementById('credit').innerHTML = getValueI1()
  credit()
  contribution(getValueI1())
  taxes()
  monthPayment(id1)
}
document.getElementById('r1').onchange = () => {
  document.getElementById('credit').innerHTML = getValueR1()
  credit()
  contribution(getValueI1())
  taxes()
  monthPayment(id1)
}

document.getElementById('i2').onchange = () => {
  credit()
  taxes()
  monthPayment(id1)
}
document.getElementById('r2').onchange = () => {
  credit()
  taxes()
  monthPayment(id1)
}

window.onload = function () {
  credit()
  contribution(getValueI1())
  taxes()
  monthPayment("inputRadio1")
};