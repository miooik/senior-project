// Get the modal
var myModalBedRoom = document.getElementById('myModalBedRoom');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var btnSunBedRoom = document.getElementById('btnSunBedRoom');
var modalImg = document.getElementById("myimg01");

btnSunBedRoom.onclick = function(){
  myModalBedRoom.style.display = "block";
  modalImg.src = "image/bedroomday.jpg";
  var mynavbardesktop = document.getElementById('mynavbardesktop')
  mynavbardesktop.style.display = "none";
  var mynavbarmobile = document.getElementById('mynavbarmobile')
  mynavbarmobile.style.display = "none";
}

// Get the <span> element that closes the modal
var spanCloseBedRoom = document.getElementById("spanCloseBedRoom");

// When the user clicks on <span> (x), close the modal
spanCloseBedRoom.onclick = function() { 
  var mynavbardesktop = document.getElementById('mynavbardesktop')
  mynavbardesktop.style.display = "inherit";
  myModalBedRoom.style.display = "none"
}


var btnmoonBedRoom = document.getElementById('btnmoonBedRoom');

btnmoonBedRoom.onclick = function(){
  myModalBedRoom.style.display = "block";
  modalImg.src = "image/bedroomnight1.jpg";
  var mynavbardesktop = document.getElementById('mynavbardesktop')
  mynavbardesktop.style.display = "none";
  var mynavbarmobile = document.getElementById('mynavbarmobile')
  mynavbarmobile.style.display = "none";
}


var btnScaleBedRoom = document.getElementById('btnScaleBedRoom');

btnScaleBedRoom.onclick = function(){
  myModalBedRoom.style.display = "block";
  modalImg.src = "image/bedroomscale2.jpg";
  var mynavbardesktop = document.getElementById('mynavbardesktop')
  mynavbardesktop.style.display = "none";
  var mynavbarmobile = document.getElementById('mynavbarmobile')
  mynavbarmobile.style.display = "none";
}