let homeScore = 0
let guestScore = 0

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

// Home score
function add1ToHome () {
    homeScore += 1
    homeScoreEl.textContent = homeScore
    checkForLeader()
}

function add2ToHome () {
    homeScore += 2
    homeScoreEl.textContent = homeScore
    checkForLeader()
}

function add3ToHome () {
    homeScore += 3
    homeScoreEl.textContent = homeScore
    checkForLeader()
}

// Guest score
function add1ToGuest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
    checkForLeader()
}

function add2ToGuest () {
    guestScore += 2
    guestScoreEl.textContent = guestScore
    checkForLeader()
}

function add3ToGuest () {
    guestScore += 3
    guestScoreEl.textContent = guestScore
    checkForLeader()
}

// New Game Button

function newGame() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
    homeScoreEl.style.border ="none";
    guestScoreEl.style.border = "none";
}


function checkForLeader() {
    if (guestScore > homeScore) {
            guestScoreEl.style.border = "2px solid white";
            homeScoreEl.style.border = "none";
        } else if (homeScore > guestScore) {
            homeScoreEl.style.border ="2px solid white";
            guestScoreEl.style.border = "none";
        } else if (homeScore = guestScore) {
            homeScoreEl.style.border ="none";
            guestScoreEl.style.border = "none";
        }
}