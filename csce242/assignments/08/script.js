//Variables
let adText = ["Each image has been edited by our superior staff.",
"Every detail meticulously enhanced for visual perfection",
"Precision and creativity fused in every edit",
"Transforming visions into breathtaking realities",
"Crafting excellence in every pixel, every time"];
let currentIndex = 0;


let imageSources = ["images/mountain-lake.jpg", "images/golden.jpg", "images/garden.jpg", "images/small-house.jpg", "images/snow.jpg"];
let imageAttributions = {};
imageAttributions["images/mountain-lake.jpg"] = { attribution: "Image by vecstock", href: "https://www.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_40965130.htm#query=landscape&position=0&from_view=keyword&track=sph&uuid=8e520e53-3fb6-4e41-9da7-682c824a94f7" };
imageAttributions["images/golden.jpg"] = { attribution: "Image by wirestock", href: "https://www.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_11342065.htm#query=landscape&position=7&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4" };
imageAttributions["images/garden.jpg"] = { attribution: "Image by wirestock", href: "https://www.freepik.com/free-photo/amazing-shot-beautiful-butchart-gardens-brentwood-bay_20496783.htm#query=landscape&position=27&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4" };
imageAttributions["images/small-house.jpg"] = { attribution: "Image by wirestock", href: "https://www.freepik.com/free-photo/small-houses-green-field-with-dark-sky_7553929.htm#query=landscape&position=39&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4" };
imageAttributions["images/snow.jpg"] = { attribution: "Image by wirestock", href: "https://www.freepik.com/free-photo/beautiful-scenery-lot-leafless-trees-snow-covered-land-during-sunset_10990489.htm#query=landscape&position=38&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4" };

//Functions
const changeAd = () => {
    const adsDiv = document.getElementById("ads");
    adsDiv.innerHTML = "";
    const p = document.createElement("p"); 
    p.innerHTML = adText[currentIndex];
    adsDiv.appendChild(p);
    currentIndex++;
    if(currentIndex >= adText.length){
        currentIndex = 0;
    }
};

const displayImage = () => {
    const gallery = document.getElementById("display");

    imageSources.forEach((src) => {
        const img = document.createElement("img");
        img.src = src; 
        img.style.width = "70%";

        const attLink = document.createElement("a");
        attLink.href = imageAttributions[src].href;
        attLink.textContent = imageAttributions[src].attribution;
        attLink.target = "_blank"; // Open link in new tab
        const endText = document.createTextNode(" on Freepik");

        const attContainer = document.createElement("p");
        attContainer.appendChild(attLink);
        attContainer.appendChild(endText);

        gallery.appendChild(img);
        gallery.appendChild(attContainer);
    });
};


//Calling Functions
window.onload = () =>{
    changeAd();
    setInterval(changeAd,2000); //change every 2 seconds
    displayImage();
}
