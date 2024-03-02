const doStuff = () =>{
    const messageP = document.getElementById("message");
    messageP.innerHTML = "Hello Adi!";
    messageP.classList.add("special");
};

const hideImage = () =>{
    document.getElementById("image").classList.add("hidden");
};


document.getElementById("btn-click").onclick = doStuff;
document.getElementById("image").onclick = hideImage;
