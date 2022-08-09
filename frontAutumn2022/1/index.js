
let data = "6 6 8 8\n1 8 4 9"
data = data.split('\n');
data[0] = data[0].split(' ');
data[1] = data[1].split(' ');
let maxX = Math.max(parseInt(data[0][0]), parseInt(data[0][2]), parseInt(data[1][0]), parseInt(data[1][2]))
let maxY = Math.max(parseInt(data[0][1]), parseInt(data[0][3]), parseInt(data[1][1]), parseInt(data[1][3]))
let minX = Math.min(parseInt(data[0][0]), parseInt(data[0][2]), parseInt(data[1][0]), parseInt(data[1][2]))
let minY = Math.min(parseInt(data[0][1]), parseInt(data[0][3]), parseInt(data[1][1]), parseInt(data[1][3]))
let rez = (Math.max((maxX - minX), (maxY - minY)))
rez *= rez
total = rez

console.log(total)
//6,6,8,8,1,8,4,9



/* 
var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let total = 0;
process.stdin.on('end', () => { console.log(total); process.exit(0); });

rl.on('line', function (data) {
data = data.split('\n');
data[0] = data[0].split(' ');
data[1] = data[1].split(' ');
let maxX = Math.max(parseInt(data[0][0]), parseInt(data[0][2]), parseInt(data[1][0]), parseInt(data[1][2]))
let maxY = Math.max(parseInt(data[0][1]), parseInt(data[0][3]), parseInt(data[1][1]), parseInt(data[1][3]))
let minX = Math.min(parseInt(data[0][0]), parseInt(data[0][2]), parseInt(data[1][0]), parseInt(data[1][2]))
let minY = Math.min(parseInt(data[0][1]), parseInt(data[0][3]), parseInt(data[1][1]), parseInt(data[1][3]))
let rez = (Math.max((maxX - minX), (maxY - minY)))
rez *= rez
total = rez
}); */


var readline = require('readline');

var rl = readline.createInterface({

	input: process.stdin,

	output: process.stdout

});

let total = 0;

process.stdin.on('end', () => { console.log(total); process.exit(0); });

rl.on('line', function (data) {
	data = data.split('\n');
	data[0] = data[0].split(' ');
	data[1] = data[1].split(' ');
	let maxX = Math.max(parseInt(data[0][0]), parseInt(data[0][2]), parseInt(data[1][0]), parseInt(data[1][2]))
	let maxY = Math.max(parseInt(data[0][1]), parseInt(data[0][3]), parseInt(data[1][1]), parseInt(data[1][3]))
	let minX = Math.min(parseInt(data[0][0]), parseInt(data[0][2]), parseInt(data[1][0]), parseInt(data[1][2]))
	let minY = Math.min(parseInt(data[0][1]), parseInt(data[0][3]), parseInt(data[1][1]), parseInt(data[1][3]))
	let rez = (Math.max((maxX - minX), (maxY - minY)))
	rez *= rez
	total = rez
});