var cards = [];

document.getElementById("addCard").onclick = function() {
    const cardText = document.getElementById("cardText");
    cards.push(cardText.value);
    cardText.value = null;
    document.getElementById("counter").innerHTML = cards.length + " cards in deck";
}

document.getElementById("startGame").onclick = function () {
    // Setup game variables and start
    sessionStorage.setItem("cards", JSON.stringify(cards));
    sessionStorage.setItem("cardsRemaining", JSON.stringify(cards));
    sessionStorage.setItem("roundNum", 1);
    sessionStorage.setItem("team", "Red");
    sessionStorage.setItem("redScore", 0);
    sessionStorage.setItem("blueScore", 0);
    location.href = "startRound.html";
}