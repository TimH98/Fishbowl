var cards = [];

document.getElementById("addCard").onclick = function() {
    const cardText = document.getElementById("cardText");
    if (cardText.value.length > 0) {
        cards.push(cardText.value);
        cardText.value = null;
        if (cards.length === 1) {
            document.getElementById("counter").innerText = "1 card in deck";
        } else {
            document.getElementById("counter").innerText = cards.length + " cards in deck";
        }
    }
}

document.getElementById("startGame").onclick = function () {
    // Setup game variables and start
    sessionStorage.setItem("cards", JSON.stringify(cards));
    sessionStorage.setItem("cardsRemaining", JSON.stringify(cards));
    sessionStorage.setItem("phaseNum", 1);
    sessionStorage.setItem("team", "Red");
    sessionStorage.setItem("redScore", 0);
    sessionStorage.setItem("blueScore", 0);
    location.href = "startRound.html";
}

document.getElementById("cardText").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("addCard").click();
    }
});

document.getElementById("cardForm").addEventListener("submit", function(e) {
    e.preventDefault();
})