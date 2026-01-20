let yesScale = 1;

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const sadText = document.getElementById("sadText");
const area = document.querySelector(".button-area");

function moveNoButton() {
  const areaRect = area.getBoundingClientRect();

  const x = Math.random() * (areaRect.width - noBtn.offsetWidth);
  const y = Math.random() * (areaRect.height - noBtn.offsetHeight);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  yesScale += 0.25;
  yesBtn.style.transform = `scale(${yesScale})`;
  sadText.textContent = "do you not love me anymore 😢";
}

// Desktop hover
noBtn.addEventListener("mouseover", moveNoButton);

// Mobile tap
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});

function yes() {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      text-align:center;
      padding:20px;
      background-color:#ffebf0;
      font-family:Arial,sans-serif;
    ">
      <h1 style="font-size:1.8rem;">
        the first to many valentines day baby! 💕<br><br>
        u and me forever hehe,<br>
        see u on vdays my love! 💘
      </h1>
    </div>
  `;
}
