let song1 = loadAudio([
	'build/sound/disney-s-jungle-book-nes-music-cutscenes-theme.mp3',
	'build/sound/disney-s-jungle-book-nes-music-cutscenes-theme.wav',
	'build/sound/disney-s-jungle-book-nes-music-cutscenes-theme.ogg'
]);
let song2 = loadAudio(['build/sound/disney-s-jungle-book-nes-music-ending-theme.mp3'], 0.1);

function loadAudio(arr, vol){
	let audio = document.createElement('audio');

	for(let i=0; i<arr.length; i+=1){
		let source = document.createElement('source');
		source.src = arr[i];
		audio.appendChild(source);
	}

	audio.volume = 0.5 || vol;

	let o = {
		dom: false,
		state: 'stop',
		play: function(){
			this.dom.play();
			this.state = 'play';
		},
		replay: function(){
			this.dom.stop();
			this.dom.play();
			this.state = 'replay';
		},
		pause: function(){
			this.dom.pause();
			this.state = 'pause';
		},
		stop: function(){
			this.dom.pause();
			this.dom.currentTime = 0;
			this.state = 'stop';
		},
		setVolume: function(vol){
			this.dom.volume = vol;
		},
		getVolume: function(){
			return this.dom.volume;
		}
	};

	o.dom = audio;

	return o;
}

let body = document.querySelector('body');
body.addEventListener('keyup', function(e){
	e.preventDefault();

	if(e.keyCode === 27){
		songParam = 'stop';
	}
});

let currentSong;
let songParam = 'stop';
function songCtrl(e, ctrl){
	e.preventDefault();
	songParam = ctrl;
}

setInterval(function(){
	if(songParam === 'stop'){
		song1.stop();
		song2.stop();
	} else if(songParam === 'song2'){
		currentSong = song2;
		song1.pause();
		song2.play();
		song2.setVolume(0.5);
	} else if(songParam === 'song1') {
		currentSong = song1;
		song2.pause();
		song1.play();
		song1.setVolume(0.25);
	}
}, 200);