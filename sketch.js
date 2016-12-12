var s;
var food;
var scl = 10;

function setup() {
	createCanvas(600,600);
	s = new Snake();
	frameRate(10);
	picklocation();
}

function draw() {
	background(51);
	// s,terminate();
	s.update();
	s.show();
	
	//Filling food with a color
	fill(204, 102, 0);
	rect(food.x, food.y, scl, scl);

	if(s.eat(food)){
		picklocation();
	}
}

//Pick random location for food
function picklocation() {
	var cols =  floor(width/scl);
	var rows =  floor(height/scl);
	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(scl); //expand it out and size it with the snake 
}

//To change the direction
function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0,-1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0,1);
  }else if (keyCode === LEFT_ARROW) {
    s.dir(-1,0);
  }else if (keyCode === RIGHT_ARROW) {
    s.dir(1,0);
  }
}



