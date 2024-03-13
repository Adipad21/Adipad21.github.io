//https://portiaportia.github.io/json/house-plans.json

const getHouse = async () => {
    const url = "https://portiaportia.github.io/json/house-plans.json";

    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

const showHouse = async () => {
    const houses = await getHouse();
     
    houses.forEach((house) => {
        document.getElementById("houses-section").append(getHouseSection(house));
    });
};

const getHouseSection = (house) => {
    const section = document.createElement("section");
    section.classList.add("house");

    const title = document.createElement("h3");
    title.innerHTML = house.name;
    section.appendChild(title);

    const attach = document.createElement("section");
    attach.classList.add("attach");

    const article = document.createElement("article");
    const image = document.createElement("img");
    image.src = `https://portiaportia.github.io/json/images/house-plans/${house.main_image}`;
    article.appendChild(image);
    
    const article_new = document.createElement("article");
    const size = document.createElement("p");
    size.innerHTML = `<strong>Size:</strong> ${house.size} square feet`;
    article_new.appendChild(size);

    const bedrooms = document.createElement("p");
    bedrooms.innerHTML = `<strong>Bedrooms:</strong> ${house.bedrooms}`;
    article_new.appendChild(bedrooms);

    const bathrooms = document.createElement("p");
    bathrooms.innerHTML = `<strong>Bathrooms:</strong> ${house.bathrooms}`;
    article_new.appendChild(bathrooms);

    const features = document.createElement("p");
    features.innerHTML = `* ${house.features.join(' * ')}`;
    article_new.appendChild(features);    

    const floorPlans = document.createElement("section");
    floorPlans.classList.add("floor-plans");

    house.floor_plans.forEach((plan) => {
        const floorPlanArticle = document.createElement("article");
        const floorPlanTitle = document.createElement("h3");
        floorPlanTitle.innerHTML = plan.name;

        const floorPlanImage = document.createElement("img");
        floorPlanImage.src = `https://portiaportia.github.io/json/images/house-plans/${plan.image}`;

        floorPlanArticle.appendChild(floorPlanTitle);
        floorPlanArticle.appendChild(floorPlanImage);
        floorPlans.appendChild(floorPlanArticle);
    });

    attach.appendChild(article);
    attach.appendChild(article_new);
    section.appendChild(attach);
    section.appendChild(floorPlans);
    return section;
};

showHouse();
