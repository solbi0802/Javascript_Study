// 생서자 함수 
var Person = function (name) {
	this.name = name;
};

// 객체 생성
var foo = new Person('foo');
console.log(foo.name);
