//Variables
const startStop = document.getElementById('startStop');
let interval;
let direction = 1; 
let speed = 2; 
let position = 0;

//Functions
const showHideNav = () => {
    const navItems = document.getElementById("nav-items");
    const arrow = document.querySelector("#hamburger .arrow");
    
    navItems.classList.toggle("hide-small");
    if (navItems.classList.contains("hide-small")) {
        arrow.innerHTML = "&#9660;";
    } else {
        arrow.innerHTML = "&#9650;";
    }
};

const exercise1 = (e) => {
    e.preventDefault(); 
    document.getElementById("bounce").classList.add("show-content");
    document.getElementById("bounce").classList.remove("hide-content");
    document.getElementById("yoga").classList.remove("show-content");
    document.getElementById("yoga").classList.add("hide-content");
};
const exercise2 = (e) => {
    e.preventDefault(); 
    document.getElementById("yoga").classList.add("show-content");
    document.getElementById("yoga").classList.remove("hide-content");
    document.getElementById("bounce").classList.remove("show-content");
    document.getElementById("bounce").classList.add("hide-content");
};

const bounceBall = () => {
    const ball = document.getElementById('ball');
    const containerHeight = document.getElementById('ball-container').offsetHeight;
    const ballHeight = ball.offsetHeight;

    if (position > containerHeight - ballHeight || position < 0) {
        direction *= -1;
    }
    position += speed * direction;
    ball.style.top = `${position}px`;
};

const toggleBounce = () => {
    if (startStop.innerHTML === "Start") {
        startStop.innerHTML = "Stop";
        interval = setInterval(bounceBall, 10);
    } else {
        startStop.innerHTML = "Start";
        clearInterval(interval);
    }
};

const displayDescriptions = () => {
    const imageContainers = document.querySelectorAll('.yoga-image-container');
  
    for (let i = 0; i < imageContainers.length; i++) {
        const img = imageContainers[i].querySelector('.yoga-image');
        const desc = imageContainers[i].querySelector('.description');
  
        img.onclick = () => {
        if (desc.style.display === "none" || !desc.style.display) {
            desc.style.display = "block";
            desc.innerHTML = img.getAttribute("rel"); 
        } else {
            desc.style.display = "none"; 
            desc.innerHTML = "";
        }
        };
    }
};


// Calling functions
document.getElementById("hamburger").onclick = showHideNav;
document.getElementById("exercise1").addEventListener("click", exercise1);
document.getElementById("exercise2").addEventListener("click", exercise2);
startStop.onclick = toggleBounce;
displayDescriptions();
