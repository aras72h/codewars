//Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

//Note: The function accepts an integer and returns an integer

function squareDigits(num){
	let inNumber = String(num);
	let outNumber = "";
	for (i = 0; i < inNumber.length; i++) {
		let a = inNumber[i];
		let sqr = Number(a) ** 2;
		b = String(sqr);
		outNumber += b;
	}
	return Number(outNumber);
}
