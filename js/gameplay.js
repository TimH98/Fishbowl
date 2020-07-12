function reloadScreen() {
    card = document.getElementById("cardText");
    card.innerText = cards[0];
    var remaining = cards.length;
    document.getElementById("counter").innerText = remaining + " cards remaining";
}

function endTurn() {
    const newTeam = team === "Red" ? "Blue" : "Red";
    sessionStorage.setItem("team", newTeam);
    sessionStorage.setItem("cardsRemaining", JSON.stringify(cards));
    location.href = "startRound.html";
}

var team = sessionStorage.getItem("team");

cards = JSON.parse(sessionStorage.getItem("cardsRemaining"));
cards = shuffle(cards);

reloadScreen();

// Detect swipe up to signal point
var swiper = new Swipe("#card");
var turnScore = 0;
swiper.onUp(function() {
    turnScore++;
    cards.shift();
    reloadScreen();
});
swiper.run();

// Pass button sends card to bottom of pile
var wait = false;
document.getElementById("pass").onclick = function() {
    if (!wait) {
        const tmp = cards[0];
        cards.shift();
        cards.push(tmp);
        reloadScreen();
        wait = true;
        setTimeout(function(){ wait = false; }, 200);
    }
}

// Timer
var mins = 0;
var secs = 10;
setInterval(function() {
    secs--;
    if (secs < 0) {
        secs += 60;
        mins--;
    }
    document.getElementById("timer").innerText = mins + ":" + ("0" + secs).substr(-2, 2);

    if (mins < 0) {
        endTurn();
    }
}, 1000)