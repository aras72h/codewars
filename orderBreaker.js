//In this kata, you have an integer array which was ordered by ascending except one number.
//
//For Example: [1,2,3,4,17,5,6,7,8]
//For Example: [19,27,33,34,112,578,116,170,800]
//You need to figure out the first breaker. Breaker is the item, when removed from sequence, sequence becomes ordered by ascending.

function orderBreaker(input) {
	for (i = 0; i < input.length; i++) {
		if (input[i] > input[i+1] || input[i] < input[i-1]) {
			let breaker = input[i];
			return breaker;
		}
	}
}
