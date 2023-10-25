const aboutMe = window.document.querySelector(".about-me");
const display = window.getComputedStyle(aboutMe).display;
const mobileBtn = window.document.querySelector("#aboutMobile");
const desktopBtn = window.document.querySelector("#aboutDesktop");

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

mobileBtn.addEventListener(onclick, showAboutMe)
desktopBtn.addEventListener(onclick, showAboutMe)

window.onclick = function(event) {
  console.log(event.target)
}

