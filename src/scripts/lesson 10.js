(function(){
	let canvas = document.getElementById('canvas_10'),
		context = canvas.getContext('2d'),
		width = 300, height = 300;

	canvas.width = width;
	canvas.height = height;
	canvas.style.backgroundColor = '#FFCFC2';

	context.fillStyle = '#74BEFF';
	context.strokeStyle = '#8F3AFF';
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

	let Rect = function(x, y, w, h, dx, dy){
		this.x = x;
		this.y = y;
		this.w = h;
		this.h = h;

		this.dx = 0;
		this.dy = 0;

		this.maxSpeed = 10;

		this.acselerate = 0.2;

		this.fall = true;
	};

	Rect.prototype = {
		draw: function(){
			drawFillRect(this.x, this.y, this.w, this.h);
		},
		move: function(){
			this.x += this.dx;
			this.y += this.dy;
		},
		/**
		 * Гравитация ёпт
		 */
		gravity: function(){
			if(!this.fall) return;

			// Если ускорение тела меньше его максимальной скорости, прибавляем ускорение среды
			this.dy += (this.dy <= this.maxSpeed) ? this.acselerate : 0;

			// Если стукнулись о "пол"
			if(this.y + this.h >= height){
				this.y = height - this.h; // Фиксируем тело внизу
				this.dy /= 3; // Значение упругости (насколько сильно будет отскакивать)
				this.dy *= -1; // Меняем направление гравитации
				// this.dy = 0; // Это если без отскока
			}

			if(Math.abs(this.dy) < this.acselerate * 2 &&
				this.y + this.h >= height){
				this.fall = false;
				this.dy = 0;
			}
		}
	};

	let rect = [],
		mouse = {x: 0, y: 0},
		newRectW = 40,
		newRectH = 40;

	canvas.onmousemove = function(e){
		mouse.x = e.pageX - e.target.offsetLeft;
		mouse.y = e.pageY - e.target.offsetTop;
	};

	canvas.onclick = function(){
		rect.push(new Rect(mouse.x-newRectW/2, mouse.y-newRectH/2, newRectW, newRectH));
	};

	setInterval(function(){
		clear();
		for (let i in rect) {
			rect[i].gravity();
			rect[i].move();
			rect[i].draw();
		}

		if(mouse.x && mouse.y) drawStrokeRect(mouse.x-newRectW/2, mouse.y-newRectH/2, newRectW, newRectH)
	}, 30);
})();