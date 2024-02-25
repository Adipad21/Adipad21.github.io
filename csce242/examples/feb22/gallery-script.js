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
        document.querySelectorAll("#dialog-content img").src = e.currentTarget.querySelector("img").src;

    };
});