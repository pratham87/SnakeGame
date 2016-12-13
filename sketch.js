var s;
var food;
var snake_size = 10;

function setup() {
	createCanvas(600,600);
	s = new Snake();
	frameRate(10);
	picklocation();
}

function draw() {
	background(51);
	s.terminate();
	s.update();
	s.show();
	s.score();
	
	
	//Filling food with a color
	fill(204, 102, 0);
	rect(food.x, food.y, snake_size, snake_size);

	if(s.eat(food)){
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
    s.dir(0,-1);
  } else if (keyCode === DOWN_ARROW && keyCode !== UP_ARROW) {
    s.dir(0,1);
  }else if (keyCode === LEFT_ARROW && keyCode !== RIGHT_ARROW) {
    s.dir(-1,0);
  }else if (keyCode === RIGHT_ARROW && keyCode !== LEFT_ARROW) {
    s.dir(1,0);
  }
}



