(function(){
	let position = document.getElementById('position');
	let cursor = document.getElementById('cursor');
	let pool = document.getElementById('pool');
	let x = 0, y = 0, dx = 0;

	pool.onmousemove = function(event){
		let e = event || window.event;
		x = e.pageX;
		y = e.pageY;
	};

	setInterval(function(){
		position.innerHTML = 'Позиция курсора ' + x + ' / ' + y;
		cursor.style.left = x-20+'px';
		cursor.style.top = y-20+'px';
		dx+= 1;
		// pool.style.left = dx+'px';

		if(pool.style.left > cursor.style.left) cursor.style.left = pool.style.left;
	}, 1000/60);
})();