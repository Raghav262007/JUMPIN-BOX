var canvas;
var music;
var ball;
var wall;
var wall2;
var wall3;
var wall4;
var edges;

function preload() {
  music = loadSound("music.mp3");
}

function setup() {
  canvas = createCanvas(800, 600);

  //create 4 different surfaces
  wall = createSprite(105, 580, 180, 30);
  wall.shapeColor = "red";

  wall2 = createSprite(300, 580, 180, 30);
  wall2.shapeColor = "orange";

  wall3 = createSprite(495, 580, 180, 30);
  wall3.shapeColor = "green";

  wall4 = createSprite(695, 580, 180, 30);
  wall4.shapeColor = "purple";

  //create box sprite and give velocity

  ball = createSprite(Math.round(random(20, 750)), 30, 30, 30);
  ball.shapeColor = "white";
  ball.velocityY = 5;
  ball.velocityX = -2;
}

function draw() {
  background(rgb(169, 169, 169));
  //create edgeSprite

  edges = createEdgeSprites();
  ball.bounceOff(edges);

  if (wall.isTouching(ball) && ball.bounceOff(wall)) {
    ball.shapeColor = wall.shapeColor;
    music.play();
  } else if (wall2.isTouching(ball) && ball.bounceOff(wall2)) {
    ball.shapeColor = wall2.shapeColor;
    ball.velocityX = 0;
    ball.velocityY = 0;
    music.stop();
  } else if (wall3.isTouching(ball) && ball.bounceOff(wall3)) {
    ball.shapeColor = wall3.shapeColor;
    music.play();
  } else if (wall4.isTouching(ball) && ball.bounceOff(wall4)) {
    ball.shapeColor = wall4.shapeColor;
    music.play();
  }

  //add condition to check if box touching surface and make it box
  drawSprites();
}
