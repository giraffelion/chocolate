function randomInt(min, max) {
	return min + Math.floor((max - min) * Math.random());
}

function addOnePiece() {
	let container = document.querySelector('#wrapper');
	let choco = document.createElement('div');
	choco.className = "piece";
	let text = document.createElement('div');
	text.className = "text";
	text.textContent = randomInt(0,10);
	choco.append(text);
	container.append(choco);
}

function addPieces (num) {
	for (var i=0; i < num; i++) {
		addOnePiece();
	}
}

window.addEventListener('scroll', function() {
	if (window.scrollY + window.innerHeight + 100 >= document.documentElement.scrollHeight) {
		console.log(1);
		addPieces(14);
	}

})

addPieces(21);