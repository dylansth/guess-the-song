// Make array for questions

// Make rng for selecting lyrics

// Select elements from game.html

// Prompt question to game.html

// Create user selections

var questionHeading = document.getElementById("questionHeading");
var answerA = document.getElementById("answerA");
var answerB = document.getElementById("answerB");
var answerC = document.getElementById("answerC");
var answerD = document.getElementById("answerD");

var songArray = load("song");


// Randomly selects users choices
function randomchoiceA(songArray) {
    var rng = Math.floor(Math.random() * songArray.length);
    return songArray[rng];
}

function randomchoiceB(songArray) {
    var rng = Math.floor(Math.random() * songArray.length);
    return songArray[rng];
}

function randomchoiceC(songArray) {
    var rng = Math.floor(Math.random() * songArray.length);
    return songArray[rng];
}

function randomchoiceD(songArray) {
    var rng = Math.floor(Math.random() * songArray.length);
    return songArray[rng];
}

//Turn random choices into variables, and log.
var choiceA = randomchoiceA(songArray);
console.log(choiceA);

var choiceB = randomchoiceB(songArray);
console.log(choiceB);

var choiceC = randomchoiceC(songArray);
console.log(choiceC);

var choiceD = randomchoiceD(songArray);
console.log(choiceD);

//Append variables to HTML buttons
function userQuestions() {
    getYoutube(choiceA)
    answerA.textContent = choiceA;
    answerA.setAttribute("data-answer","correct");
    answerB.textContent = choiceB;
    answerB.setAttribute("data-answer","incorrect");
    answerC.textContent = choiceC;
    answerC.setAttribute("data-answer","incorrect");
    answerD.textContent = choiceD;
    answerD.setAttribute("data-answer","incorrect");
}

userQuestions();

//Event Listener for Buttons
answerA.addEventListener('click', function(event){
    event.preventDefault();
    answerB.getAttribute("data-answer");
    console.log(answerA.getAttribute("data-answer"))
})


