var person_obj = {
	_init : function() {
		console.log("person init");
	},
	getName : function() {
		return this.name;
	},
	setName : function(name) {
		this.name = name;
	}
};

var student_obj = {
	_init : function() {
		console.log("student init");
	},
	getName : function() {
		return "Student Name: " + this.name;
	}
};

var Person = subClass(person_obj);
var person = new Person();
person.setName("zzoon");
console.log(person.getName());

var Student = Person.subClass(student_obj);
var student = new Student();
student.setName("iamhjoo");
console.log(student.getName());

console.log(Person.toString());
