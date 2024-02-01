const imgreplace = document.getElementById("img-replace");
const slider =document.getElementById("rotateSlider");

const replaceImage = () =>{
    if (imgreplace.src.match("http://placehold.it/200x200/F07D80/fff"))
        imgreplace.src ="http://placehold.it/200x200/fff/F07D80";
    else 
        imgeplace.src = "http://placehold.it/200x200/F07D80/fff";
};
imgreplace.onclick = replaceImage;


const rotateImage = () => {
    document.getElementById("img-rotate").style.transform = 'rotate(' + slider.value + 'deg)';
};
slider.addEventListener ('input', rotateImage);