day = new Date().getDay();
let announcement = document.getElementById("friday");

if (day == 5) {
    announcement.style.display = "block";
}
else {
    announcement.style.display = "none";
}

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive')
}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {
    if (window.innerWidth > 760) mainnav.classList.remove('responsive')
};

let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};
document.getElementById("currentDate").textContent = new Date().toLocaleDateString("en-GB", options);