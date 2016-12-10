(function(){
	let canvas = document.getElementById('canvas_3'),
		context = canvas.getContext('2d');

	let width = 100, height = 100, x = 0;

	let cop1 = loadImage('build/images/sprite.png', 16, 30);
	let cop2 = loadImage('build/images/sprite.png', 16, 30);
	let cop3 = loadImage('build/images/sprite.png', 16, 30);
	let i = 0;
	setInterval(()=>{
		context.clearRect(0, 0, 100, 100);
		drawImage(cop1, i, 0);
		drawImage(cop2, i*2, 30);
		drawImage(cop3, i*3, 60);
		i += 1;
	}, 200);

	function drawImage(imageObj, cX, cY) {
		imageObj.frameStep+= 1;

		imageObj.frameStep = (imageObj.frameStep % 2 !== 0) ? 1 :
			( (imageObj.frameStep/2) % 2 > 0 ) ? 2 : 0;

		context.drawImage(
			imageObj.dom,
			imageObj.frameStep*imageObj.width + 1,
			65,
			imageObj.width,
			imageObj.height,
			cX,
			cY,
			imageObj.width,
			imageObj.height);
	}

	function loadImage(path, width, height, count){
		let image = document.createElement('img');

		let result = {
			dom: image,
			width: width || 0,
			height: height || 0,
			count: count || 0,
			speed: 1,
			loaded: false,
			frameStep: 0
		};
		image.onload = function(){
			result.loaded = true;
		};
		image.src = path;

		return result
	}
})();