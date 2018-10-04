//배열
var member = ['solbi', 'k8805', 'ssb'];
alert(member[0]);
alert(member[1]);
alert(member[2]);

function get_members() {
  return ['solbi', 'k8805', 'ssb'];
}
var members = get_members();
document.write(members[0]);
document.write(members[1]);
document.write(members[2]);

for (i = 0; i < members.length; i++) {
  // members[i].toUpperCase()는 members[i]에 담긴 문자를 대문자로 변환
  documnet.write(member[i].toUpperCase());
  document.write('<br />');

}

//배열의 크기
var arr = [1, 2, 3, 4, 5];
alert(arr.length);

// 배열의 끝에 원소 추가
var li = ['a', 'b', 'c', 'd', 'e'];
li.push('f');
alert(li);

// 여러개의 원소를 배열에 추가
var li = ['a', 'b', 'c', 'd', 'e'];
li = li.concat(['f', 'g']);
alert(li);

// 배열의 시작점에 원소 추가
var li = ['a', 'b', 'c', 'd', 'e'];
li.unshift('z');
alert(li);

// 첫번째 인자에 해당하는 원소부터 두번째 인자에 해당하는 원소 숫자만큼의 값을
//  배열로부터 제거한 후 리턴
var li = ['a', 'b', 'c', 'd', 'e'];
li.splice(2, 0, 'B'); // 두번째 인덱스 뒤에 'B'를 추가
alert(li);

// 배열의 첫번째 원소 제거
var li = ['a', 'b', 'c', 'd', 'e'];
li.shift();
alert(li); // 출력 : b, c, d, e

// 배열의 마지막 원소 제거
var li = ['a', 'b', 'c', 'd', 'e'];
li.pop();
alert(li);

// 배열의 정렬
var li = ['c', 'e' 'a', 'b', 'd'];
li.sort();
alert(li);

// 역순 정렬
var li = ['c', 'e' 'a', 'b', 'd'];
li.reverse();
alert(li);
