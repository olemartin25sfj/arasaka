document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  const circle = document.querySelector(".cursor");
  circle.style.left = `${x - 10}px`;
  circle.style.top = `${y - 10}px`;
});
const logo = document.querySelector(".logo");

logo.addEventListener("mouseover", () => {
  logo.style.transition = "all 0.5s";
  logo.style.color = "red"; // Endrer fargen på logoen til rød
  logo.style.transform = "scale(1.1)"; // Skalerer opp logoen litt
});

logo.addEventListener("mouseout", () => {
  logo.style.color = ""; // Tilbakestiller fargen
  logo.style.transform = ""; // Tilbakestiller skalerings-effekten
});
const tickerText = document.getElementById("ticker-text");
let text = tickerText.innerHTML;
tickerText.innerHTML = "";

setInterval(() => {
  tickerText.innerHTML += text.charAt(0);
  text = text.slice(1) + text.charAt(0);
}, 15); // Adjust the speed by changing the interval
