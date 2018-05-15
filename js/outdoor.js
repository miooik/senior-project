// Get the modal
var myModalOutdoor = document.getElementById('myModalOutdoor');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var btnSunOutdoor = document.getElementById('btnSunOutdoor');
var modalImg = document.getElementById("myimg01");

btnSunOutdoor.onclick = function(){
  myModalOutdoor.style.display = "block";
  modalImg.src = "image/outdoorday.jpg";
  var mynavbardesktop = document.getElementById('mynavbardesktop')
  mynavbardesktop.style.display = "none";
  var mynavbarmobile = document.getElementById('mynavbarmobile')
  mynavbarmobile.style.display = "none";
}

// Get the <span> element that closes the modal
var spanCloseOutdoor = document.getElementById("spanCloseOutdoor");

// When the user clicks on <span> (x), close the modal
spanCloseOutdoor.onclick = function() { 
  var mynavbardesktop = document.getElementById('mynavbardesktop')
  mynavbardesktop.style.display = "inherit";
  myModalOutdoor.style.display = "none"
}


var btnMoonOutdoor = document.getElementById('btnMoonOutdoor');

btnMoonOutdoor.onclick = function(){
  myModalOutdoor.style.display = "block";
  modalImg.src = "image/outdoornight.jpg";
  var mynavbardesktop = document.getElementById('mynavbardesktop')
  mynavbardesktop.style.display = "none";
  var mynavbarmobile = document.getElementById('mynavbarmobile')
  mynavbarmobile.style.display = "none";
}


var btnScaleOutdoor = document.getElementById('btnScaleOutdoor');

btnScaleOutdoor.onclick = function(){
  myModalOutdoor.style.display = "block";
  modalImg.src = "image/bedroomscale2.jpg";
  var mynavbardesktop = document.getElementById('mynavbardesktop')
  mynavbardesktop.style.display = "none";
  var mynavbarmobile = document.getElementById('mynavbarmobile')
  mynavbarmobile.style.display = "none";
}