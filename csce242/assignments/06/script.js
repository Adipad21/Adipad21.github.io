
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
document.getElementById("exercise1").addEventListener("click", function(e) {
    e.preventDefault(); // Prevent default link behavior
    document.getElementById("command").classList.add("show");
    document.getElementById("command").classList.remove("hide-content");
    document.getElementById("yoga").classList.remove("show");
    document.getElementById("yoga").classList.add("hide-content");
});

document.getElementById("exercise2").addEventListener("click", function(e) {
    e.preventDefault(); // Prevent default link behavior
    document.getElementById("yoga").classList.add("show");
    document.getElementById("yoga").classList.remove("hide-content");
    document.getElementById("command").classList.remove("show");
    document.getElementById("command").classList.add("hide-content");
});

const showCommand = () => {
    const commandInput = document.getElementById("command-reg").value.trim();
    const command = commandInput.charAt(commandInput.length - 1).toLowerCase();
    const comImg = document.getElementById("command-image");

    if(command == "b"){
        comImg.src = "images/read.jpg";
    } else if(command == "c"){
        comImg.src = "images/clown.jpg";
    } else if(command == "p"){
        comImg.src = "images/birthday.jpg";
    } else if(command == "r"){
        comImg.src = "images/rain.jpg";
    } else if(command == "s"){
        comImg.src = "images/shovel.jpg";
    } else if(command == "w"){
        comImg.src = "images/work.jpg";
    } else {
        comImg.src = "images/original.jpg";
    }
};

const yogaImage = () => {
    const slider =document.getElementById("yogaSlider");
    const newImg = document.getElementById("yoga-image");

    if(slider.value == 1){
        newImg.src = "images/yoga1.jpg";
    } else if(slider.value == 2){
        newImg.src = "images/yoga2.jpg";
    } else if(slider.value == 3){
        newImg.src = "images/yoga3.jpg";
    } else if(slider.value == 4){
        newImg.src = "images/yoga4.jpg";
    } else if(slider.value == 5){
        newImg.src = "images/yoga5.jpg";
    } else if(slider.value == 6){
        newImg.src = "images/yoga6.jpg";
    } else if(slider.value == 7){
        newImg.src = "images/yoga7.jpg";
    } else {
        newImg.src= "images/yoga8.jpg";
    }
};

document.getElementById("command-reg").addEventListener("keyup",showCommand);
document.getElementById("yogaSlider").addEventListener ('input', yogaImage);
document.getElementById("hamburger").onclick = showHideNav;
