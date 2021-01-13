/*Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.*/

const binaryArrayToNumber = arr => {
	let number = 0;
	for (i = 0; i < arr.length; i++) {
		let n = arr.length - (i + 1);
		number += arr[i] * 2 ** n;
	}
	return number;
}

const binaryArrayToNumber = arr => {
	return parseInt(arr.join(''), 2);
