const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"]
    for(let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs"){
        let card = document.createElement("section");
        let article = document.createElement("div")
        let h2 = document.createElement("h2");
        let motto = document.createElement("h3");
        let founded = document.createElement("p");
        let population = document.createElement("p");
        let rain = document.createElement("p");
        let image = document.createElement("img");
        let imageAlt = towns[i].name;

        h2.textContent = towns[i].name;
        motto.textContent = towns[i].motto
        founded.textContent = "Year Founded: " + towns[i].yearFounded;
        population.textContent = "Current Population: " + towns[i].currentPopulation;
        rain.textContent = "Average Rainfall: " + towns[i].averageRainfall;
         
        image.setAttribute("src", "/lesson11/images/" + towns[i].photo);
        image.setAttribute("alt", imageAlt);

        article.appendChild(h2);
        article.appendChild(motto);
        article.appendChild(founded);
        article.appendChild(population);
        article.appendChild(rain);
        card.appendChild(article);
        card.appendChild(image);

        document.querySelector("div.cards").appendChild(card);
      }
    }
  });

  