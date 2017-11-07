/*
describe('Calculator', function() {

  it('should add numbers');

});
*/

/*
 * Unit tests for lib/calculator.js
 */

describe('Calculator', function() {
/*
  // inject the HTML fixture for the tests
  beforeEach(function() {
    var fixture = '<div id="fixture"><input id="x" type="text">' + 
      '<input id="y" type="text">' + 
      '<input id="add" type="button" value="Add Numbers">' +
      'Result: <span id="result" /></div>';

    document.body.insertAdjacentHTML(
      'afterbegin', 
      fixture);
  });

  // remove the html fixture from the DOM
  afterEach(function() {
    document.body.removeChild(document.getElementById('fixture'));
  });
  // call the init function of calculator to register DOM elements
  beforeEach(function() {
    window.calculator.init();
  });
*/

/*
The inject/remove boilerplate code can become tedious as the number of tests grow. There are many additional plug-ins and approaches to solving this problem. I’ve used:

karma-fixture
Once configured the HTML fixtures can be kept in HTML files which can be loaded in the style of:
*/
// inject the HTML fixture for the tests
  beforeEach(function() {
    // Why this line? See: https://github.com/billtrik/karma-fixture/issues/3
    window.fixture.base = 'test';
console.log(fixture);
    //fixture.load('calculator.fixture.html');
    window.fixture.load('hello.html');
    // init js lib
    window.calculator.init();
  });

  // remove the html fixture from the DOM
  afterEach(function() {
    fixture.cleanup();
  });

  it('should return 3 for 1 + 2', function() {
    document.getElementById('x').value = 1;
    document.getElementById('y').value = 2;
    document.getElementById('add').click();
    expect(document.getElementById('result').innerHTML).toBe('3');
  });

  it('should calculate zero for invalid x value', function() {
    document.getElementById('x').value = 'hello';
    document.getElementById('y').value = 2;
    document.getElementById('add').click();
    expect(document.getElementById('result').innerHTML).toBe('0');
  });

  it('should calculate zero for invalid y value', function() {
    document.getElementById('x').value = 1;
    document.getElementById('y').value = 'goodbye';
    document.getElementById('add').click();
    expect(document.getElementById('result').innerHTML).toBe('0');
  });

});

/*
HTML is injected into the browser (in the beforeEach block) for this test fixture.
The DOM elements can be accessed in the same way as working in real browser.
*/
