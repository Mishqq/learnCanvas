(function(){
	let canvas = document.getElementById('canvas_7'),
		context = canvas.getContext('2d');

	let width = 300,
		height = 300;

	canvas.width = width;
	canvas.height = height;
	canvas.style.backgroundColor = '#D0D0D0';

	let drawRect = function(x, y, w, h, a){
		let dx = x + w/2;
		let dy = y + h/2;
		if(a){
			a = a * (Math.PI / 180);
			context.save();
			context.translate(dx, dy);
			context.rotate(a);
			context.translate(-dx, -dy);
		}

		context.strokeRect(x, y, w, h);

		if(a){
			context.restore();
		}
	};

	let x = 10, y = 10, a = 0;
	setInterval(function(){
		context.clearRect(0, 0, width, height);
		drawRect(x, y, 40, 40, a);
		drawRect(5*x, y, 40, 40, -a);
		drawRect(x, 5*y, 40, 40, -a);
		drawRect(5*x, 5*y, 60, 60, a);
		drawRect(9*x, y, 40, 40, a);
		drawRect(13*x, y, 40, 40, -a);
		drawRect(x, 9*y, 40, 40, a);
		drawRect(x, 13*y, 40, 40, -a);
		// x++;
		// y++;
		a++;
	}, 1000 / 60)
})();