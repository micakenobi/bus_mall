'use strict';

var completeCatalog = [];

// var currentImage1 =
// var currentImage2 =
// var currentImage3 =

function Item (name, filepath) {
  this.name = name;
  this.path = filepath;
  this.times = 0;
  this.totalClick = 0;
  completeCatalog.push(this.path);
}

var fs = require('fs');
var files = fs.readdirSync('/assets/img/');
