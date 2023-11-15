document.addEventListener("DOMContentLoaded", function () {
	// Get all the span elements within the paragraphs
	const spanElements = document.querySelectorAll("span");

	// Add the 'scale' class to each span element with the specified delays
	spanElements.forEach((span, index) => {
		setTimeout(() => {
			span.classList.add("scale");
		}, 2000 + index * 3000); // 5 seconds delay for the first span, 1 second delay for the rest
	});

	// Remove the 'scale' class after the transition completes
	setTimeout(() => {
		spanElements.forEach((span) => {
			span.classList.remove("scale");
		});
	}, 2000 + spanElements.length * 3000 + 600); // Adjust the timeout based on the total transition duration (5 seconds initial delay + individual delays + transition duration)
});
