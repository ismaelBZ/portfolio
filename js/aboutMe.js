const aboutMe = window.document.querySelector(".about-me");
const display = window.getComputedStyle(aboutMe).display;
const mobileBtn = window.document.querySelector("#aboutMobile");
const desktopBtn = window.document.querySelector("#aboutDesktop");
const aboutInfo = window.document.querySelectorAll(".about-info");

// ABOUT ME HEIGHT
aboutMe.style.height = `${window.document.scrollingElement.offsetHeight + 50}px`;

function showAboutMe() {
  const aboutMe = window.document.querySelector(".about-me");
  const display = window.getComputedStyle(aboutMe).display;
  if (display === "none") {
    aboutMe.style.display = "block";
  } else if (display === "block") {
    aboutMe.style.display = "none";
  } else {
    return
  }
}

function adjustDivWrapperHeigth() {
  aboutMe.style.height = `${window.document.scrollingElement.offsetHeight + 50}px`
  console.log(`${(window.document.scrollingElement.offsetHeight)}px`);
}

mobileBtn.onclick = showAboutMe;
desktopBtn.addEventListener("click", showAboutMe)

window.onresize = adjustDivWrapperHeigth;

window.onclick = function(event) {
  if (event.target === aboutMe) {
    aboutMe.style.display = "none"
  }
}

