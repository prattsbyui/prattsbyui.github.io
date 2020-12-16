const requestURL = "https://prattsbyui.github.io/prattsfinal/data/scoots.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const prices = jsonObject["prices"]
        for (let i = 1; i < prices.length; i = i + 2) {

            let card = document.createElement("section");
            let part = document.createElement("div");
            let picture = document.createElement("div")
            let image = document.createElement("img");
            let imageAlt = prices[i].RentalType;

            part.setAttribute("class", "summary")
            image.setAttribute("src", "/prattsfinal/images/" + prices[i].photo);
            image.setAttribute("alt", imageAlt);
            picture.appendChild(image);
            part.appendChild(picture);
            card.appendChild(part);

            document.querySelector("div.cards").appendChild(card);

        }
    });