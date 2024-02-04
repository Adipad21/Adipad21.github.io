const imgreplace = document.getElementById("img-replace");
const slider =document.getElementById("rotateSlider");

const replaceImage = () =>{
    if (imgreplace.src.match("http://placehold.it/200x200/F07D80/fff"))
        imgreplace.src ="http://placehold.it/200x200/fff/F07D80";
    else 
        imgreplace.src = "http://placehold.it/200x200/F07D80/fff";
};
imgreplace.onclick = replaceImage;


const rotateImage = () => {
    document.getElementById("img-rotate").style.transform = 'rotate(' + slider.value + 'deg)';
};
slider.addEventListener ('input', rotateImage);


const addStar = () => {
    const playground = document.getElementById("star-container");
    const star = document.createElement("section");
    playground.append(star);
    star.classList.add("star");
};

document.getElementById("add-star").onclick = addStar;
