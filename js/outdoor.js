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
  modalImg.src = "image/outdoorscale.jpg";
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
