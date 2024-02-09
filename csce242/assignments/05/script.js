const imgreplace = document.getElementById("img-replace");
const slider =document.getElementById("rotateSlider");

const replaceImage = () =>{
    if (imgreplace.src.match("http://placehold.it/200x200/F07D80/fff"))
        imgreplace.src ="http://placehold.it/200x200/fff/F07D80";
    else 
        imgreplace.src = "http://placehold.it/200x200/F07D80/fff";
};

const rotateImage = () => {
    document.getElementById("img-rotate").style.transform = 'rotate(' + slider.value + 'deg)';
};


const addStar = () => {
    const playground = document.getElementById("star-container");
    const star = document.createElement("section");
    playground.append(star);
    star.classList.add("star");
};


imgreplace.onclick = replaceImage;
slider.addEventListener ('input', rotateImage);
document.getElementById("add-star").onclick = addStar;
