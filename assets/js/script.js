
// initial the html elements
var playBtn = document.getElementById('play-btn')
var highScoreBtn = document.getElementById('high-score-btn')
var userInput = document.getElementById('user-input')
// Play button event listener No functions for now
playBtn.addEventListener('click', playBtnHandler)
highScoreBtn.addEventListener('click', highScoreBtnHandler)


var genius_artist = "alanwalker";

// excute functions
// get_youtube_api();
// get_genius_api();


// require functions
// Generate website
function get_youtube_video() {
    var youtube = "https://www.youtube.com/watch?v=";
    var youtube_links = [];
    var youtube_ids = load("video_id");
    for (var i = 0; i < 10; i++) {
        var youtube_link = youtube + youtube_ids[i];
        youtube_links.push(youtube_link);
    }
    save("video_link", youtube_links)
}

// To get the specific video id using yt api
function get_youtube_api() {
    // var youtube_api = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=";
    // // Change this songs[#] 
    // var search = JSON.parse(localStorage.getItem("songs"))[song_index] + " Instrumental";
    // search = search.replaceAll(" ", "%20")
    // var youtube_token = "&key=AIzaSyCkGs7BbWf7YcoBdu9Waq6C3rlusyZisyw";
    // var youtube_full_api = youtube_api + search + youtube_token;
    // fetch(youtube_full_api)
    //     .then(function (response) {
    //         return response.json();
    //     })
    //     .then(function (data) {
    //         save("video_id", data.items[0].id.videoId);
    //     });
    var video_id = ["Rmtx9slmodw", "sK89EOD9Klw&ab", "W9F5xHWfmPs", "f1auh7D0NF4", "Yp7etMffYAc", "1RGsQVmkq2U", "lQFIe5STi3M", "s944sDlARUk", "YubPf3N26KY", "x6hWKp95Kp8"];
    save("video_id", video_id);
    return;
}

// Get API from genius api 
function get_genius_api() {
    // Local variables
    var genius_api = "https://api.genius.com/search?q=";
    var genius_token = "&access_token=wAfiQh7brLmlaaRzG7qxg6hUPKkOlajQPF1WWJy3-x8UEgTvBELbqtjag3mtB61G";
    // Set up the link to the api 
    var genius_full_api = genius_api + genius_artist + genius_token;
    // Empty song bank
    var song_bank = [];
    // Fetching the genius song api
    fetch(genius_full_api)

        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // Storing all the song titles of a specific artist
            for (var i = 0; i < data.response.hits.length; i++) {
                song_bank.push(data.response.hits[i].result.title);
            }
            // Storing all the songs in a local storage
            save("song_q", song_bank);
            save("song_a", song_bank);
        });
    return;
}
get_genius_api();
get_youtube_api();
get_youtube_video();

// Save optioin for local storage
function save(option, data) {
    // If options is equal to a certain parameter, then the data is saved
    if (option === "song_q") {
        localStorage.setItem("song_q", JSON.stringify(data));
    } else if (option === "song_a") {
        localStorage.setItem("song_a", JSON.stringify(data));
    } else if (option === "user") {
        localStorage.setItem("user", JSON.stringify(data));
    } else if (option === "score") {
        localStorage.setItem("score", data);
    } else if (option === "video_id") {
        localStorage.setItem("video_id", JSON.stringify(data));
    } else if (option === "video_link") {
        localStorage.setItem("video_link", JSON.stringify(data));
    } 
    return;
}

// Load function
function load(option) {
    // If options iss equal to a certain parameter, then the data is loaded 
    if (option === "song_q") {
        return JSON.parse(localStorage.getItem("song_q"));
    } else if (option === "song_a") {
        return JSON.parse(localStorage.getItem("song_a"));
    } else if (option === "user") {
        return JSON.parse(localStorage.getItem("user"));
    } else if (option === "score") {
        return localStorage.getItem("score");
    } else if (option === "video_id") {
        return JSON.parse(localStorage.getItem("video_id"));
    } else if (option === "video_link") {
        return JSON.parse(localStorage.getItem("video_link"));
    }
    return; 
}



// handler
// play button
function playBtnHandler(event) {
    event.preventDefault()
    var userName = userInput.value
    var users = load('user')
    if (users) {
        users.push(userName)
    } else {
        users = []
        users.push(userName)
    }
    save('user', users)
    userInput.value = ''
    window.location.replace('./pages/game.html')
}

//high score button
function highScoreBtnHandler(event) {
    event.preventDefault()
    window.location.replace('./pages/score.html')
}

var file = load(song_q);
if (file.length === 0) {
    window.location("")
}