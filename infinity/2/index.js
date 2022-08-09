const number = 16;

let cut = (num) => {
	return (num === 1) ? 0 : sqrtCheck(num) ? sqrtCheck(num) : Math.round(num / 2)
}
let sqrtCheck = (num) => {
	let sqr = 2;
	for (let i = 1; sqr <= num; i++) {
		if (sqr === num) return i;
		sqr *= 2;
	}
	if (Number.isInteger(Math.sqrt(num))) {
		return (Math.sqrt(num) - 1) * 2
	}
	return false;
}

console.log(cut(number))

/* 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 25 
	0 1 2 2 3 3 4 3 4 5  6  6  7  7  8  4  8  */


var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let total = 0;
process.stdin.on('end', () => { console.log(total); process.exit(0); });

rl.on('line', function (data) {
	let sqrtCheck = (num) => {
		let sqr = 2;
		for (let i = 1; sqr <= num; i++) {
			if (sqr === num) return i;
			sqr *= 2;
		}
		if (Number.isInteger(Math.sqrt(num))) {
			return (Math.sqrt(num) - 1) * 2
		}
		return false;
	}
	let sqrt = sqrtCheck(parseInt(data))
	total = (parseInt(data) === 1) ? 0 : sqrt ? sqrt : Math.round(parseInt(data) / 2)
});