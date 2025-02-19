const catalogLink = document.querySelector(".catalog");
const aboutLink = document.querySelector(".about");

catalogLink.addEventListener("click", (e) => {
    e.preventDefault();
    const catalogOffset = document.getElementById("catalog").offsetTop;
    window.scrollTo(0, catalogOffset - 57);
});

aboutLink.addEventListener("click", (e) => {
    e.preventDefault();
    const aboutOffset = document.getElementById("about").offsetTop;
    console.log(aboutOffset);
    window.scrollTo(0, aboutOffset - 56);
});


