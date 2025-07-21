function showMessage() {
  const quotes = [
    "I am the king of Five Nights At Freddys!",
    "Im king of the squrrels!",
    "you do you, and ill do me, and we wont do each other....probably.",
    "I am a man who owns five ovens!",
    "What I do is temporary, but what I leave behind is forever."
  ];

  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteBox").textContent = quotes[random];
}

function displayPersonalInfo() {
  document.getElementById("sport").textContent = person.sport;
  document.getElementById("pet").textContent = person.pet;
}

window.onload = function () {
  changeBackgroundColor();
  highlightTable();
  displayPersonalInfo();
};

function changeBackgroundColor() {
  document.body.style.backgroundColor = '#e6f7ff';
}

function highlightTable() {
  const rows = document.querySelectorAll("tbody tr");
  rows.forEach(row => row.style.backgroundColor = "#ffffcc");
}

