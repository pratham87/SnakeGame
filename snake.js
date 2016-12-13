//Snake Object
function Snake(){
	this.x = 0;
	this.y = 0;
	this.xspeed = 1;
	this.yspeed = 0;
	this.total = 0; //Counter to count food eaten
	this.tail = [];

	this.dir = function(x,y){
		this.xspeed = x;
		this.yspeed = y;
	}

	this.terminate = function(){
		for(var i = 0; i < this.tail.length; i++){
			var head_position = createVector(this.x, this.y);
			var tail_position = this.tail[i];
			var distance = p5.Vector.dist(head_position ,tail_position);
			if(distance < 1){
				this.x = 0;
				this.total = 0;
				this.tail = [];
			}
		}
	}

	this.eat = function(pos){
		var snake_position = createVector(this.x, this.y);
		var food_position = createVector(pos.x, pos.y);
		var distance = p5.Vector.dist(snake_position,food_position);
		if(distance < 1){
			this.total++;
			return true;
		}else{
			return false;
		}
	}

	this.update = function(){

		//Make the snake grow
		for(var i = 0; i < this.tail.length - 1; i++){
			this.tail[i] = this.tail[i+1];
		}
		this.tail[this.total - 1] = createVector(this.x, this.y);

		//Move the Snake
		this.x = this.x + this.xspeed * snake_size;
		this.y = this.y + this.yspeed * snake_size;

		//Constrain the grid
		this.x = constrain(this.x, 0, width - snake_size);
		this.y = constrain(this.y, 0, height - snake_size);
	}

	this.show = function(){
		
		fill(255);
		for (var i = 0; i < this.total; i++) {
			rect(this.tail[i].x, this.tail[i].y, snake_size, snake_size);
		}

		rect(this.x, this.y, snake_size, snake_size);	
	}

	this.score = function(){
		var score_text = "Score: " + this.total;
		text(score_text, width/snake_size - 50, height - 10);
	}
}