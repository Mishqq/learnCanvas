(function(){
	let canvas = document.getElementById('canvas_9'),
		context = canvas.getContext('2d');

	let mouse = {x: 0, y: 0};

	let selected = false;

	let width = 300, height = 300;

	canvas.width = width;
	canvas.height = height;
	canvas.style.backgroundColor = '#FFCFC2';

	context.fillStyle = '#74BEFF';
	context.strokeStyle = '#8F3AFF';
	context.lineWidth = 4;

	let drawFillRect = function(x, y, w, h){
		context.fillRect(x, y, w, h);
	};

	let drawStrokeRect = function(x, y, w, h){
		context.strokeRect(x, y, w, h);
	};

	let Rect = function(x, y, w, h){
		this.x = x;
		this.y = y;
		this.w = h;
		this.h = h;
		this.selected = false;
	};

	Rect.prototype = {
		draw: function(){
			drawFillRect(this.x, this.y, this.w, this.h);
		},
		stroke: function(){
			drawStrokeRect(this.x, this.y, this.w, this.h);
		},
		select: function(){
			this.selected = !this.selected;
		}
	};

	let i=0, rect = [];
	for (; i<5; i+= 1) {
		rect.push(new Rect(20+i*(45 + 10), 40, 45, 45));
	}

	let isCursorInRect = function(rect){
		return mouse.x > rect.x && mouse.x < rect.x + rect.w &&
			mouse.y > rect.y && mouse.y < rect.y + rect.h
	};

	setInterval(function(){
		context.clearRect(0, 0, width, height);
		for (i in rect) {
			rect[i].draw();

			if(isCursorInRect(rect[i])){
				rect[i].stroke();
			}
		}

		if(selected){
			selected.x = mouse.x - selected.w/2;
			selected.y = mouse.y - selected.h/2;
		}
	}, 30);


	canvas.onmousemove = function(e){
		mouse.x = e.pageX - e.target.offsetLeft;
		mouse.y = e.pageY - e.target.offsetTop;
	};

	canvas.onmousedown = function(){
		mouse.down = true;
		if(!selected){
			for (let j in rect) {
				if( isCursorInRect(rect[j]) ) selected = rect[j];
			}
		}
	};

	canvas.onmouseup = function(){
		mouse.down = false;
		selected = false;
	};

})();