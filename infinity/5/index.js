
let func = (l, r) => {
	let array = []
	let k = r.length - l.length
	start: for (let i = BigInt(l); i <= BigInt(r);) {
		let firstLetter = i.toString()[0];
		for (let letter of i.toString()) {
			if (letter !== firstLetter) {
				i++;
				continue start;
			}
		}
		array.push(i)
		i++
	}
	return array.length
}
console.log(func('10', '1000'))

let func1 = (l, r) => {
	let a = 0;
	let k = parseInt(r.length - 1) * 9;
	for (let letter of r) {
		if (letter < r[0]) {
			a = 1;
		}
	}
	k += parseInt(r[0]) - a;
	if (parseInt(l) === 1) return k;

	let b = 1;
	let c = parseInt(l.length - 1) * 9;
	for (let letter of l) {
		if (letter > l[0]) {
			b = 0
		}
	}
	c += parseInt(l[0]) - b;
	return k - c;
}

console.log(func1('10', '1000'))



/* var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let total = 0;
process.stdin.on('end', () => { console.log(total); process.exit(0); });

rl.on('line', function (data) {
	data = data.split(' ');
	let l = data[0];
	let r = data[1];
	let func1 = (l, r) => {
		let a = 0;
		let k = parseInt(r.length - 1) * 9;
		for (let letter of r) {
			if (letter < r[0]) {
				a = 1;
			}
		}
		k += parseInt(r[0]) - a;
		if (parseInt(l) === 1) return k;
		let b = 1;
		let c = parseInt(l.length - 1) * 9;
		for (let letter of l) {
			if (letter > l[0]) {
				b = 0
			}
		}
		c += parseInt(l[0]) - b;
		return k - c;
	}
	total = func1(l, r)
}); */


