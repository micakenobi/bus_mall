'use strict';

var completeCatalog = [];
var totalCount = 25;

var currentImage1 = 'pic1';
var currentImage2 = 'pic2';
var currentImage3 = 'pic3';

//creating an Item object with the parameters (name, filepath ) and properties (lines 12-15), keys(.name, .path, .times, .totalClick), values(name, filepath, 0, 0). This object is wrapping bag.jpg with additional specs.

//example: bag.jpg is a chocolate chip. I can use my object to wrap the chocochip and make other kinds of cookies. Rasin cookies, M&M cookies. I can also change the cookie's size, sugar content, butter content using properities.
//line13-19 I'm making my cookie cutter to use
function Item (name, filepath) {
  this.name = name;
  this.path = filepath;
  this.times = 0;
  this.totalClick = 0;
}

//This uses the Object to create new Item Instance (creating an instance with a name and filepath). It then pushes the new Instance into the array called completeCatalog
//lines24-43 I'm making individual cookies
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
  completeCatalog.push(new Item('scissors', 'img/scissors.jpg'));
  completeCatalog.push(new Item('shark', 'img/shark.jpg'));
  completeCatalog.push(new Item('sweep', 'img/sweep.png'));
  completeCatalog.push(new Item('tauntaun', 'img/tauntaun.jpg'));
  completeCatalog.push(new Item('unicorn', 'img/unicorn.jpg'));
  completeCatalog.push(new Item('usb', 'img/usb.gif'));
  completeCatalog.push(new Item('water-can', 'img/water-can.jpg'));
  completeCatalog.push(new Item('wine-glass', 'img/wine-glass.jpg'));
  pickNewItems();
}
initalize();

function checkChoosenItem(inputArray, newItem){
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === newItem) {
      return false;
    }
  }
  return true;
}
//Now I need to randomly pick three (non-repeating) cookies from the 20 cookies that I made. Then I need to display those three cookies onto my HTML. I need to be able to count(incriemnt) how many times each cookie was show during the game and how many times each cookie was clicked on.

function pickNewItems(){
  totalCount -= 1; //this subtract 1 from the totalCount (which starts at 25)
  var tempArray = []; //this is going to hold my three cookies
  for (var i = 0; i < 3; i++) { //this for loop is going to run 3 times
    var picker = Math.floor(Math.random() * completeCatalog.length); // Math.floor(.99999999*20) = Math.floor(19.999)=19= think INDEX 19 = spot 20 in array = wine-glass in this case. So picker=19
    if (checkChoosenItem(tempArray, completeCatalog[picker])) { //
      tempArray.push(completeCatalog[picker]); //looks in the completeCatalog array at index 19 and pushes that wine-glass instance into the tempArray (remember the tempArray will hold 3 instances)
      completeCatalog[picker].times += 1; //this says, hey! tick that the wine-glass instance has been shown on HTML!
    }
    else {
      i -= 1; //if the index item has already been placed into the currect tempArray then subtract 1 from the i and try again! becuase you only get to put three instances in the array...so put the i loop back a number to use be able to run the for loop again.
      //but how does the function pickNewItems know if the instance is a new instance or if it already lives in the array? Look. the pickNewItem function USES the checkChoosenItem function (see above) to make sure the item is not repeated. If the item IS REPEATED the for loop will run the else {}. If the instance is NEW to the tempArray then it will use the IF portion of the FOR loop to push the instance into the tempArray. Now let's go analyze that checkChoosenItem function.

      //Analyzing the checkChoosenItem function: 1. understand the arguments (tempArray, completeCatalog[picker] in the IF statement are being PASSED into the parameters (inputArray, newItem). So, inputArray is now tempArray. newItem is now completeCatalog[picker]. so what's this function going to do with these arguments? The function runs a for loop to check if the [i] (0,1,2 depending on where you are at in the for loop..) in that "tempArray" is === to the [picker] " random instance". Example: IF that item in the tempArray[0]= wine-glass === new picked element wine-glass... reurn false. Meaning if FALSE is returned.. then the IF statement is false and we run the ELSE statement. However, (new example) if wine-glass === bag
    }
  }

  var pickOne = document.getElementById(currentImage1);
  pickOne.setAttribute('src', tempArray[0].path);
  pickOne.setAttribute('id', tempArray[0].name);
  pickOne.addEventListener('click', handleClick);
  currentImage1 = tempArray[0].name;

  var pickTwo = document.getElementById(currentImage2);
  pickTwo.setAttribute('src', tempArray[1].path);
  pickTwo.setAttribute('id', tempArray[1].name);
  pickTwo.addEventListener('click', handleClick);
  currentImage2 = tempArray[1].name;

  var pickThree = document.getElementById(currentImage3);
  pickThree.setAttribute('src', tempArray[2].path);
  pickThree.setAttribute('id', tempArray[2].name);
  pickThree.addEventListener('click', handleClick);
  currentImage3 = tempArray[2].name;
}

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

function calculateScore(inputID){
  for (var i = 0; i < completeCatalog.length; i++) {
    if (completeCatalog[i].name === inputID) {
      completeCatalog[i].totalClick += 1;
    }
  }
}

var parent = document.getElementById('parentId');

function displayResults(){
  var pickOne = document.getElementById(currentImage1);
  parent.removeChild(pickOne);
  var pickTwo = document.getElementById(currentImage2);
  parent.removeChild(pickTwo);
  var pickThree = document.getElementById(currentImage3);
  parent.removeChild(pickThree);

  runAfterDataGenerated();
}

function returnsNumberOfClicksForEachObject(){
  var ArrayOfNumberOfClicksPerItem = [];
  for (var i = 0; i < completeCatalog.length; i++) {
    ArrayOfNumberOfClicksPerItem.push(completeCatalog[i].totalClick);
  }
  return ArrayOfNumberOfClicksPerItem;
}

function runAfterDataGenerated (){
  var canvas = document.getElementById('myChart');
  var ctx = canvas.getContext('2d');

  var data = {
    labels: ['Bag','Banana','Bathroom','Boots','Breakfast','Bubblegum','Chair','Cthulhu','Dog-Duck','Dragon','Pen','Pet-sweep','Scissors','Shark','Sweep','Tautaun','Unicorn','USB','Water-can','Wine glass'],
    datasets:[{
      label: 'Number of times this object was clicked',
      data: returnsNumberOfClicksForEachObject(),
      backgroundColor: 'black',
    }]
  };

  var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      title: {
        display: true,
        text: 'Results of the Image Selections',
        fontSize: 20,
      }
    }
  });
}
