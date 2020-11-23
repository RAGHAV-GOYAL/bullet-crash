var bullet,wall;
var speed,weight,rating;
var deformation;
var state="play";

function setup() {
  createCanvas(1600,400);

  wall = createSprite(1500,200,40,height/2);
  wall.shapeColor=color("cyan");

  bullet = createSprite(50,200,50,20);
}

function draw() {
  background("black");  

  if(state==="play") {
    textSize(20);
    fill("yellow");

    text("Press SPACE to serve.",600,50);

    if(keyDown("space")) {
      state="fast";
    }
  }

  if(state==="fast") {
    weight = Math.round(random(400,2500));
    speed = Math.round(random(55,70));
    bullet.velocityX = speed;

  if(wall.x-bullet.x<wall.width/2+bullet.width/2) {
    bullet.velocityX=0;
    deformation = Math.round(0.5*weight*speed*speed/23550);
     
    if(deformation>=180) {
    bullet.shapeColor=color(255,0,0);
    rating="blasted";
    }

    if(deformation<180 && deformation>=80) {
      bullet.shapeColor=color(230,230,0);
      rating="destroyed";
    }

    if(deformation<80) {
      bullet.shapeColor=color(0,255,0);
      rating="small accident";
    }

    state="end";
  }
}

  if(state==="end") {

    if(deformation>=180) {
      fill(255,0,0);
    }

    if(deformation<180 && deformation>=80) {
      fill(230,230,0);
    }

    if(deformation<80) {
      fill(0,255,0);
    }

    textSize(25);
    text("Speed: "+speed+"km/h",200,50);
    text("Weight: "+weight+"kg",400,50);
    text("Deformation: "+deformation,600,50);

    textSize(30);
    text("Rating: "+rating,800,50);

    text("Press 'R' to reset",1050,50);
    if(keyDown("r")) {
      reset();
    }
  }

  drawSprites();
}


function reset() {
  state="play";
  bullet.x=50;
  bullet.shapeColor=color(127,127,127);

}
