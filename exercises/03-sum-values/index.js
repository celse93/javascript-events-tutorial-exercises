// Adding the function to the window makes it globally available
window.calculateSumListener = function() {
	console.log("Function called")
	// Return the value of the input #firstNumber
	let stringA = document.getElementById("firstNumber").value;
	// Return the value of the input #secondNumber
	let stringB = document.getElementById("secondNumber").value;
	// Your code here
	let result;
	
	result = parseInt(stringA) + parseInt(stringB);

	document.getElementById("resultNumber").value = result;
};
