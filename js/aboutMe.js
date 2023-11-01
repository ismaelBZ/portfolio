const aboutMe = window.document.querySelector(".about-me");
const display = window.getComputedStyle(aboutMe).display;
const mobileBtn = window.document.querySelector("#aboutMobile");
const desktopBtn = window.document.querySelector("#aboutDesktop");
const aboutInfo = window.document.querySelectorAll(".about-info");
const devNameAndOccupation = window.document.querySelector(".dev-name-occupation")
const aboutMeInfoWrapper = window.document.querySelector(".about-me-info-wrapper")

// ABOUT ME HEIGHT SETTINGS

aboutMe.style.height = `${window.document.scrollingElement.offsetHeight + 50}px`;
aboutMeInfoWrapper.style.minHeight = `${parseInt(window.getComputedStyle(devNameAndOccupation).height) + 50}px`

function adjustDivWrapperHeigth() {
  aboutMe.style.height = `${window.document.scrollingElement.offsetHeight + 50}px`
}
function adjustAboutMeInfoWrapperHeight() {
  aboutMeInfoWrapper.style.minHeight = `${ 
                                      parseInt(window.getComputedStyle(devNameAndOccupation).height) + 50
                                    }px`
  console.log(`Adjust the height`);
}

window.onresize = adjustDivWrapperHeigth;
window.onresize = adjustAboutMeInfoWrapperHeight;


// SHOW/OPEN ABOUT ME

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

// HIDE/CLOSE ABOUT ME 

window.onclick = function(event) { 
  if (event.target === aboutMe) {
    aboutMe.style.display = "none"
  }
}



