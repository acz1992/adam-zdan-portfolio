document.addEventListener("DOMContentLoaded", function () {
	var zindex = 10;
	var cards = document.querySelectorAll("div.card");

	cards.forEach(function (card) {
		card.addEventListener("click", function (e) {
			var isButton = e.target.classList.contains("button");

			if (!isButton) {
				e.preventDefault();
			}

			var isShowing = false;

			if (card.classList.contains("show")) {
				isShowing = true;
			}

			var cardsContainer = document.querySelector("div.card-container");

			if (cardsContainer.classList.contains("showing")) {
				// A card is already in view
				var shownCard = document.querySelector("div.card.show");
				shownCard.classList.remove("show");

				if (isShowing) {
					// This card was showing - reset the grid
					cardsContainer.classList.remove("showing");
				} else {
					// This card isn't showing - get in with it
					card.style.zIndex = zindex;
					card.classList.add("show");
				}

				zindex++;
			} else {
				// No cards in view
				cardsContainer.classList.add("showing");
				card.style.zIndex = zindex;
				card.classList.add("show");

				zindex++;
			}

			// Stop the click event from propagating up the DOM tree only if it's not a button
			if (!isButton) {
				e.stopPropagation();
			}
		});
	});
});
