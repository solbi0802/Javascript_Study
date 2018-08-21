var ArrCreate = function(arg) {
	var arr = [1,2,3];

	return {
		getArr : function() {
			return arr;
		}
	};
}

var obj = ArrCreate();
var arr = obj.getArr();
arr.push(5);
console.log(obj.getArr());
//객체를 반환하는 경우 깊은 복사로 복사본을 만들어서 반환하는 것을 추천!