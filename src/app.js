// Variables
const body = document.querySelector("body");
const p = document.querySelectorAll("p");
const socials = document.querySelectorAll(".socials-item");
const stats = document.querySelectorAll(".stats-el");
const followers = document.querySelectorAll(".socials-item__followers");
const overview = document.querySelector("h2");
const statsTitle = document.querySelectorAll(".stats-el__title");
const toggle = document.querySelector(".toggle");
const toggleSwitch = document.querySelector(".toggle-switch");

function darkMode() {
    toggleSwitch.classList.toggle("dark");
    toggle.classList.toggle("dark");
    body.classList.toggle("dark");

    overview.classList.toggle("dark");
    p.forEach((e) => e.classList.toggle("dark"));
    statsTitle.forEach((stat) => stat.classList.toggle("dark"));
    followers.forEach((follower) => follower.classList.toggle("dark"));
    socials.forEach((el) => el.classList.toggle("dark"));
    stats.forEach((stat) => stat.classList.toggle("dark"));
}

//listeners

toggle.addEventListener("click", darkMode);
