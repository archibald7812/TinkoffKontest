

let duplicator = (array) => {
	array.push(...array)
	return array
}

console.log(duplicator([1, 2, 3, 4, 5]))


/* function Person = {
	this.name = ""
}
 */


class Person {
	constructor({ name }) {
		this.name = name;
		this.array = []
	}
	introduce = () => {
		console.log(`Меня зовут ${this.name}`)
	};
	getConnections = () => {
		console.log(this.array)
	};
	addConnections = (obj) => {
		this.array.push(obj)
		obj.array.push(this)
	};
}

let Ivan = new Person({ 'name': "Иван" });
let Petr = new Person({ 'name': "Петр" });

Ivan.introduce()
Ivan.getConnections()
Ivan.addConnections(Petr)
Ivan.getConnections()
Petr.getConnections()

