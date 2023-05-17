


function get_yt_api() {
    var yt_api = "https:youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=";
    var search = "instrumental";
    var yt_token = "AIzaSyA2ldRFpHlI-TC8goSG6rVQFJBWQzVLyzM";
    var yt_full_api = yt_api + search + yt_token;
    var song = localStorage.getItem()
}


// Get API from genius api 
function get_genius_api() {
    var genius_api = "https://api.genius.com/search?q=";
    var genius_artist = "ladygaga";
    var genius_token = "&access_token=wAfiQh7brLmlaaRzG7qxg6hUPKkOlajQPF1WWJy3-x8UEgTvBELbqtjag3mtB61G";
    var genius_full_api = genius_api + genius_artist + genius_token;
    var song_bank = [];
    fetch(genius_full_api)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log("Songs: ")
        for (var i = 0; i < data.response.hits.length; i ++) {
            song_bank.push(data.response.hits[i].result.title);
        }
    });
    save("song", song_bank);
    return;
}

// Save optioin for local storage
function save(option, data) {
    if (option === "song") {
        localStorage.setItem("song_bank", JSON.stringify(data));
    } else if (option === "user") {
        localStorage.setItem("user", data);
    } else if (option === "score") {
        localStorage.setItem("score", data);
    }
} 
get_genius_api();
get_yt_api();
