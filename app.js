let activeSlide = 1;
let arrowLeft = document.querySelector(".arrow-left");
let arrowRight = document.querySelector(".arrow-right");

let hideActiveSlide = () => {
  let activeElement = document.querySelector(".active");
  activeElement.classList.remove("active");
};

let showSlide = (slideNumber) => {
  hideActiveSlide();
  document.querySelector("#slide" + slideNumber).classList.add("active");
};

let showNextSlide = () => {
  if (activeSlide == 3) {
    activeSlide = 1;
  } else {
    activeSlide += 1;
  }
  showSlide(activeSlide);
};

let showPreviousSlide = () => {
  if (activeSlide == 1) {
    activeSlide = 3;
  } else {
    activeSlide -= 1;
  }
  showSlide(activeSlide);
};

for (let i = 1; i <= 3; i++) {
  let showSlideI = () => {
    showSlide(i);
    activeSlide = i;
  };
  document.querySelector("#dot" + i).addEventListener("click", showSlideI);
}

arrowRight.addEventListener("click", showNextSlide);
arrowLeft.addEventListener("click", showPreviousSlide);
