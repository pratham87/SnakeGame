var snake;
var food;
var snake_size = 10;

function setup() {
	createCanvas(600,600);
	snake = new Snake();
	frameRate(10);
	picklocation();
}

function draw() {
	background(51);
	snake.terminate();
	snake.update();
	snake.show();
	snake.score();
	
	
	//Filling food with a color
	fill(204, 102, 0);
	rect(food.x, food.y, snake_size, snake_size);

	if(snake.eat(food)){
		picklocation();
	}
}

//Pick random location for food
function picklocation() {
	var cols =  floor(width/snake_size);
	var rows =  floor(height/snake_size);
	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(snake_size); //expand it out and size it with the snake 
}

//To change the direction
function keyPressed() {
  if (keyCode === UP_ARROW && keyCode !== DOWN_ARROW) {
    snake.dir(0,-1);
  } else if (keyCode === DOWN_ARROW && keyCode !== UP_ARROW) {
    snake.dir(0,1);
  }else if (keyCode === LEFT_ARROW && keyCode !== RIGHT_ARROW) {
    snake.dir(-1,0);
  }else if (keyCode === RIGHT_ARROW && keyCode !== LEFT_ARROW) {
    snake.dir(1,0);
  }
}



