// Get the modal
var myModalKitchen = document.getElementById('myModalKitchen');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var btnSunKitchen = document.getElementById('btnSunKitchen');
var modalImg = document.getElementById("myimg01");

btnSunKitchen.onclick = function(){
  myModalKitchen.style.display = "block";
  modalImg.src = "image/kitchenday.jpg";
  var mynavbardesktop = document.getElementById('mynavbardesktop')
  mynavbardesktop.style.display = "none";
  var mynavbarmobile = document.getElementById('mynavbarmobile')
  mynavbarmobile.style.display = "none";
}

// Get the <span> element that closes the modal
var spanCloseKitchen = document.getElementById("spanCloseKitchen");

// When the user clicks on <span> (x), close the modal
spanCloseKitchen.onclick = function() { 
  var mynavbardesktop = document.getElementById('mynavbardesktop')
  mynavbardesktop.style.display = "inherit";
  myModalKitchen.style.display = "none"
}


var btnMoonKitchen = document.getElementById('btnMoonKitchen');

btnMoonKitchen.onclick = function(){
  myModalKitchen.style.display = "block";
  modalImg.src = "image/kitchennight.jpg";
  var mynavbardesktop = document.getElementById('mynavbardesktop')
  mynavbardesktop.style.display = "none";
  var mynavbarmobile = document.getElementById('mynavbarmobile')
  mynavbarmobile.style.display = "none";
}


var btnScaleKitchen = document.getElementById('btnScaleKitchen');

btnScaleKitchen.onclick = function(){
  myModalKitchen.style.display = "block";
  modalImg.src = "image/bedroomscale2.jpg";
  var mynavbardesktop = document.getElementById('mynavbardesktop')
  mynavbardesktop.style.display = "none";
  var mynavbarmobile = document.getElementById('mynavbarmobile')
  mynavbarmobile.style.display = "none";
}