var afinnemoji;

function preload() {
	afinnemoji = loadJSON('afinnemoji.json');
}

function setup() {
	noCanvas();
	console.log(afinnemoji);

	var txtemoji = select('#txt');
	txtemoji.input(typing);

	function typing() {
		var textemojiinput = txtemoji.value();
		var emoji = textemojiinput.split('');
		console.log(emoji);
		var scoredemoji = [];
		var totalemoji = 0;
		for (var a = 0; a < emoji.length; a++) {
			var emoticon = emoji[a].toLowerCase();
			if (afinnemoji.hasOwnProperty(emoticon)) {
				var scoremooji = afinnemoji[emoticon];
				console.log(emoticon, scoremoji);
				console.log(emoji.length);
				totalemoji += Number(scoremoji);
				scoredemoji.push(emoticon + ': ' + scoremoji + ' ')
			}
		}
		//CHECK RISULTATO + SHOW
		var risemoji = select('#risemoji');
		if (totalemoji > 1) {
			risemoji.html(risemoji = "positive");
		}
		else if (totalemoji < -1) {
			risemoji.html(risemoji = "negative");
		}
		else if (totalemoji = 0) {
			risemoji.html(risemoji = "neutral");
		}
		var scoreParemoji = select('#scorePemoji');
		scoreParemoji.html('Conteggio parole: ' + (scoredemoji.length))
		var punteggiototaleemoji = select('#puntiemoji');
		punteggiototaleemoji.html('Punteggio: ' + (totalemoji));
		var wordlistemoji = select('#wordlistPemoji');
		wordlistemoji.html('lista parole per check: ' + scoredemoji);

	}
}