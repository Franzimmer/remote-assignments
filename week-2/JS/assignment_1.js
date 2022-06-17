// Assignment 1: function max(numbers) - return the maximum in the array
function max(numbers) {
	const len = numbers.length;
	let result = numbers[0];
	for (var i = 1; i < len; i ++) {
		if (numbers[i] > result) {
			result = numbers[i];
		}
	}
	return result;
}



