'use strict';

var completeCatalog = [];
var totalCount = 25;

var currentImage1 = 'pic1';
var currentImage2 = 'pic2';
var currentImage3 = 'pic3';

function Item (name, filepath) {
  this.name = name;
  this.path = filepath;
  this.times = 0;
  this.totalClick = 0;
}

function initalize(){
  completeCatalog.push(new Item('bag', 'img/bag.jpg'));
  completeCatalog.push(new Item('banana', 'img/banana.jpg'));
  completeCatalog.push(new Item('bathroom', 'img/bathroom.jpg'));
  completeCatalog.push(new Item('boots', 'img/boots.jpg'));
  completeCatalog.push(new Item('breakfast', 'img/breakfast.jpg'));
  completeCatalog.push(new Item('bubblegum', 'img/bubblegum.jpg'));
  completeCatalog.push(new Item('chair', 'img/chair.jpg'));
  completeCatalog.push(new Item('cthulhu', 'img/cthulhu.jpg'));
  completeCatalog.push(new Item('dog-duck', 'img/dog-duck.jpg'));
  completeCatalog.push(new Item('dragon', 'img/dragon.jpg'));
  completeCatalog.push(new Item('pen', 'img/pen.jpg'));
  completeCatalog.push(new Item('pet-sweep', 'img/pet-sweep.jpg'));
  completeCatalog.push(new Item('sissors', 'img/sissors.jpg'));
  completeCatalog.push(new Item('shark', 'img/shark.jpg'));
  completeCatalog.push(new Item('shark', 'img/shark.jpg'));
  completeCatalog.push(new Item('sweep', 'img/sweep.png'));
  completeCatalog.push(new Item('tauntaun', 'img/tauntaun.jpg'));
  completeCatalog.push(new Item('unicorn', 'img/unicorn.jpg'));
  completeCatalog.push(new Item('usb', 'img/usb.gif'));
  completeCatalog.push(new Item('water-can', 'img/water-can.jpg'));
  completeCatalog.push(new Item('wine-glass', 'img/wine-glass.jpg'));
  console.log(completeCatalog);
}
initalize();

function handleClick (e){
  var target = e.target;
  if (totalCount > 0) {
    calculateScore (e.target.id);
    pickNewItems ();
  }
  else {
    displayResults();
  }
}
var img = document.getElementById(currentImage1);
img.addEventListener('click', handleClick);

function checkChoosenItem(inputArray, newItem){
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === newItem) {
      return false;
    }
  }
  return true;
}

function pickNewItems(){
  totalCount -= 1;
  var tempArray = [];
  for (var i = 0; i < 2; i++) {
    var picker = Math.floor(Math.random() * completeCatalog.length);
    if (checkChoosenItem(tempArray, completeCatalog[picker])) {
      tempArray.push(completeCatalog[picker]);
    }
    else {
      i -= 1;
    }
  }

  var pickOne = document.getElementById(currentImage1);
  pickOne.setAttribute('src', tempArray[0].path);
  pickOne.setAttribute('id', tempArray[0].path);
  pickOne.addEventListener('click', handleClick);
  currentImage1 = tempArray[0].path;

  var pickTwo = document.getElementById(currentImage2);
  pickTwo.setAttribute('src', tempArray[1].path);
  pickTwo.setAttribute('id', tempArray[1].path);
  pickTwo.addEventListener('click', handleClick);
  currentImage2 = tempArray[1].path;

  var pickThree = document.getElementById(currentImage3);
  pickThree.setAttribute('src', tempArray[2].path);
  pickThree.setAttribute('id', tempArray[2].path);
  pickThree.addEventListener('click', handleClick);
  currentImage3 = tempArray[2].path;
}

function calculateScore(inputID){
}

function displayResults(){
  var pickOne = document.getElementById(currentImage1);
  pickOne.remove();
  /*remove image elements from HTML */
  /* add display data */
}

displayResults();
