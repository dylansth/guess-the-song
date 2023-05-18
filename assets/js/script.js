// var frame = document.getElementById("video");
// frame.setAttribute("src", get_youtube_video());
var genius_artist = "alanwalker";

// Generate website
function get_youtube_video() {
    var youtube = "https://www.youtube.com/watch?v=";
    var youtube_links = [];
    var youtube_ids = load("video_id");
    for (var i = 0; i < 10; i ++) {
        var youtube_link = youtube + youtube_ids[i];
        youtube_links.push(youtube_link);
    }
    save("video_link", youtube_links)
}

// To get the specific video id using yt api
function get_youtube_api() {
    // // Youtube api root
    // var youtube_api = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=";
    // // Empty array that stores all yt links
    // var youtube_ids = [];
    // // 
    // var song = load("song");
    // // Fetch 10 times because that is all the songs per artist
    // for (var i = 0; i < 10; i ++) {
    //     // Making the specific search for the yt api
    //     var search = song[i] + " " + genius_artist + " Instrumental";
    //     // Replacing the original search to the with yt standards
    //     search = search.replaceAll(" ", "%20")
    //     // The yt api key
    //     var youtube_token = "&key=AIzaSyCkGs7BbWf7YcoBdu9Waq6C3rlusyZisyw";
    //     // Making the full yt api 
    //     var youtube_full_api = youtube_api + search + youtube_token;
    //     // Fetching the link 
    //     fetch(youtube_full_api)
    //     .then(function (response) {
    //         return response.json();
    //     })
    //     .then(function (data) {
    //         youtube_ids.push(search + data.items[0].id.videoId);
    //         save("video_id", youtube_ids)
    //     });
    // }
    // return;
    var video_id = ["Rmtx9slmodw", "sK89EOD9Klw&ab", "W9F5xHWfmPs", "f1auh7D0NF4", "Yp7etMffYAc", "1RGsQVmkq2U", "lQFIe5STi3M", "s944sDlARUk", "YubPf3N26KY", "x6hWKp95Kp8"];
    save("video_id", video_id)
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
        for (var i = 0; i < data.response.hits.length; i ++) {
            song_bank.push(data.response.hits[i].result.title);
        }
        // Storing all the songs in a local storage
        save("song", song_bank);
    });
    return;    
}

// Save optioin for local storage
function save(option, data) {
    // If options is equal to a certain parameter, then the data is saved
    if (option === "song") {
        localStorage.setItem("song", JSON.stringify(data));
    } else if (option === "user") {
        localStorage.setItem("user", data);
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
    if (option === "song") {
        return JSON.parse(localStorage.getItem("song"));
    } else if (option === "user") {
        return localStorage.getItem("user");
    } else if (option === "score") {
        return localStorage.getItem("score");
    } else if (option === "video_id") {
        return JSON.parse(localStorage.getItem("video_id"));
    } else if (option === "video_link") {
        return JSON.parse(localStorage.getItem("video_link"));
    } 
}

get_youtube_api();
get_genius_api();
get_youtube_video();

