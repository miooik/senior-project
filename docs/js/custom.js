var animation = bodymovin.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: "/js/animate/shot/shot.json",
})

var animation2 = bodymovin.loadAnimation({
  container: document.getElementById('green'),
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: "/js/animate/bothgreen/bothgreen.json",
})


$('#green').hover(
  ()=>{animation2.play()},
  ()=>{animation2.stop()}
)

//BTN test day-night start

$('#bt1').click(()=>{
  if($('#bt1').attr('src')==='image/sun.png'){
    $('#pic-home').attr("src","image/02.png"); 
    $('#bt1').attr("src","image/moon.png");
  }else if($('#bt1').attr('src')==='image/moon.png'){
    $('#pic-home').attr("src","image/01.png"); 
    $('#bt1').attr("src","image/sun.png");
  }
  }
)

//BTN test day-night end


var animation3 = bodymovin.loadAnimation({
  container: document.getElementById('yellow'),
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: "/js/animate/bothyellow/yellow.json",
})

$('#yellow').hover(
  ()=>{animation3.play()},
  ()=>{animation3.stop()}
)

var animation4 = bodymovin.loadAnimation({
  container: document.getElementById('orange'),
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: "/js/animate/bothorange/bothorange.json",
})

$('#orange').hover(
  ()=>{animation4.play()},
  ()=>{animation4.stop()}
)

var animation5 = bodymovin.loadAnimation({
  container: document.getElementById('proflie'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: "/js/animate/proflie/proflie.json",
})


var animation6 = bodymovin.loadAnimation({
  container: document.getElementById('bedroom'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: "/js/animate/bedroom/bedroom.json",
})

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
  modalImg.src = "image/bedroomnight.jpg";
  var mynavbardesktop = document.getElementById('mynavbardesktop')
  mynavbardesktop.style.display = "none";
  var mynavbarmobile = document.getElementById('mynavbarmobile')
  mynavbarmobile.style.display = "none";
}

