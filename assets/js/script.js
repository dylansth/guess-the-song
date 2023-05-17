
function getApi() {
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
    localStorage.setItem("song_bank", JSON.stringify(myBlogs));
    return;
}
getApi();
