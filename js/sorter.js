/*
 * This function shuffles an array into a random order.
 */
function shuffle(a) {
	for (let i = a.length; i; i--) {
		let j = Math.floor(Math.random() * i);
		[a[i - 1], a[j]] = [a[j], a[i - 1]];
	}
}

/*
 * This function generates an array of shuffled odd integers of length n,
 * with values from 1 to n.
 */
function generateRandomArray(n) {
	a = [...Array(n + 1).keys()].slice(1, n + 1);
	for (let i = 0; i < a.length; i++) {
		a[i] = a[i] * 2 + 1;
	}
	shuffle(a);
	return a;
}

/*
 * Performs a flip operation, with the element at the provided index as the bottom
 * of the flipped pile. The flip operation is performed in place (the original 
 * array is modified), but the array is returned to the user for convenience.
 */
function flip(arr, flipIndex) {
	// function logic left as an exercise
	topHalf = arr.slice(0, flipIndex+1);
	botHalf = arr.slice(flipIndex+1, arr.length);
	topHalf = topHalf.reverse();
	arr = topHalf.concat(botHalf);
	return arr;
}

/*
 * Flips groups of pancakes such that, when the function returns, every pancake
 * is smaller than the pancake below it. Assume the top pancake has index 0.
 * The arrange operation is performed in place (the original array is modified), 
 * but the array is returned to the user for convenience.
 */
function arrangePancakes(arr) {
	// function logic left as an exercise

	for(let i = arr.length - 1; i >= 1; i--){
		var max_idx = 0;
		var max = arr[max_idx];
		for(var j = 1; j <= i; j++){
			if(arr[j] > max){
				max = arr[j];
				max_idx = j;
			}
		}

		if(max_idx != i){
			arr = flip(arr, max_idx);
			arr = flip(arr, i);
		}

	}
	return arr;
}
