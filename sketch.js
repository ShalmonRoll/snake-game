
var snake;
var rez = 20;
var food;
var w;
var h;
var score=0;

function setup() {
  createCanvas(400, 400);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  snake = new Snake();
  foodLocation();
  //text("Score"+score,360,20);
}

function foodLocation() {
  var x = floor(random(w));
  var y = floor(random(h));
  food = createVector(x, y);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }

}

function draw() {
  
  scale(rez);
  background("green");
  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.show();
  
  

  if (snake.endGame()) {
    print("END GAME");
    fill(0);
    textSize(30);
    text("Game Over",150,190);
    background("yellow");
    noLoop();
  }

  noStroke();
  fill("yellow");
  rect(food.x, food.y, 1, 1);
}