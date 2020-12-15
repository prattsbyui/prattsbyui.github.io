const requestURL = "https://prattsbyui.github.io/prattsfinal/data/scoots.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prices = jsonObject["prices"]
    for(let i = 0; i < prices.length; i++) {

        let card = document.createElement("section");

        let picture = document.createElement("div")
        let h2 = document.createElement("h2");
        let image = document.createElement("img");
        let imageAlt = prices[i].name;
        let persons = document.createElement("p")

        let reservation = document.createElement("div")
 let reserve = document.createElement("h3");
let rhalf = document.createElement("p")
let rfull = document.createElement("p")
        let walkin = document.createElement("div")
        
       
        
        let founded = document.createElement("p");
        let population = document.createElement("p");
        let rain = document.createElement("p");


        h2.textContent = prices[i].RentalType;
        image.setAttribute("src", "/prattsfinal/images/" + prices[i].photo);
        image.setAttribute("alt", imageAlt);
        persons.textContent = "Max Riders: " + prices[i].MaxPersons;

        reserve.textContent = "Reservation";
rhalf.textContent = "Half-Day(3hrs): $" + prices[i].Reservation.HalfDay;
rfull.textContent = "Full Day: $" + prices[i].Reservation.FullDay;
           
        picture.appendChild(h2);
        picture.appendChild(image);
        picture.appendChild(persons);

reservation.appendChild(reserve);
reservation.appendChild(rhalf);
reservation.appendChild(rfalf);

        card.appendChild(picture);
        card.appendChild(reservation)
     

        document.querySelector("div.cards").appendChild(card);

    }
  });