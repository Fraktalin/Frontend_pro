let cabinetLengthInput = document.querySelector('#cabinet_length');
let cabinetHeightInput = document.querySelector('#cabinet_height');
let cabinetWidthInput = document.querySelector('#cabinet_width');
let rangeVerticalInput = document.querySelector('#cabinet_vertical_shelf');
let rangeHorizontalInput = document.querySelector('#cabinet_horizontal_shelf');
let pasteVertical = document.querySelector('#amount_vertical');
let pasteHorizontal = document.querySelector('#amount_horizontal');
let furnitureInput = document.querySelector('#cabinet_furniture');
let radioInputs = document.getElementsByName('material');
let checkDelivery = document.querySelector('#cabinet_delivery');
let checkInstalation = document.querySelector('#cabinet_installation');
let checkLifting = document.querySelector('#cabinet_lifting');
let selectCity = document.querySelector('#user_city');
let total = document.querySelector('#total');


selectCity.addEventListener('change', selectingCity)

checkDelivery.addEventListener('change', checkingBox.bind(null, checkDelivery))
checkInstalation.addEventListener('change', checkingBox.bind(null, checkInstalation))
checkLifting.addEventListener('change', checkingBox.bind(null, checkLifting))

rangeVerticalInput.addEventListener('input', showRange)
rangeHorizontalInput.addEventListener('input', showRange)
furnitureInput.addEventListener('input', setVariables)

let verticalValue = 6
let horizontalValue = 6
let costShelf = 600
function showRange(e) {
  verticalValue = rangeVerticalInput.value
  horizontalValue = rangeHorizontalInput.value
  pasteVertical.innerText = verticalValue
  pasteHorizontal.innerText = horizontalValue
  costShelf = (verticalValue * horizontalValue) * 50
  showSum()
}

cabinetLengthInput.addEventListener('keypress', checkNum);
cabinetHeightInput.addEventListener('keypress', checkNum);
cabinetWidthInput.addEventListener('keypress', checkNum);
cabinetLengthInput.addEventListener('input', setSum);
cabinetHeightInput.addEventListener('input', setSum);
cabinetWidthInput.addEventListener('input', setSum);


let volume = 0
function checkNum(e) {
  if (e.keyCode < 48 || e.keyCode > 57) {
    e.preventDefault();
  }
}
function setSum (e){
  let cabinetLength = cabinetLengthInput.value
  let cabinetHeight = cabinetHeightInput.value
  let cabinetWidth = cabinetWidthInput.value
  if (cabinetLength > 4000 || cabinetHeight > 3000 || cabinetWidth > 1000) {
  }
  else volume = (cabinetLength * cabinetHeight * cabinetWidth) / 200
  showSum()
}

let resultFurniture=0;
function setVariables(e) {
  let furniture = furnitureInput.value;
  switch (furniture) {
    case 'cabinet_furniture_handles':
      resultFurniture = (verticalValue * horizontalValue) * 25
      break
    case 'cabinet_furniture_hole':
      resultFurniture = (verticalValue * horizontalValue) * 20
      break
    case 'cabinet_furniture_combined':
      resultFurniture = (verticalValue * horizontalValue) * 30
      break
    default: resultFurniture = 0
  }
  showSum()
}

function selectListener() {
  for (let i = 0; i < radioInputs.length; i++) {
    if (radioInputs[i]) {
      radioInputs[i].addEventListener('change', selectMaterial)
    }
  }
}
selectListener()

let costMaterial = 20
function selectMaterial(e) {
  switch (this.id) {
    case 'cabinet_material_wood':
      costMaterial = 20
      break
    case 'cabinet_material_glass':
      costMaterial = 120
      break
    case 'cabinet_material_mirror':
      costMaterial = 200
  }
  showSum()
}
let sumService = 0
function checkingBox(checkBox, e) {
  switch (checkBox) {
    case checkDelivery:
      checkBox.checked === true ? sumService += 300 : sumService -= 300
      break
    case checkInstalation:
      checkBox.checked === true ? sumService += 200 : sumService -= 200
      break
    case checkLifting:
      checkBox.checked === true ? sumService += 100 : sumService -= 100
      break
    default: sumService = 0
  }
  showSum()
}
let costCity = 0
function selectingCity(e) {
  let currentCity = selectCity.value
  switch (currentCity) {
    case 'Dnipro':
      costCity = 100
      break
    case 'Kiev':
      costCity = 130
      break
    case 'Kharkov':
      costCity = 100
      break
    case 'Odessa':
      costCity = 120
      break
    case 'Lviv':
      costCity = 90
      break
    default: costCity = 140
  }
  showSum()
}

function showSum() {
  let sum
  if (volume===0){
    sum = 'Введите все размеры'
  }
  else {
    sum = volume + costShelf + costMaterial + sumService + costCity + resultFurniture
  }
  total.innerText = sum
}