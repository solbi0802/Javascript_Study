//루프 안에서 클로저 활용 시 주의

/*function countSeconds(howMany) {
	for ( var i  = 1; i <= howMany; i++) {
		setTimeout(function () {
			console.log(i);
		}, i * 1000);
	}
} ;
countSeconds(3);*/

// -> 4를 연속 4번 출력하게 됨 

//수정본 

function countSeconds(howMany) {
	for(var i = 1; i <= howMany; i++) {
		(function (currentI){
			setTimeout(function() {
				console.log(currentI);
			}, currentI * 1000);
		}(i));
	}
};

countSeconds(3);