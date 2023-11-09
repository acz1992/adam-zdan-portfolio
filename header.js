document.addEventListener("DOMContentLoaded", function () {
	// Get the current page filename without the ".html" extension
	var currentPage = window.location.pathname
		.split("/")
		.pop()
		.replace(".html", "");

	// Special case for the "home" link when it's the index page
	if (
		currentPage === "index" &&
		document.querySelector("header h1 a").getAttribute("href") ===
			"index.html"
	) {
		document.querySelector("header h1").classList.add("active");
	} else {
		// Find the corresponding link in the header and add the "active" class
		var links = document.querySelectorAll("header ul li a");
		for (var i = 0; i < links.length; i++) {
			var linkHref = links[i].getAttribute("href").replace(".html", "");
			if (linkHref === currentPage) {
				links[i].parentNode.classList.add("active");
				break; // Stop after finding the active page
			}
		}
	}
});
