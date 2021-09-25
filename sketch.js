var bg,snowimg
var snow = []
var maxsnow = 150
function preload(){
bg = loadImage("snow2.jpg")
snowimg = loadImage("snow5.webp")
}
function setup() {
  createCanvas(800,400);
  for(var i=0;i<maxsnow;i++){
  snow.push(createSprite(random(9,800), 10, 50, 50))
  snow
  }
}

function draw() {
  background(bg);  
  drawSprites();
}
