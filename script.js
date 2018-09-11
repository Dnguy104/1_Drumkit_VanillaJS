
function keyStartFunc(e) {
	// console.log(e);
	var audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
	var key = document.querySelector(`.keys[data-key = "${e.keyCode}"]`);
	if (!audio) return;
	
	audio.currentTime = 0;
	audio.play()
	key.classList.add('playing');
	
}

function keyEndFunc(e) {
	if(e.propertyName !== 'transform') return;
	
	this.classList.remove('playing');
}
var keys = document.querySelectorAll('.keys');


keys.forEach(key => key.addEventListener('transitionend', keyEndFunc));
window.addEventListener('keydown', keyStartFunc);
window.addEventListener('load', function(){
	var cover = document.getElementById('cover');
	cover.style.opacity = '0';
});