(function(){
	let canvas = document.getElementById('canvas_11'),
		context = canvas.getContext('2d'),
		width = 300, height = 200;

	canvas.width = width;
	canvas.height = height;
	canvas.style.backgroundColor = '#162851';

	context.fillStyle = '#AEEE8A';
	context.strokeStyle = '#24EE9F';
	context.lineWidth = 1;

	let clear = function(){
		context.clearRect(0, 0, width, height);
	};

	let drawFillRect = function(x, y, w, h){
		context.fillRect(x, y, w, h);
	};

	let drawStrokeRect = function(x, y, w, h){
		context.strokeRect(x, y, w, h);
	};

	let mouse = {
		x: 0,
		y: 0,

		speedX: 0,
		speedY: 0,

		oldX: 0,
		oldY: 0,

		update: function(){
			this.speedX = Math.abs(this.x - this.oldX);
			this.speedY = Math.abs(this.y - this.oldY);

			this.oldX = this.x;
			this.oldY = this.y;
		}
	};

	canvas.onmousemove = function(e){
		mouse.x = e.pageX - e.target.offsetLeft;
		mouse.y = e.pageY - e.target.offsetTop;
	};

	setInterval(function(){
		clear();
		mouse.update();
		drawFillRect(10, 10, mouse.speedX*4, 20);
		drawFillRect(10, 40, mouse.speedY*4, 20);
	}, 1000 / 60);
})();