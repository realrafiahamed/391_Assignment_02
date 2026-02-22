var fortunes = [
    "True wisdom comes not from knowledge, but from understanding.",
    "Success is closer than you think.",
    "Hard work will open new doors.",
    "A positive mindset brings positive results.",
    "Your effort will soon pay off.",
    "Believe in your potential.",
    "Big opportunities are coming.",
    "Patience will reward you.",
    "Stay focused and strong.",
    "Great things take time."
];
alert("Page Refreshed & loaded successfully!");
window.onload = function () {
    var randomNumber = Math.floor(Math.random()*fortunes.length);
    document.getElementById("fortuneText").innerHTML = fortunes[randomNumber];
    style5();
};

function style1() {
    var box = document.getElementById("fortuneBox");
    var text = document.getElementById("fortuneText");
    box.style.backgroundColor = "#fff4a3";
    box.style.borderColor = "green";
    text.style.color = "red";
    text.style.fontSize = "18px";
    text.style.fontFamily = "Arial";
}
function style2() {
    var box = document.getElementById("fortuneBox");
    var text = document.getElementById("fortuneText");
    box.style.backgroundColor = "#fff2cc";
    box.style.borderColor = "#f1c232";
    text.style.color = "#b45f06";
    text.style.fontSize = "20px";
    text.style.fontFamily = "Georgia";
}
function style3() {
    var box = document.getElementById("fortuneBox");
    var text = document.getElementById("fortuneText");
    box.style.backgroundColor = "#cfe2f3";
    box.style.borderColor = "#3d85c6";
    text.style.color = "#073763";
    text.style.fontSize = "19px";
    text.style.fontFamily = "Verdana";
}
function style4() {
    var box = document.getElementById("fortuneBox");
    var text = document.getElementById("fortuneText");
    box.style.backgroundColor = "#fce5cd";
    box.style.borderColor = "#e69138";
    text.style.color = "#7f6000";
    text.style.fontSize = "21px";
    text.style.fontFamily = "Courier New";
}
function style5() {
    var box = document.getElementById("fortuneBox");
    var text = document.getElementById("fortuneText");
    box.style.backgroundColor = "#b24f4f"; 
    box.style.borderColor = "black";
    text.style.color = "white";
    text.style.fontSize = "18px";
    text.style.fontFamily = "monospace";
}