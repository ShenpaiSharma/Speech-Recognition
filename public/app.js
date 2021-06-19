const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const greetings = [
	"I am so good tell me how was your day",
	"Hey! You are looking so charming today",
	"What happened, are you felling lonely, please go and call your friends"
];

const weather = [
	"Weather is so hot today",
	"Weather is so nice today, why don't you just take a break from your work and rather take a walk outside",
	"It's rainy today just please stay at your home and watch some good game"
];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
	console.log('voice is activated, you can to microphone');
}

recognition.onresult = function(event) {
	console.log("Event is: ", event);

	const current = event.resultIndex;

	const transcript = event.results[current][0].transcript;
	content.textContent = transcript;
	readOutLoud(transcript);
}

// add the listener to the btn

btn.addEventListener('click', () => {
	recognition.start();
});


function readOutLoud(message) {
	const speech = new SpeechSynthesisUtterance();

	speech.text = "Your voice is not clear, please try again or there could be a problem in server Error 500, oops";

	if (message.includes('hello')) {
		const text = greetings[Math.floor(Math.random() * greetings.length)];
		speech.text = text;
	} else if (message.includes('Mausam')) {
		const text = weather[Math.floor(Math.random() * weather.length)];
		speech.text = text;
	}

	//speech.text = message;
	speech.volume = 1;
	speech.rate = 1;
	speech.pitch = 1;

	window.speechSynthesis.speak(speech);
}
