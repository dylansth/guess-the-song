// initial the element fom html
var bodyEl = document.querySelector('body')
var headerEl = bodyEl.children[0]
var mainEl = bodyEl.children[1]
var listEl = mainEl.children[0].children[0]
var goHomeBtn = mainEl.children[0].children[1]
var clearScoresBtn = mainEl.children[0].children[2]
var scores = ['Tony', 'Milad', 'Dylan']

console.log(listEl, goHomeBtn)
// loading page
scorePageLoad()

// button event listener
goHomeBtn.addEventListener('click', goHomeBtn_handler)
clearScoresBtn.addEventListener('click', clearScoresBtn_handler)



// Button handler functions
function goHomeBtn_handler() {
    console.log('goHomeBtn')
}
function clearScoresBtn_handler() {
    console.log('clearScoresBtn')
}

// display the scores page
function display(list) {
    console.log(list)
    for (var i = 0; i < list.length; i++) {
        var liEl = document.createElement('li')
        liEl.textContent = list[i]
        listEl.append(liEl)
    }
}
// loading page function
function scorePageLoad() {
    display(scores)
}

