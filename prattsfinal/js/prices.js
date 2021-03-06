const requestURL = "https://prattsbyui.github.io/prattsfinal/data/scoots.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const prices = jsonObject["prices"]
        for (let i = 0; i < prices.length; i++) {

            let card = document.createElement("section");
            let part = document.createElement("div");

            let picture = document.createElement("div")
            let h2 = document.createElement("h2");
            let image = document.createElement("img");
            let imageAlt = prices[i].RentalType;
            let persons = document.createElement("p")

            let reservation = document.createElement("div")
            let reserve = document.createElement("h3");
            let rhalf = document.createElement("p")
            let rfull = document.createElement("p")

           
            let walk = document.createElement("h3");
            let fhalf = document.createElement("p")
            let ffull = document.createElement("p")



            part.setAttribute("class", "rental")
            h2.textContent = prices[i].RentalType;
            image.setAttribute("src", "/prattsfinal/images/" + prices[i].photo);
            image.setAttribute("alt", imageAlt);
            persons.textContent = "Max Riders: " + prices[i].MaxPersons;

            reserve.textContent = "Reservation";
            rhalf.textContent = "Half-Day(3hrs): $" + prices[i].Reservation.HalfDay;
            rfull.textContent = "Full Day: $" + prices[i].Reservation.FullDay;

            walk.textContent = "Walk-In";
            fhalf.textContent = "Half-Day(3hrs): $" + prices[i].WalkIn.HalfDay;
            ffull.textContent = "Full Day: $" + prices[i].WalkIn.FullDay;

            picture.appendChild(h2);
            picture.appendChild(image);
            picture.appendChild(persons);

            reservation.appendChild(reserve);
            reservation.appendChild(rhalf);
            reservation.appendChild(rfull);

            reservation.appendChild(walk);
            reservation.appendChild(fhalf);
            reservation.appendChild(ffull);

            part.appendChild(picture);
            part.appendChild(reservation);
         

            card.appendChild(part);


            document.querySelector("div.cards").appendChild(card);

        }
    });