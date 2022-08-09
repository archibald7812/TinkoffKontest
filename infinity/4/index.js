'use strict'

let func = (n, k, arr) => {
	let max = 0;
	for (let num of arr) {
		max = Math.max(max, num)
	}
	let maxLen = max.length
	let maxArr = []
	for (let num of arr) {
		if (num.length === maxLen) {
			maxArr.push(num)
		}
	}

}