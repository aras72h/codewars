/*Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.*/
function findOdd(A) {
	let odd = 0;
	for (i = 0; i < A.length; i++) {
		if (A.filter((v) => (v === A[i])).length % 2 !== 0) {
			odd = A[i];
		}
	}
	return odd;
}

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

