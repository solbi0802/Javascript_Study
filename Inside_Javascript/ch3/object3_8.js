// 3-8 for in 문을 통한 객체 프로퍼티 출력

var foo = {
    name : 'foo',
    age : 30,
    major : 'computer science'
};

// for in 문을 이용한 객체 프로퍼티 출력
var prop;
for(prop in foo) {
    console.log(prop, foo[prop]);
}

// 객체 프로퍼티 삭제 (delete는 프로퍼티만 삭제! 객체는 삭제 x)
var foo2 =  {
    name : 'foo',
    nickname : 'babo'
};

console.log(foo2.nickname);
delete  foo2.nickname;
console.log(foo2.nickname);

delete  foo2;
console.log(foo2.name);