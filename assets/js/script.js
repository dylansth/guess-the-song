// initial the html elements
var playBtn = document.getElementById('play-btn')
var highScoreBtn = document.getElementById('high-score-btn')
var userInput = document.getElementById('user-input')
// Play button event listener
playBtn.addEventListener('click', playBtnHandler)
highScoreBtn.addEventListener('click', highScoreBtnHandler)


// excute functions
get_youtube_api();
get_genius_api();


// require functions
// Generate website
function get_youtube_video() {
    var youtube = "https://www.youtube.com/watch?v=";
    var id = load("video_id");
    var youtube_url = youtube + id;
    return youtube_url;
}

// To get the specific video id using yt api
function get_youtube_api(song_index = 1) {
    var youtube_api = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=";
    // Change this songs[#] 
    var search = JSON.parse(localStorage.getItem("songs"))[song_index] + " Instrumental";
    search = search.replaceAll(" ", "%20")
    var youtube_token = "&key=AIzaSyCkGs7BbWf7YcoBdu9Waq6C3rlusyZisyw";
    var youtube_full_api = youtube_api + search + youtube_token;
    fetch(youtube_full_api)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            save("video_id", data.items[0].id.videoId);
        });
    return;
}

// Get API from genius api 
function get_genius_api() {
    var genius_api = "https://api.genius.com/search?q=";
    var genius_artist = "alanwalker";
    var genius_token = "&access_token=wAfiQh7brLmlaaRzG7qxg6hUPKkOlajQPF1WWJy3-x8UEgTvBELbqtjag3mtB61G";
    var genius_full_api = genius_api + genius_artist + genius_token;
    var song_bank = [];
    fetch(genius_full_api)

        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (var i = 0; i < data.response.hits.length; i++) {
                song_bank.push(data.response.hits[i].result.title);
            }
            save("song", song_bank);
        });
    return;
}

// Save optioin for local storage
function save(option, data) {
    if (option === "song") {
        localStorage.setItem("songs", JSON.stringify(data));
    } else if (option === "user") {
        localStorage.setItem("user", data);
    } else if (option === "score") {
        localStorage.setItem("score", data);
    } else if (option === "video_id") {
        localStorage.setItem("video_id", data);
    }
    return;
}

// Load function
function load(option) {
    if (option === "song") {
        return JSON.parse(localStorage.getItem("songs"));
    } else if (option === "user") {
        return localStorage.getItem("user");
    } else if (option === "score") {
        return localStorage.getItem("score");
    } else if (option === "video_id") {
        return localStorage.getItem("video_id");
    }
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
        save('user', users)
    }
    window.location.replace('./pages/game.html')
}

//high score button
function highScoreBtnHandler(event) {
    event.preventDefault()
    window.location.replace('./pages/score.html')
}