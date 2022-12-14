const submitButton = document.querySelector(".submit-button");
const ratingButtons = document.querySelectorAll(".rating-button");
const howDidWeDo = document.querySelector(".card-how-did-we-do");
const thankYou = document.querySelector(".card-thank-you");
const ratingOutOfFive = document.querySelector("#rating-out-of-five");

let rating;

// Make buttons focused on click
ratingButtons.forEach((button) => {
	button.addEventListener("click", () => {
		rating = button.value;
		ratingButtons.forEach((button) => {
			if (button.classList.contains("focused")) {
				button.classList.remove("focused");
			}
		});
		button.classList.add("focused");
	});
});

// Submit form
document.getElementById("rating-form").addEventListener("submit", function (e) {
	e.preventDefault();
	if (rating) {
		ratingOutOfFive.textContent = `${rating}`;
		howDidWeDo.classList.add("hidden");
		thankYou.classList.remove("hidden");
	}
});
