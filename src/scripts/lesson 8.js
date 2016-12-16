(function(){
	let canvas = document.getElementById('canvas_8'),
		context = canvas.getContext('2d');

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

	let isCursorInRect = function(x, y, rect){
		// console.log('---=== rect ===---', x, y, rect);
		return x > rect.x && x < rect.x + rect.w &&
				y > rect.y && y < rect.y + rect.h
	};

	canvas.onclick = function(e){
		let x = e.pageX - e.target.offsetLeft,
			y = e.pageY - e.target.offsetTop;
		for (i in rect) {
			if(isCursorInRect(x, y, rect[i])){
				rect[i].select();
			}
		}
	};

	setInterval(function(){
		context.clearRect(0, 0, width, height);
		for (i in rect) {
			rect[i].draw();

			if(rect[i].selected)
				rect[i].stroke();
		}
	}, 30);

})();