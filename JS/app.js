// Mobile Menu
const mobileHamburger = document.querySelector(".mobile-hamburger");
const navMenu = document.querySelector(".nav-menu");

mobileHamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    mobileHamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    mobileHamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// Meditation App 
const song = document.querySelector(".song");
const play = document.querySelector(".play");
const outline = document.querySelector(".moving-outline circle");
const video = document.querySelector(".vid-container video");
//Sounds
const sounds = document.querySelectorAll(".sound-picker button");
//Time Display
const timeDisplay = document.querySelector(".time-display");
// Circle Length
const outlineLength = outline.getTotalLength();
//Duration
const timeSelect = document.querySelectorAll(".time-select button");
let fakeDuration = 600;

outline.style.strokeDasharray = outlineLength;
outline.style.strokeDashoffset = outlineLength;
timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
  fakeDuration % 60
)}`;

// Sound Selection

sounds.forEach(sound => {
    sound.addEventListener("click", function () {
        song.src = this.getAttribute("data-sound");
        video.src = this.getAttribute("data-video");
        checkPlaying(song);
    });
});
// Play Sound
play.addEventListener("click", function () {
    checkPlaying(song);
});


const restartSong = song => {
    let currentTime = song.currentTime;
    song.currentTime = 0;
    console.log("ciao")

}

// Time Selection
timeSelect.forEach(option => {
    option.addEventListener("click", function () {
        fakeDuration = this.getAttribute("data-time");
        timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
      fakeDuration % 60
    )}`;
    });
});

// Play & Pause
const checkPlaying = song => {
    if (song.paused) {
        song.play();
        video.play();
        play.src = "Images/pause.svg";
    } else {
        song.pause();
        video.pause();
        play.src = "Images/play.svg";
    }
};

// Circle Animation
song.ontimeupdate = function () {
    let currentTime = song.currentTime;
    let elapsed = fakeDuration - currentTime;
    let seconds = Math.floor(elapsed % 60);
    let minutes = Math.floor(elapsed / 60);
    timeDisplay.textContent = `${minutes}:${seconds}`;
    let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
    outline.style.strokeDashoffset = progress;

    if (currentTime >= fakeDuration) {
        song.pause();
        song.currentTime = 0;
        play.src = "Images/play.svg";
        video.pause();
    }
};

// Contact Page
const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const userMessage = document.getElementById('message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

});

function checkInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const userMessageValue = userMessage.value.trim();

    if (firstNameValue === '') {
        setErrorFor(firstName, 'First Name Cannot be Blank')
    } else {
        setSuccessFor(firstNameValue)
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
}