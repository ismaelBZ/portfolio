const aboutMe = window.document.querySelector(".about-me");
const display = window.getComputedStyle(aboutMe).display;
const mobileBtn = window.document.querySelector("#aboutMobile");
const desktopBtn = window.document.querySelector("#aboutDesktop");
const aboutInfo = window.document.querySelectorAll(".about-info")

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

mobileBtn.onclick = showAboutMe;
desktopBtn.addEventListener("click", showAboutMe)

window.onclick = function(event) {
  if (event.target === aboutMe) {
    aboutMe.style.display = "none"
  }
}

