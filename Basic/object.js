// 객체 생성 1
var grades = {'solbi' : 10, 'k8805' : 6, 'ssb' : 80};

// 객체 생성 2
var grades = {};
grades['solbi'] = 10;
grades['k8805'] = 6;
grades['ssb'] = 80;

// 객체 생성 3
var grades = new Object();
grades['solbi'] = 10;
grades['k8805'] = 6;
grades['ssb'] = 80;

// 반복문
var grades = {'solbi' : 10, 'k8805' : 6, 'ssb' : 80};
for (var name in grades) {
  document.write("key : " +name+" value : " +grades[name] + "<br />");
}

// 객체지향 프로그래밍
var grades = {
  'list' : {'solbi' : 10, 'k8805' : 8, 'ssb' : 80},
  'show' : function() {
  //alert('Hello world');
  //alert(this); //여기서 this는 grades를 가리키는 변수
  for (var name in this.list) {
    console.log(name, this.list[name]);
    }
  }
}
//alert(grades['list']['solbi']);
grades.show();
