let count = 1; 

const interval = setInterval(() =>{
   const allSections = document.querySelectorAll(".items section");
   allSections.forEach((section)=>{
        section.classList.remove("highlighted");
   });
   
   if(count > allSections.length){
        count = 1;
   }
   document.querySelector(`.items section:nth-child(${count})`).classList.add("highlighted");
   
    count++; 
},500);

/* const interval = setInterval(() =>{
    const currentSection = document.querySelector(".items section .highlighted");
    let nextSection = currentSection.nextElementSibling;

    if (nextSection == null){
        nextSection = document.querySelector(".items section");
    }

    currentSection.classList.remove("highlighted");
    nextSection.classList.add("highlighted");
}, 500); */


document.querySelectorAll(".items section").forEach((section) => {
    section.onclick = (e) => {
        document.getElementById("dialog").style.display = "block";

        //const src = section.querySelector("img").src;
        //const src = e.currentTarget.querySelector("img").src;
        //console.log(src);
        document.querySelector("#dialog-content img").src = e.currentTarget.querySelector("img").src;

        const detailsSection = document.getElementById("dialog-details");
        detailsSection.innerHTML = "";
        const h3 = document.createElement("h3");
        h3.innerHTML = section.querySelector("h3").innerHTML;
        detailsSection.append(h3);

        const ps = section.querySelectorAll("p");
        
        ps.forEach((p) => {
            const newP = document.createElement("p");
            newP.innerHTML = p.innerHTML;
            detailsSection.append(newP);
        });
    };
});

document.getElementById("dialog-close").onclick = () => {
    document.getElementById("dialog").style.display = "none";
};