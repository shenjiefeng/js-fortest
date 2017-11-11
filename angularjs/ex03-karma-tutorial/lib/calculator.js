'use strict' //严格模式下你不能使用未声明的变量。

window.calculator = window.calculator || {};

(function() {

/* Run npm test and there should be a failing test stating Expected ‘12’ to be ‘3’.
  var calculate = function() {
    var x = document.getElementById('x').value;
    var y = document.getElementById('y').value;
    document.getElementById('result').innerHTML = x + y;
  };
*/
  var getIntById = function(id) {
    return parseInt(document.getElementById(id).value, 10);
  };

  var calculate = function() {
    var sum = getIntById('x') + getIntById('y');
    document.getElementById('result').innerHTML = isNaN(sum) ? 0 : sum;
  };

  window.calculator.init = function() {
    document.getElementById('add').addEventListener('click', calculate);
  };
})();
