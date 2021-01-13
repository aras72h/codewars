/*Task: Write a function that takes in a particular time as 24h format ('hh:mm:ss') and outputs a string that reproduces the Berlin Clock. The parameters should be as follows:

“O” = Light off
“R” = Red light
“Y” = Yellow light*/
function berlinClock(time) {
	const timeArray = time.split(':');
	let secondLight = '';
	let fiveHourLight = '';
	let oneHourLight = '';
	let fiveMinLight = '';
	let oneMinLight = '';
	const Hour = Number(timeArray[0]);
	const Minute = Number(timeArray[1]);
	const Second = Number(timeArray[2]);
	let fiveH = Math.floor(Hour / 5);
	let oneH = Hour % 5;
	let fiveM = Math.floor(Minute / 5);
	let oneM = Minute % 5;

	Second % 2 === 0 ? secondLight += 'Y' : secondLight += 'O';

	if (Hour / 5 !== 0) {
		for (i = 0; i < 4; i++) {
			if (fiveH > 0) {
				fiveHourLight += 'R';
				fiveH--;
			} else {
				fiveHourLight += 'O';
			}
		}
	} else { 
		fiveHourLight = 'OOOO';
	}

	if (Hour % 5 !== 0) {
		for (i = 0; i < 4; i++) {
			if (oneH > 0) {
				oneHourLight += 'R';
				oneH--;
			} else {
				oneHourLight += 'O';
			}
		}
	} else {
		oneHourLight = 'OOOO';
	}
	
	if (Minute / 5 !== 0) {
		for (i = 0; i < 11; i++) {
			if (fiveM > 0) {
				if (i === 2 || i === 5 || i === 8) {
					fiveMinLight += 'R';
					fiveM--;
					continue;
				} else {
					fiveMinLight += 'Y';
					fiveM--;
				}
			} else {
				fiveMinLight += 'O';
			}
		}
	} else {
		fiveMinLight = 'OOOOOOOOOOO';
	}

	if (Minute % 5 !== 0) {
		for (i = 0; i < 4; i++) {
			if (oneM > 0) {
				oneMinLight += 'Y';
				oneM--;
			} else {
				oneMinLight += 'O';
			}
		}
	} else {
		oneMinLight += 'OOOO';
	}
		
        let berlinString = secondLight + '\n' + fiveHourLight + '\n' + oneHourLight + '\n' + fiveMinLight + '\n' + oneMinLight;
	//let berlinString = `${secondLight}\n${fiveHourLight}\n${oneHourLight}\n${fiveMinLight}\n${oneMinLight}`;
	return berlinString;
}


function berlinClock(time) {
  const [h,m,s] = time.split(":").map(Number);
  return [ "YO"[s%2]
         , ( "R".repeat( Math.floor(h/5) ) + "OOOO" ).slice(0,4)
         , ( "R".repeat( h%5 ) + "OOOO" ).slice(0,4)
         , ( "Y".repeat( Math.floor(m/5) ) + "OOOOOOOOOOO" ).slice(0,11).replace( /YYY/g, "YYR" )
         , ( "Y".repeat( m%5 ) + "OOOO" ).slice(0,4)
         ].join("\n");
}
