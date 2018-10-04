Function.prototype.method = Function(name, func) {
	this.prototype[name] = func;
}

Function Person(arg) {
	this.name = arg;
}

Person.method("setName", Function(value) {
	this.name = value;
});

Person.method("getName", Function() {
	return this.name;
});

var me = new Person("me");
var you = new Person("you");
console.log(me.getName());
console.log(you.getName());