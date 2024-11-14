const pirateSpeak = {
    "hello": "ahoy",
    "my": "me",
    "friend": "matey",
    "is": "be",
    "you": "ye",
    "are": "be",
    "your": "yer",
    "the": "thy'",
    "money": "doubloons",
    "i": "I be",
    "good": "fine",
    "bad": "scurvy",
    "yes": "aye",
    "no": "nay",
    "captain": "Cap'n",
    "ship": "vessel",
    "treasure": "booty",
    "crew": "scallywags",
    "enemy": "scurvy dog",
    "drunk": "three sheets to the wind",
    "food": "grub",
    "rum": "grog",
    "journey": "voyage",
    "storm": "tempest",
    "fight": "skirmish",
    "hurry": "make haste",
    "listen": "hark",
    "stop": "belay",
    "come here": "avast",
    "goodbye": "fair winds",
    "danger": "peril",
    "hello, everyone": "ahoy, me hearties!",
    "hurry up": "splice the mainbrace!",
    "wait": "heave to!",
    "yes": "aye aye",
    "treacherous": "black-hearted",
    "let's go": "set sail"
};

function translateToPirate() {
    const inputText = document.getElementById('inputText').value;
    const addYarr = document.getElementById('addYarr').checked;
    const speakTranslation = document.getElementById('speakTranslation').checked;

    let words = inputText.split(/(\s+)/);

    let translatedWords = words.map(word => {
        let match = word.match(/([.,!?;:]*)$/);
        let punctuation = match ? match[0] : '';
        let cleanWord = word.replace(/[.,!?;:]*$/, '');
        let pirateWord = pirateSpeak[cleanWord.toLowerCase()] || cleanWord;

        if (cleanWord.charAt(0) === cleanWord.charAt(0).toUpperCase()) {
            pirateWord = pirateWord.charAt(0).toUpperCase() + pirateWord.slice(1);
        }

        return pirateWord + punctuation;
    });

    let result = translatedWords.join('');
    if (addYarr) {
        result += " Yarr!";
    }

    document.getElementById('result').innerText = "Pirate speak: " + result;

    if (speakTranslation) {
        speakPirate(result);
        showSpeechBubble(result);
    } else {
        removeSpeechBubble();
    }
}

function speakPirate(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US'; // You can adjust the language or voice here
    utterance.pitch = 1; // You can adjust the pitch of the voice
    utterance.rate = 1;  // You can adjust the speed of the speech
    speechSynthesis.speak(utterance);
}

function showSpeechBubble(text) {
    // Remove any existing speech bubble first
    removeSpeechBubble();

    // Create a new speech bubble
    const speechBubble = document.createElement('div');
    speechBubble.classList.add('speech-bubble');
    speechBubble.textContent = text;
    document.getElementById('container').appendChild(speechBubble);
}

function removeSpeechBubble() {
    const existingBubble = document.querySelector('.speech-bubble');
    if (existingBubble) {
        existingBubble.remove();
    }
}

const pirateCatchphrases = [
    "Set sail on your dreams, matey! The sea favors the bold!",
    "Storms may come, but a true sailor keeps their course!",
    "Treasure lies in the journey, not just the destination!",
    "Hoist your sails and trust the winds; they'll take ye where ye're meant to go!",
    "Every tempest ends, and fair winds follow – stay strong, me heartie!",
    "Avast! Doubt is the true enemy; trust in yer crew and yourself!",
    "Yer spirit's as strong as the mightiest ship – never let it waver!",
    "Aye, a true buccaneer finds fortune through courage and grit!",
    "Scars from battles past be proof of your resilience, sailor!",
    "Keep a sharp eye on the horizon – the sun always rises!",
    "There’s no treasure more valuable than yer unyielding spirit!",
    "Belay the fear and steer boldly into the unknown!",
    "The greatest voyages start with a single step – onward, me matey!",
    "Raise yer anchor and sail away from doubt; adventure awaits!",
    "Fortune smiles on those who dare to chase the horizon!",
    "Every wave conquered brings ye closer to glory, arrr!",
    "When tides turn rough, remember: even the strongest waves bow to a steady hand!",
    "Be not afraid of the deep, for in it lies yer greatest triumph!",
    "Arrr, a ship in the harbor is safe, but that's not what it be built for!",
    "Chart yer own course, for no pirate worth their salt follows another’s map!"
];

document.getElementById('pirateImage').addEventListener('click', function() {
    const existingBubble = document.querySelector('.speech-bubble');
    if (existingBubble) {
        existingBubble.remove();
    }

    // Select a random phrase
    const randomPhrase = pirateCatchphrases[Math.floor(Math.random() * pirateCatchphrases.length)];

    const speechBubble = document.createElement('div');
    speechBubble.classList.add('speech-bubble');
    speechBubble.textContent = randomPhrase;
    document.getElementById('container').appendChild(speechBubble);
});
