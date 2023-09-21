const timer = document.getElementById("timer");
const imgSmall = document.querySelectorAll(".img_small");
const imgBig = document.querySelectorAll(".img_big");
const btnBuy = document.querySelector(".main_buy_button");
const colorBtn = document.getElementById("color");
const sizeBtn = document.getElementById("size");
const colorMenu = document.getElementById("menu_color");
const sizeMenu = document.getElementById("menu_size");

const choiceSize = document.querySelectorAll(".menu_size");
const choiceColor = document.querySelectorAll(".menu_color");
const colorActive = document.getElementById("menu_color_active");
const sizeActive = document.getElementById("menu_size_active");

for (el of choiceColor) {
  el.addEventListener("click", (el1) => {
    choiceColor.forEach((item) => (item.style.color = ""));
    el1.target.style.color = "#37d997";
    const text = el1.target.textContent;
    colorActive.innerText = text;
    colorMenu.classList.remove("active");
    colorBtn.src = "./img/down.png";
  });
}

for (el of choiceSize) {
  el.addEventListener("click", (el1) => {
    const text = el1.target.textContent;
    choiceSize.forEach((item) => (item.style.color = ""));
    el1.target.style.color = "#37d997";
    sizeActive.innerText = text;
    sizeMenu.classList.remove("active");
    sizeBtn.src = "./img/down.png";
  });
}

colorBtn.addEventListener("click", () => {
  colorMenu.classList.toggle("active");
  if (colorMenu.className.includes("active")) {
    colorBtn.src = "./img/up.png";
  } else {
    colorBtn.src = "./img/down.png";
  }
});

sizeBtn.addEventListener("click", () => {
  sizeMenu.classList.toggle("active");
  if (sizeMenu.className.includes("active")) {
    sizeBtn.src = "./img/up.png";
  } else {
    sizeBtn.src = "./img/down.png";
  }
});

btnBuy.addEventListener("click", () => {
  window.location.href = "https://www.youtube.com/";
});

const anim = [
  { transform: "rotate(0) scale(1)", opacity: 1 },
  { transform: "rotate(345deg) scale(0.2)", opacity: 0 },
];

const activeBigImg = (n) => {
  for (img of imgBig) {
    img.classList.remove("active");
  }
  imgBig[n].animate(anim, {
    duration: 500,
    direction: "reverse",
  });
  imgBig[n].classList.add("active");
};

const activeSmallImg = (n) => {
  for (img of imgSmall) {
    img.classList.remove("img_active");
  }
  imgSmall[n].classList.add("img_active");
};

const prepereCurrentSlide = (ind) => {
  activeBigImg(ind);
  activeSmallImg(ind);
};

imgSmall.forEach((item, indexImg) => {
  item.addEventListener("click", () => {
    index = indexImg;
    prepereCurrentSlide(index);
  });
});

let timerInterval;
let countdownDate = new Date().setSeconds(new Date().getSeconds() + 17477);

const startCountdown = () => {
  const now = new Date().getTime();
  const countdown = new Date(countdownDate).getTime();

  const difference = (countdown - now) / 1000;

  let hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
  let minutes = Math.floor((difference % (60 * 60)) / 60);
  let seconds = Math.floor(difference % 60);

  if (hours.toString().length === 1) {
    hours = `0${hours}`;
  }
  if (minutes.toString().length === 1) {
    minutes = `0${minutes}`;
  }
  if (seconds.toString().length === 1) {
    seconds = `0${seconds}`;
  }

  timer.innerHTML = `${hours}:${minutes}:${seconds}`;
};

window.addEventListener("load", () => {
  startCountdown();
  timerInterval = setInterval(startCountdown, 1000);
});
