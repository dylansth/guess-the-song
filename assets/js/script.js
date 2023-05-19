
// initial the html elements
var playBtn = document.getElementById('play-btn')
var highScoreBtn = document.getElementById('high-score-btn')
var userInput = document.getElementById('user-input')
var reload = document.getElementById("reload-btn");

// prevent form loading in other pages
if ((window.location.href).includes('index.html')) {
    // console.log((window.location.href).includes('index.html'))
    playBtn.addEventListener('click', playBtnHandler)
    highScoreBtn.addEventListener('click', highScoreBtnHandler)
}




var genius_artist = "coldplay";

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
            save("score", []);
        });
    return;
}

// To get the specific video id using yt api
function get_youtube_api() {
    // Basic variables for the youtube_api 
    var youtube_api = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=";
    var youtube_token = "&key=AIzaSyAFbAljFh9flAoTW8ufjDQERNETaUUkIh8";
    // Loading the songs that the user wants to search 
    var song = load("song_q"); 
    var video_title = [];
    var video_link = [];
    var youtube = "https://www.youtube.com/watch?v=";
    // A fetch loops that runs 10 times that matches the 10 songs each artist has
    for (var i = 0; i < 10; i ++) {  
        // Replacing the search with the search parameters of the api
        var search = song[i] + " " + genius_artist + " lyrics";
        search = search.replaceAll(" ", "%20")
        var youtube_full_api = youtube_api + search + youtube_token;
        // Feching one link at a time
        fetch(youtube_full_api)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var title = data.items[0].snippet.title;
            var id = youtube + data.items[0].id.videoId;
            video_title.push(title);
            video_link.push(id);
            // Updating the song and song link to the local storage
            save("song_q", video_title);
            save("song_a", video_title);
            save("song_o", video_title);
            save("video_link", video_link);
            save("video_link_o", video_link);
        }); 
    }
    return;
}

// Save optioin for local storage
function save(option, data) {
    // If options is equal to a certain parameter, then the data is saved
    if (option === "song_q") {
        localStorage.setItem("song_q", JSON.stringify(data));
    } else if (option === "song_a") {
        localStorage.setItem("song_a", JSON.stringify(data));
    } else if (option === "song_o") {
        localStorage.setItem("song_o", JSON.stringify(data));
    } else if (option === "user") {
        localStorage.setItem("user", JSON.stringify(data));
    } else if (option === "score") {
        localStorage.setItem("score", JSON.stringify(data));
    } else if (option === "video_id") {
        localStorage.setItem("video_id", JSON.stringify(data));
    } else if (option === "video_link") {
        localStorage.setItem("video_link", JSON.stringify(data));
    } else if (option === "video_link_o") {
        localStorage.setItem("video_link_o", JSON.stringify(data));
    } 
    return;
}

// Load function
function load(option) {
    // If options is equal to a certain parameter, then the data is loaded 
    if (option === "song_q") {
        return JSON.parse(localStorage.getItem("song_q"));
    } else if (option === "song_a") {
        return JSON.parse(localStorage.getItem("song_a"));
    } else if (option === "song_o") {
        return JSON.parse(localStorage.getItem("song_o"));
    } else if (option === "user") {
        return JSON.parse(localStorage.getItem("user"));
    } else if (option === "score") {
        return JSON.parse(localStorage.getItem("score"));
    } else if (option === "video_id") {
        return JSON.parse(localStorage.getItem("video_id"));
    } else if (option === "video_link") {
        return JSON.parse(localStorage.getItem("video_link"));
    } else if (option === "video_link_o") {
        return JSON.parse(localStorage.getItem("video_link_o"));
    }
    return;
}



// handler
// play button
function playBtnHandler(event) {
    event.preventDefault()
    var userName = (userInput.value)
    if (userName === '') {
        userName = 'UNKOWN'
    }
    userName = userName.toUpperCase()
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

reload.addEventListener("click", function(event) {
    event.preventDefault();
    location.reload();
})

get_genius_api();
get_youtube_api();