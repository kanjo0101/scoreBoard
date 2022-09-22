let score = 0
let homeScoreEl = document.getElementById("home-scoreel")
let guestScoreEl = document.getElementById("guest-scoreel")


function addNum1(){
    score
    score += 1
    homeScoreEl.textContent = score
    }
    
function addNum2(){
    score
    score += 2
    homeScoreEl.textContent = score
}

function addNum3(){
    score
    score += 3
    homeScoreEl.textContent = score
}

function addGuestNum1(){
    score
    score += 1
    guestScoreEl.textContent = score
    
}
function addGuestNum2(){
    score
    score += 2
    guestScoreEl.textContent = score 
}
function addGuestNum3(){
    score
    score += 3
    guestScoreEl.textContent = score
}
function resetScores(){
    score = 0
    homeScoreEl.textContent = score
    guestScoreEl.textContent = score
}