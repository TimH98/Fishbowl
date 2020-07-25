function reloadScreen() {
    var remaining = cards.length;
    if (remaining === 0) {
        endRound();
    } else {
        document.getElementById("cardText").innerText = cards[0];
        if (remaining === 1) {
            document.getElementById("counter").innerText = "1 card remaining";
        } else {
            document.getElementById("counter").innerText = remaining + " cards remaining";
        }
    }
}

function endPhase() {
    const phaseNum = parseInt(sessionStorage.getItem("phaseNum"));
    if (phaseNum === 3) {
        location.href = "endGame.html";
    } else {
        sessionStorage.setItem("phaseNum", 
            phaseNum + 1);
        sessionStorage.setItem("cardsRemaining", 
            sessionStorage.getItem("cards"));
        location.href = "startRound.html";
    }
}

function endRound() {
    const newTeam = team === "Red" ? "Blue" : "Red";
    sessionStorage.setItem("team", newTeam);

    if (team === "Red") {
        sessionStorage.setItem("redScore", 
            parseInt(sessionStorage.getItem("redScore")) + roundScore);
    } else {
        sessionStorage.setItem("blueScore", 
            parseInt(sessionStorage.getItem("blueScore")) + roundScore);
    }

    if (cards.length > 0) {
        sessionStorage.setItem("cardsRemaining", JSON.stringify(cards));
        location.href = "startRound.html";
    } else {
        endPhase();
    }
}

var team = sessionStorage.getItem("team");
var roundScore = 0;

cards = JSON.parse(sessionStorage.getItem("cardsRemaining"));
cards = shuffle(cards);

/*
// Detect swipe up to signal point
var swiper = new Swipe("#card");
swiper.onUp(function() {
    roundScore++;
    cards.shift();
    reloadScreen();
});

swiper.run();
*/

var waitGuess = false;
document.getElementById("guessed").onclick = function() {
    if (!waitGuess) {
        roundScore++;
        cards.shift();
        reloadScreen();
        waitGuess = true;
        setTimeout(function(){ waitGuess = false; }, 200);
    }
};

// Pass button sends card to bottom of pile
var waitPass = false;
document.getElementById("pass").onclick = function() {
    if (!waitPass) {
        const tmp = cards[0];
        cards.shift();
        cards.push(tmp);
        reloadScreen();
        waitPass = true;
        setTimeout(function(){ waitPass = false; }, 200);
    }
}

// Timer
var mins = 1;
var secs = 0;
document.getElementById("timer").innerText = mins + ":" + ("0" + secs).substr(-2, 2);
setInterval(function() {
    secs--;
    if (secs < 0) {
        secs += 60;
        mins--;
    }
    if (mins < 0) {
        endRound();
    } else {
        document.getElementById("timer").innerText = mins + ":" + ("0" + secs).substr(-2, 2);
    }
}, 1000)

reloadScreen();