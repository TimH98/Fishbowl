const phase = sessionStorage.getItem("phaseNum");
const remaining = JSON.parse(sessionStorage.getItem("cardsRemaining")).length;

document.getElementById("phaseNum").innerText = "Phase " + phase;
document.getElementById("team").innerText = sessionStorage.getItem("team") + " Team";

if (remaining === 1) {
    document.getElementById("counter").innerText = "1 card remaining";
} else {
    document.getElementById("counter").innerText = remaining + " cards remaining";
}

const rules = [
    "This round, you may say anything other than the word itself",
    "This round, you may only say one word",
    "This round, you cannot speak - You may only do actions"
]

document.getElementById("rules").innerText = rules[phase-1];

document.getElementById("startRound").onclick = function() {
    location.href = "gameplay.html";
}

document.getElementById("redScore").innerText = sessionStorage.getItem("redScore");
document.getElementById("blueScore").innerText = sessionStorage.getItem("blueScore");