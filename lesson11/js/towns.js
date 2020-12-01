const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"]
    for(let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven"){
        let card = document.createElement("section");
        let article = document.createElement("div")
        let h2 = document.createElement("h2");
        let motto = document.createElement("h3");
        let eventhead = document.createElement("h4");
        let event1 = document.createElement("p");
        let event2 = document.createElement("p");
        let event3 = document.createElement("p");
        let founded = document.createElement("p");
        let population = document.createElement("p");
        let rain = document.createElement("p");
        let image = document.createElement("img");
        let imageAlt = towns[i].name;

        event1.textContent =  towns[i].events[0];
        event2.textContent =  towns[i].events[1];
        event3.textContent =  towns[i].events[2];
        h2.textContent = towns[i].name;
        motto.textContent = towns[i].motto
        founded.textContent = "Year Founded: " + towns[i].yearFounded;
        population.textContent = "Current Population: " + towns[i].currentPopulation;
        rain.textContent = "Average Rainfall: " + towns[i].averageRainfall;
eventhead.textContent = "Events"
        

        image.setAttribute("src", "/lesson11/images/" + towns[i].photo);
        image.setAttribute("alt", imageAlt);

        article.appendChild(h2);
        article.appendChild(motto);
        article.appendChild(founded);
        article.appendChild(population);
        article.appendChild(rain);
        article.appendChild(eventhead);
        article.appendChild(event1);
        article.appendChild(event2);
        article.appendChild(event3);
        card.appendChild(article);
        card.appendChild(image);

        document.querySelector("div.cards").appendChild(card);
      }
    }
  });

  