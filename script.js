/ Get all pages
const welcomePage = document.getElementById("welcomePage");
const questionPage = document.getElementById("questionPage");
const galleryPage = document.getElementById("galleryPage");

// Buttons
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// Video
const video = document.getElementById("birthdayVideo");

// Show one page at a time
function showPage(page){

welcomePage.classList.remove("active");
questionPage.classList.remove("active");
galleryPage.classList.remove("active");

page.classList.add("active");

}

// --------------------
// Welcome Screen
// --------------------

welcomePage.addEventListener("click",()=>{

showPage(questionPage);

});

// --------------------
// YES Button
// --------------------

yesBtn.addEventListener("click",()=>{

showPage(galleryPage);

});

// --------------------
// NO Button Runs Away
// --------------------

function moveButton(){

const maxX = window.innerWidth - noBtn.offsetWidth;

const maxY = window.innerHeight - noBtn.offsetHeight;

const randomX = Math.random()*maxX;

const randomY = Math.random()*maxY;

noBtn.style.position="absolute";

noBtn.style.left=randomX+"px";

noBtn.style.top=randomY+"px";

}

noBtn.addEventListener("mouseenter",moveButton);

noBtn.addEventListener("touchstart",(e)=>{

e.preventDefault();

moveButton();

});

// --------------------
// Video Finished
// --------------------
// --------------------
// Video Finished
// --------------------

const endingPage = document.getElementById("endingPage");

video.addEventListener("ended", () => {
    showPage(endingPage);
});