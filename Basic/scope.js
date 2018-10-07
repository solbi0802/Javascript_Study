/*
var vscope = 'global';
function fscope() {
    alert(vscope);
}
fscope();
*/

var vscope = 'global';
function fscope() {
  var vscope = 'local';
  alert('함수안 ' + vscope);
}
fscope();
alert('함수밖 ' +vscope);
