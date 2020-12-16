function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

function selectResponse() {
	const s = document.querySelector('#selected')
	const sel = document.querySelector('#selectbrowser');
	s.style.display = "block";
	s.textContent = sel.value;
	
}


const requestURL = "https://prattsbyui.github.io/prattsfinal/data/scoots.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const prices = jsonObject["prices"]
        for (let i = 0; i < prices.length; i++) {

            let card = document.createElement("option");

            card.setAttribute("value", prices[i].RentalType);
            card.textContent = prices[i].RentalType;


            document.querySelector("select.RentalType").appendChild(card);

        }
    });