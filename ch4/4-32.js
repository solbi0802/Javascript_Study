function myFunction() {
	console.dir(arguments);

	//arguments.shift(); 에러 발생

	// arguments 객체를 배열로 변환 
	var args = Array.prototype.slice.apply(arguments);
	console.dir(args);
}

myFunction(1,2,3);

// 4-33 slice()메서드 사용 
var arrA = [1, 2, 3];
var arrB = arrA.slice(0) //[1, 2, 3]
var arrC = arrA.slice(); // [1, 2, 3]
var arrD = arrA.slice(1); // [2, 3]
var arrE = arrA.slice(1, 2); // [2]