
var animation2 = bodymovin.loadAnimation({
  container: document.getElementById('green'),
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: "../js/animate/bothgreen/bothgreen.json",
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
  autoplay: false,
  path: "/js/animate/proflie/proflie1.json",
})



$('#proflie').hover(
  ()=>{animation5.play()},
  ()=>{animation5.stop()}
)

var animation6 = bodymovin.loadAnimation({
  container: document.getElementById('bedroom'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: "/js/animate/bedroom/bedroom.json",
})

var animation7 = bodymovin.loadAnimation({
  container: document.getElementById('toilet'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: "/js/animate/toilet/toilet2.json",
})

var animation8 = bodymovin.loadAnimation({
  container: document.getElementById('kitchen'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: "/js/animate/kitchen/kitchen.json",
})

var animation9 = bodymovin.loadAnimation({
  container: document.getElementById('outdoor'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: "/js/animate/outdoor/outdoor.json",
})


var animation10 = bodymovin.loadAnimation({
  container: document.getElementById('door'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: "/js/animate/doorbr/door.json",
})

$('#door').hover(
  ()=>{animation10.play()},
  ()=>{animation10.stop()}
)

var animation11 = bodymovin.loadAnimation({
  container: document.getElementById('bed'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: "/js/animate/bedbr/bed.json",
})

$('#bed').hover(
  ()=>{animation11.play()},
  ()=>{animation11.stop()}
)

var animation12 = bodymovin.loadAnimation({
  container: document.getElementById('ferbr'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: "/js/animate/ferniturebr/fer.json",
})

$('#ferbr').hover(
  ()=>{animation12.play()},
  ()=>{animation12.stop()}
)

var animation13 = bodymovin.loadAnimation({
  container: document.getElementById('lamp'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: "/js/animate/lampbr/lamp.json",
})

$('#lamp').hover(
  ()=>{animation13.play()},
  ()=>{animation13.stop()}
)

var animation14 = bodymovin.loadAnimation({
  container: document.getElementById('zing'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: "/js/animate/zingtl/zing.json",
})

$('#zing').hover(
  ()=>{animation14.play()},
  ()=>{animation14.stop()}
)

var animation15 = bodymovin.loadAnimation({
  container: document.getElementById('wc'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: "/js/animate/wctl/wc.json",
})

$('#wc').hover(
  ()=>{animation15.play()},
  ()=>{animation15.stop()}
)

var animation16 = bodymovin.loadAnimation({
  container: document.getElementById('doortl'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: "/js/animate/doortl/doortl.json",
})

$('#doortl').hover(
  ()=>{animation16.play()},
  ()=>{animation16.stop()}
)


var animation17 = bodymovin.loadAnimation({
  container: document.getElementById('shower'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: "/js/animate/showertl/shower.json",
})

$('#shower').hover(
  ()=>{animation17.play()},
  ()=>{animation17.stop()}
)

var animation18 = bodymovin.loadAnimation({
  container: document.getElementById('floortl'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: "/js/animate/floortl/floortl.json",
})

$('#floortl').hover(
  ()=>{animation18.play()},
  ()=>{animation18.stop()}
)

var animation19 = bodymovin.loadAnimation({
  container: document.getElementById('zingkt'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: "/js/animate/zingkt/zingkt.json",
})

$('#zingkt').hover(
  ()=>{animation19.play()},
  ()=>{animation19.stop()}
)

var animation20 = bodymovin.loadAnimation({
  container: document.getElementById('ovenkt'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: "/js/animate/ovenkt/ovenkt.json",
})

$('#ovenkt').hover(
  ()=>{animation20.play()},
  ()=>{animation20.stop()}
)

var animation21 = bodymovin.loadAnimation({
  container: document.getElementById('winkt'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: "/js/animate/winkt/winkt.json",
})

$('#winkt').hover(
  ()=>{animation21.play()},
  ()=>{animation21.stop()}
)

var animation22 = bodymovin.loadAnimation({
  container: document.getElementById('ferkt'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: "/js/animate/ferkt/ferkt.json",
})

$('#ferkt').hover(
  ()=>{animation22.play()},
  ()=>{animation22.stop()}
)

var animation23 = bodymovin.loadAnimation({
  container: document.getElementById('house'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: "/js/animate/house/house.json",
})

$('#house').hover(
  ()=>{animation23.play()},
  ()=>{animation23.stop()}
)


var animation24 = bodymovin.loadAnimation({
  container: document.getElementById('stairos'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: "/js/animate/stairos/stairos.json",
})

$('#stairos').hover(
  ()=>{animation24.play()},
  ()=>{animation24.stop()}
)

var animation25 = bodymovin.loadAnimation({
  container: document.getElementById('flower'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: "/js/animate/flowerpot/flowerpot.json",
})

$('#flower').hover(
  ()=>{animation25.play()},
  ()=>{animation25.stop()}
)


var animation26 = bodymovin.loadAnimation({
  container: document.getElementById('flooros'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: "/js/animate/flooros/flooros.json",
})

$('#flooros').hover(
  ()=>{animation26.play()},
  ()=>{animation26.stop()}
)

var animation27 = bodymovin.loadAnimation({
  container: document.getElementById('rim'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: "/js/animate/rimos/rimos.json",
})

$('#rim').hover(
  ()=>{animation27.play()},
  ()=>{animation27.stop()}
)

var myModalToilet = document.getElementById('myModalToilet');

var btnSunToilet = document.getElementById('btnSunToilet');
var modalImg = document.getElementById("myimg01");

btnSunToilet.onclick = function(){
  myModalToilet.style.display = "block";
  modalImg.src = "image/toiletday.jpg";
  var mynavbardesktop = document.getElementById('mynavbardesktop')
  mynavbardesktop.style.display = "none";
  var mynavbarmobile = document.getElementById('mynavbarmobile')
  mynavbarmobile.style.display = "none";
}

var btnMoonToilet = document.getElementById('btnMoonToilet');

btnMoonToilet.onclick = function(){
  myModalToilet.style.display = "block";
  modalImg.src = "image/toiletnight.jpg";
  var mynavbardesktop = document.getElementById('mynavbardesktop')
  mynavbardesktop.style.display = "none";
  var mynavbarmobile = document.getElementById('mynavbarmobile')
  mynavbarmobile.style.display = "none";
}

var btnScaleToilet = document.getElementById('btnScaleToilet');

btnScaleToilet.onclick = function(){
  myModalToilet.style.display = "block";
  modalImg.src = "image/toiletscale.jpg";
  var mynavbardesktop = document.getElementById('mynavbardesktop')
  mynavbardesktop.style.display = "none";
  var mynavbarmobile = document.getElementById('mynavbarmobile')
  mynavbarmobile.style.display = "none";
}

// Get the <span> element that closes the modal
var spanCloseToilet = document.getElementById("spanCloseToilet");

// When the user clicks on <span> (x), close the modal
spanCloseToilet.onclick = function() { 
  var mynavbardesktop = document.getElementById('mynavbardesktop')
  mynavbardesktop.style.display = "inherit";
  myModalToilet.style.display = "none"  
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



