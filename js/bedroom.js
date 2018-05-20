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
  modalImg.src = "image/bedroomscale3.jpg";
  var mynavbardesktop = document.getElementById('mynavbardesktop')
  mynavbardesktop.style.display = "none";
  var mynavbarmobile = document.getElementById('mynavbarmobile')
  mynavbarmobile.style.display = "none";
}


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
