// Make array for questions

// Make rng for selecting lyrics

// Select elements from game.html

// Prompt question to game.html

// Create user selections

var lyrics = [1, 2, 3, 4, 5, 6, 7];

function randomLyrics(randomArray) {
    var randomIndex = Math.floor(Math.random() * lyrics.length);
    return randomArray[randomIndex];
}

var object = randomLyrics(lyrics);
console.log(object);

