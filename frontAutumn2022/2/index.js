
let N = 5;
let data = "MIKHAIL VLADISLAV GRIGORY\nVLADISLAV MIKHAIL GRIGORY\nIVAN ILYA VLADIMIR\nANDREY VLADIMIR ILYA\nVLADIMIR IVAN ANDREY\nMIKHAIL VLADISLAV GRIGORY\nMIKHAIL VLADISLAV GRIGORY"
data = data.split("\n")
let makeTeam = (data) => {
	for (let i = 0; i < data.length; i++) {
		data[i] = data[i].split(" ")
	}
	for (let i = 0; i < data[i].length; i++) {
		data[i].sort().join('');
	}
	for (let i = 0; i < data.length; i++) {
		data[i][0] += data[i][1]
		data[i][0] += data[i][2]
		data[i].length = 1
	}
	let rez = data.reduce(function (acc, el) {
		acc[el] = (acc[el] || 0) + 1;
		return acc;
	}, {});
	let values = Object.values(rez);
	let a = 0;
	for (let i = 0; i < values.length; i++) {
		a = Math.max(values[i], a)
	}
	return a
}
let total = makeTeam(data)
console.log(total)
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
	let makeTeam = (data) => {
	for (let i = 0; i < data.length; i++) {
		data[i] = data[i].split(" ")
	}
	for (let i = 0; i < data[i].length; i++) {
		data[i].sort().join('');
	}
	for (let i = 0; i < data.length; i++) {
		data[i][0] += data[i][1]
		data[i][0] += data[i][2]
		data[i].length = 1
	}
	let rez = data.reduce(function (acc, el) {
		acc[el] = (acc[el] || 0) + 1;
		return acc;
	}, {});
	let values = Object.values(rez);
	let a = 0;
	for (let i = 0; i < values.length; i++) {
		a = Math.max(values[i], a)
	}
	return a
}
	total = makeTeam(data)
}); */


