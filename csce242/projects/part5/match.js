const getMatch = async () => {
    const url = "match.json";

    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

const showMatch = async () => {
    const matches = await getMatch();
     
    matches.forEach((match) => {
        document.getElementById("matches-section").append(getMatchSection(match));
    });
};

const getMatchSection = (match) => {
    const section = document.createElement("section");
    section.classList.add("match");

    const title = document.createElement("h3");
    title.innerHTML = match.match_id;
    section.appendChild(title);

    const attach = document.createElement("section");
    attach.classList.add("attach");

    const article = document.createElement("article");
    const image = document.createElement("p");
    image.src = "";
    article.appendChild(image);
    
    const article_new = document.createElement("article");
    const size = document.createElement("p");
    size.innerHTML = `<strong>Size:</strong> ${match.size} square feet`;
    article_new.appendChild(size);

    const features = document.createElement("p");
    features.innerHTML = `* ${match.features.join(' * ')}`;
    article_new.appendChild(features);    

    const teamPlans = document.createElement("section");
    teamPlans.classList.add("floor-plans");

    match.teams.forEach((team) => {
        const teamArticle = document.createElement("article");
        const teamName = document.createElement("h3");
        teamName.innerHTML = team.name;

        const teamLogo = document.createElement("img");
        teamLogo.src = `images/${plan.logo}`;

        teamArticle.appendChild(teamName);
        teamArticle.appendChild(teamLogo);
        teamPlans.appendChild(teamArticle);
    });

    attach.appendChild(article);
    attach.appendChild(article_new);
    section.appendChild(attach);
    section.appendChild(teamPlans);
    return section;
};

showMatch();
