// Make array for questions

// Make rng for selecting lyrics

// Select elements from game.html

// Prompt question to game.html

// Create user selections

// Setting variables to the elements in the html 
var questionHeading = document.getElementById("questionHeading");
var buttons = document.getElementsByTagName("button");
var iframe = document.getElementById("video");

// Loading the songs and video links
var songArray = load("song");
var song_links = load("video_link")

// Randomly number generator choices
function rand(max) {
    return Math.floor(Math.random() * max);
}

// Generates the questions and the iframe
function generate_questions(song, id) {
    // Setting up local variables
    // Song question
    var song_q = song;
    // Song link
    var id_img = id;
    // Song options
    var song_a = song;
    // Song answers
    var options = [];
    // Gets a random number from the song question array length
    var ran = rand(song_q.length);
    // Set the iframe attribute to the correct attribute
    iframe.setAttribute("src", id_img[ran]);
    // The option array takes in the correct answer
    options.push(song_q[ran]);
    // Removes the question asked so it doesn't repeat
    song_q = song_q.filter(item => item != song_q[ran]);
    // Removes the link so it doesn't repeat
    id_img = id_img.filter(item => item != id_img[ran]);
    // Removes the answer so it doesn't repeat
    song_a = song_a.filter(item => item != song_a[ran]);
    // Concats the 2 array together 
    options = options.concat(generate_3questions(song_a));
    for (var i = 0; i < 4; i ++) {
        buttons[i].textContent = options[i];
    }
}

// Picks out the other 3 options
function generate_3questions(answer) {
    // Makes empty option
    var options = [];
    var song_a = answer;
    // Makes the 3 other options and stores in array
    for (var i = 0; i < 3; i ++) {
      var ran = rand(song_a.length);
      options.push(song_a[ran]);
      song_a = song_a.filter(item => item != song_a[ran]);
    }
    return options;
  }
  

  

//Append variables to HTML button

//Event Listener for Buttons
answerA.addEventListener('click', function(event){
    event.preventDefault();
    answerB.getAttribute("data-answer");
    console.log(answerA.getAttribute("data-answer"))
})


