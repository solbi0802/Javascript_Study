function Person(name) {
	this.name = name;
}

var foo = new Person('foo');

//foo.sayHello();

Person.prototype.sayHello = function() {
	console.log('Hello');
}

foo.sayHello();