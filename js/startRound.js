const round = sessionStorage.getItem("roundNum");
const remaining = JSON.parse(sessionStorage.getItem("cardsRemaining")).length;

document.getElementById("roundNum").innerText = "Round " + round;
document.getElementById("team").innerText = sessionStorage.getItem("team") + " Team";
document.getElementById("counter").innerText = remaining + " cards remaining";

const rules = [
    "This round, you may say anything other than the word itself",
    "This round, you may only say one word",
    "This round, you cannot speak - You may only do actions"
]

document.getElementById("rules").innerText = rules[round-1];

document.getElementById("startTurn").onclick = function() {
    location.href = "gameplay.html";
}