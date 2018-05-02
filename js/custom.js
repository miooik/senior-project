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