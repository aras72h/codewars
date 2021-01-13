/*given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.*/
function findShort(s) {
	const wordList = s.split(' ');
	let minLength = wordList[0].length;
	for (i = 0; i < wordList.length; i++) {
		if (wordList[i].length < minLength) {
			minLength = wordList[i].length;
		}
	}
	return minLength;
}

function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}
