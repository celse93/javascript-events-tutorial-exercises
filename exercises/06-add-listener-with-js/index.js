window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	// Some code here
	document.querySelector("#theGreen").addEventListener("click", () => {
		alert("woohoo!");
	})
};

// The listener function here
