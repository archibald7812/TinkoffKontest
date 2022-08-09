'use strict'

const n = 3;
const arr = ['1', '2', '3']

let func = (n, arr) => {
	let arr1 = new Set([]);
	let str = '';
	for (let i = 0; i < n; i++) {
		if (!arr1.has(arr[i])) {
			arr1.add(arr[i])
		} else {
			str += i + 1
		}
	}
	for (let i = 1; i <= n; i++) {
		if (!arr1.has(String(i))) str += i
	}
	if (str === "") return '-1 -1'
	return str
}
console.log(func(n, arr))


/* var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let total = 0;
process.stdin.on('end', () => { console.log(total); process.exit(0); });

rl.on('line', function (data) {
	data = data.split('\n');
	data[1] = data[1].split(' ');
	let func = (n, arr) => {
	let arr1 = new Set([]);
	let str = '';
	for (let i = 0; i < n; i++) {
		if (!arr1.has(arr[i])) {
			arr1.add(arr[i])
		} else {
			str += i + 1
		}
	}
	for (let i = 1; i <= n; i++) {
		if (!arr1.has(String(i))) str += i
	}
	if (str === "") return '-1 -1'
	return str
}
	total = func1(data[0], data[1])
}); */