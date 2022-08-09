


/* let func1 = (data) => {
	let data = data.reduce((acc, el) => {
		acc[el] = (acc[el] || 0) + 1;
		return acc;
	}, {})
	return data
} */


//6,6,8,8,1,8,4,9

/* var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let total = 0;
process.stdin.on('end', () => { console.log(total); process.exit(0); });

rl.on('line', function (data) {
	data = data.split('\n');
	data[1] = data[1].split(" ");
	let unsub = 0;
	let sub = 0;
	let maxUnsub = 0;
	let minSub = 1000;
	for (let i = 0; i < data[1].length; i++) {
		if (i % 2 === 0) {
			sub += parseInt(data[1][i])
			minSub = Math.min(minSub, parseInt(data[1][i]))
		} else {
			unsub += parseInt(data[1][i])
			maxUnsub = Math.max(maxUnsub, parseInt(data[1][i]))
		}
	}
	let rez = (sub - unsub) + (maxUnsub - minSub) * 2
	total = rez
}); */


