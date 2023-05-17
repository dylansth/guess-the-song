var url = "https://api.genius.com/search?q=";
var artist = "ladygaga";
var token = "&access_token=wAfiQh7brLmlaaRzG7qxg6hUPKkOlajQPF1WWJy3-x8UEgTvBELbqtjag3mtB61G";
var full_url = url + artist + token;
var song = [];

function getApi() {
    fetch(full_url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log("Songs: ")
        for (var i = 0; i < data.response.hits.length; i ++) {
            song.push(data.response.hits[i].result.title);
        }
    });
}
getApi();

console.log(song);
localStorage.setItem("songs", JSON.stringify(myBlogs));