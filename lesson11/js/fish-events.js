const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"]
    for(let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Fish Haven"){
        let card = document.createElement("section");
        let div = document.createElement("div");
        let eventhead = document.createElement("h1");
        let event1 = document.createElement("p");
        let event2 = document.createElement("p");
        let event3 = document.createElement("p");


        event1.textContent =  towns[i].events[0];
        event2.textContent =  towns[i].events[1];
        event3.textContent =  towns[i].events[2];
        eventhead.textContent = "Local Events"
  
        


        card.appendChild(eventhead);
        div.appendChild(event1);
        div.appendChild(event2);
        div.appendChild(event3);
        card.appendChild(div)
      
   

        document.querySelector("div.events").appendChild(card);
      }
    }
  });

  