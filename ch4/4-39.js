// 생성자 함수 방식에서의 프로토타입 체이닝

function Person(name, age, hobby) {
	this.name = name;
	this.age = age;
	this.hobby = hobby;
}

var foo = new Person('foo', 30, 'tennis');

console.dir(foo.hasOwnProperty('name'));

console.dir(Person.prototype);