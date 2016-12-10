(function(){
	let gameEngine;

	let canvas = document.getElementById('canvas');
	let context = canvas.getContext('2d');

	let x = 10, y = 10;

	function drawRect() {
		context.fillStyle = 'black';
		context.clearRect(0, 0, 300, 300);
		context.fillRect(x, y, 50, 50);
	}

	let nextGameStep = (()=>{
		return requestAnimationFrame    ||
			webkitRequestAnimationFrame ||
			mozRequestAnimationFrame    ||
			oRequestAnimationFrame      ||
			msRequestAnimationFrame     ||
			function (callback) {
				setTimeout(callback, 1000 / 60);
			};
	})();

	let gameEngineStart = (callback)=>{
		gameEngine = callback;
		gameEngineStep();
	};

	let gameEngineStep = ()=>{
		gameEngine();
		nextGameStep(gameEngineStep);
	};

	let setGameEngine = (callback)=>{
		gameEngine = callback;
	};




	let gameLoopLeft = function(){
		drawRect();
		x-= 2;
		if(x < 10){
			setGameEngine(gameLoopRight);
		}
	};

	let gameLoopRight = function(){
		drawRect();
		x+= 2;
		if(x >= 240){
			setGameEngine(gameLoopLeft);
		}
	};

	gameEngineStart(gameLoopRight);
})();