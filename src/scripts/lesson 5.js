(function(){
	let canvas = document.getElementById('canvas_5'),
		context = canvas.getContext('2d');

	let keys = {
		'W': 87,
		'S': 83,
		'A': 65,
		'D': 68
	};

	let keyDown = {};
	let setKey = function(keyCode){
		keyDown[keyCode] = true;
	};

	let clearKey = function(keyCode){
		keyDown[keyCode] = false;
	};

	// { {W: 87}[87] : true }
	let isKeyDown = function(keyName){
		return keyDown[keys[keyName]] == true;
	};

	window.onload = function(){
		window.onkeydown = function(e){
			setKey(e.keyCode);
		};
		window.onkeyup = function(e){
			clearKey(e.keyCode);
		};
		gameEngine();
	};

	function engine(){
		context.clearRect(0, 0, 100, 100);
		if(isKeyDown('W')){
			document.getElementById('currentKeyName').innerHTML = 'Нажата кнопка W';
			context.fillText('Нажата W', 20, 20);
		} else {
			document.getElementById('currentKeyName').innerHTML = '';
		}

		if (isKeyDown('S')){
			document.getElementById('currentKeyName').innerHTML = 'Нажата кнопка S';
			context.fillText('Нажата S', 20, 30);
		}
	}

	// Игровой цикл
	let gameEngine = function(){
		if(typeof engine == 'function'){
			engine();
		} else {
			document.getElementById('lesson_5_content').innerHTML = 'Не определена функция engine';
		}

		requestAnimationFrame(gameEngine);
	}
})();