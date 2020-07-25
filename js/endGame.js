var winnerText;
const redScore = sessionStorage.getItem("redScore");
const blueScore = sessionStorage.getItem("blueScore");
document.getElementById("redScore").innerText = redScore;
document.getElementById("blueScore").innerText = blueScore;

if (redScore > blueScore) {
    winnerText = "Red Wins!";
} else if (redScore < blueScore) {
    winnerText = "Blue Wins!";
} else {
    winnerText = "You Tied!";
}

document.getElementById("winner").innerText = winnerText;

