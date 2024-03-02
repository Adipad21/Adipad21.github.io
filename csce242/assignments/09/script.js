class Tree {
    constructor(name, type, growthRate, height, lifespan, habitat, description, imageName) {
        this.name = name;
        this.type = type;
        this.growthRate = growthRate;
        this.height = height;
        this.lifespan = lifespan;
        this.habitat = habitat;
        this.imageName = imageName;
        this.description = description;
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
            const p = document.createElement("p");
            p.textContent = this.description;

            detailsSection.appendChild(h3);
            detailsSection.appendChild(this.paragraph("Type", this.type));
            detailsSection.appendChild(this.paragraph("Growth Rate", this.growthRate));
            detailsSection.appendChild(this.paragraph("Height", this.height));
            detailsSection.appendChild(this.paragraph("Lifespan", this.lifespan));
            detailsSection.appendChild(this.paragraph("Habitat", this.habitat));
            detailsSection.appendChild(p);
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
    new Tree("Bald Cypress", "Coniferous", "Medium Growth", "50-70 ft", "100-600 years", "Wetlands", "Bald Cypress, known for its towering presence, is a deciduous conifer that thrives in wetland habitats. These majestic trees can reach heights of 50 to 70 feet and boast a lifespan ranging from 100 to 600 years. Their needle-like leaves turn a beautiful golden hue in the fall, adding to their allure.","bald-cypress.jpg"),
    new Tree("Eastern Redbud", "Deciduous", "Fast Growth", "20-30 ft", "50-75 years", "Forest understory", "Eastern Redbud is a small deciduous tree. Trees typically grow 20 feet in height with a similar spread and have gracefully ascending branches and a rounded shape. Eastern redbud leaves are alternate, simple, broadly heart-shaped and 3 to 5 inches high and wide. Leaves emerge reddish, turning green as they expand.","eastern-redbud.jpg"),
    new Tree("Loblolly Pine", "Coniferous", "Fast Growth", "60-90 ft", "100-150 years", "Various soils", "Loblolly Pine, a fast-growing coniferous tree, dominates various soil types with its imposing stature, standing between 60 to 90 feet tall. With a lifespan of 100 to 150 years, these trees contribute to forest ecosystems, providing habitat and resources for diverse wildlife. Their evergreen needles endure throughout the year, offering a striking contrast against snowy landscapes.","loblolly-pine.jpg"),
    new Tree("Southern Magnolia", "Evergreen", "Slow Growth", "60-80 ft", "80-120 years", "Well-drained soils", "Southern Magnolia, characterized by its glossy evergreen foliage and fragrant blooms, is a slow-growing tree that reaches heights of 60 to 80 feet. Flourishing in well-drained soils, these trees exhibit a lifespan of 80 to 120 years. Their large, leathery leaves and showy white flowers make them a beloved ornamental species, adorning gardens with their timeless beauty.","southern-magnolia.jpg")
];


trees.forEach(tree => {
    document.getElementById("tree-container").appendChild(tree.item);
});

document.getElementById("dialog-close").onclick = () => {
    document.getElementById("dialog").style.display = "none";
};