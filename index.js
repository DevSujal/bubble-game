makeBubble = () => {
  let bubbles = "";

  for (let i = 0; i < 108; i++) {
    bubbles += `<div class="bubble">${
       Math.floor(Math.random() * 10)
    }</div>`;
  }
  document.querySelector("#pbtm").innerHTML = bubbles;
};

onTimer = (i) => {
  let timer = setInterval(() => {
    if (i <= 0) {
      clearInterval(timer);
      document.querySelector("#pbtm").innerHTML = "";
    }
    document.querySelector("#timer").innerHTML = i;
    i--;
  }, 1000);
};
updateScore = () => {
  let score = document.querySelector("#score").textContent;
  document.querySelector("#score").textContent = +score + 10;
};
hit = () => {
  document.querySelector("#hit").textContent = Math.floor(Math.random() * 10);
};

document.querySelector("#pbtm").addEventListener("click", (details) => {
  let num1 = details.target.textContent;
  let num2 = document.querySelector("#hit").textContent;
    if (num1 == num2) {
        updateScore();
        hit()
        makeBubble()
      } else {
          console.log("You missed!");
      }
});
// start = () => {
hit();
makeBubble();
onTimer(60);
// };
