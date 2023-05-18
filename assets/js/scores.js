// initial the element fom html
var bodyEl = document.querySelector('body')
var headerEl = bodyEl.children[0]
var mainEl = bodyEl.children[1]
var listEl = mainEl.children[0].children[0]
var goHomeBtn = mainEl.children[0].children[1]
var clearScoresBtn = mainEl.children[0].children[2]


console.log(listEl, goHomeBtn)
// loading page
scorePageLoad()

// button event listener
goHomeBtn.addEventListener('click', goHomeBtn_handler)
clearScoresBtn.addEventListener('click', clearScoresBtn_handler)



// Button handler functions
function goHomeBtn_handler() {
    window.location.replace('../index.html')
}
function clearScoresBtn_handler() {
    save('user', [])
    save('score', [])
    window.location.reload()
}

// display the scores page
function display(users, scores) {
    console.log(users, scores)
    for (var i = 0; i < users.length; i++) {
        var liEl = document.createElement('li')
        liEl.textContent = users[i] + ": " + scores[i]
        listEl.append(liEl)
    }
}
// loading page function
function scorePageLoad() {
    var users = load('user')
    var scores = users
    display(users, scores)
}

