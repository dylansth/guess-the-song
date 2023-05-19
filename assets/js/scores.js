// initial the element fom html

var listEl = document.getElementById('scoreUl')
var goHomeBtn = document.getElementById('thePlayagain')
var clearScoresBtn = document.getElementById('theClearscore')

console.log(listEl, goHomeBtn)
// loading page
scorePageLoad()

// button event listener
goHomeBtn.addEventListener('click', goHomeBtn_handler)
clearScoresBtn.addEventListener('click', clearScoresBtn_handler)
play_again_btn.addEventListener("click", play_again_handler)


// Button handler functions
function goHomeBtn_handler() {
    window.location.replace('../index.html')
}

function clearScoresBtn_handler() {
    save('user', [])
    save('score', [])
    window.location.reload()
}

function play_again_handler() {
    window.location.replace("../pages/game.html");
}

// display the scores page
function display(users, scores) {
    console.log(users, scores)
    for (var i = 0; i < users.length || i < scores.length; i++) {
        var liEl = document.createElement('li')
        liEl.setAttribute('class', "list-group-item")
        liEl.textContent = users[i] + ": " + scores[i]
        listEl.append(liEl)
    }
}
// loading page function
function scorePageLoad() {
    var users = load('user')
    var scores = load('score')
    // var scores = [1, 2, 3, 4, 5]
    if (users, scores) {
        display(users, scores)
    } else {
        console.error('localStorage Connection losse')
    }
}

