class Tree {
    constructor(name, type, growthRate, height, lifespan, habitat, imageName) {
        this.name = name;
        this.type = type;
        this.growthRate = growthRate;
        this.height = height;
        this.lifespan = lifespan;
        this.habitat = habitat;
        this.imageName = imageName;
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("tree-card");

        const h3 = document.createElement("h3");
        h3.textContent = this.name;
        section.appendChild(h3);
        
        const image = document.createElement("img");
        image.src = "images/"+ this.imageName;
        section.appendChild(image);

        section.onclick = (e) => {
            document.getElementById("dialog").style.display = "block";
            const src = image.src;
            document.querySelector("#dialog-content img").src = e.currentTarget.querySelector("img").src;
            
            const detailsSection = document.getElementById("dialog-details");
            detailsSection.innerHTML = "";
            const h3 = document.createElement("h3");
            h3.textContent = this.name;

            detailsSection.appendChild(h3);
            detailsSection.appendChild(this.paragraph("Type", this.type));
            detailsSection.appendChild(this.paragraph("Growth Rate", this.growthRate));
            detailsSection.appendChild(this.paragraph("Height", this.height));
            detailsSection.appendChild(this.paragraph("Lifespan", this.lifespan));
            detailsSection.appendChild(this.paragraph("Habitat", this.habitat));
        };

        return section;
    }

    paragraph(name, info) {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${name}:</strong> ${info}`;
        return p;
    }

}

const trees = [
    new Tree("Bald Cypress", "Coniferous", "Medium Growth", "50-70 ft", "100-600 years", "Wetlands", "bald-cypress.jpg"),
    new Tree("Eastern Redbud", "Deciduous", "Fast Growth", "20-30 ft", "50-75 years", "Forest understory", "eastern-redbud.jpg"),
    new Tree("Loblolly Pine", "Coniferous", "Fast Growth", "60-90 ft", "100-150 years", "Various soils", "loblolly-pine.jpg"),
    new Tree("Southern Magnolia", "Evergreen", "Slow Growth", "60-80 ft", "80-120 years", "Well-drained soils", "southern-magnolia.jpg")
];


trees.forEach(tree => {
    document.getElementById("tree-container").appendChild(tree.item);
});

document.getElementById("dialog-close").onclick = () => {
    document.getElementById("dialog").style.display = "none";
};