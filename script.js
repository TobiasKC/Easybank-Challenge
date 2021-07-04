const hamburgerBtn = document.querySelector("#hamburger");
const header = document.querySelector(".header");

hamburgerBtn.addEventListener("click", function () {
	console.log("Clicked");

	if (header.classList.contains("open")) {
		header.classList.remove("open");
	} else {
		header.classList.add("open");
	}
});
