//'number' + 3 + 3
let result = "number" + 3 + 3;
console.log(result); // 'number' - it is string that why it will addition with string operation. Output: "number33"

//null + 3
let result = null + 3;
console.log(result); // null will be convert to 0, so Output: 3

//5 && "qwerty" - it will be output result "qwerty"

//+'40' + +'2' + "hillel"; - plus operator (+) converts its operand into a number. So result will be: "42hillel"

//'10' - 5 === 6;
//'10' - 5: The string '10' is converted to the number 10. Then, 10 - 5 = 5.
//5 === 6: This comparison checks if 5 is strictly equal to 6. Since 5 is not equal to 6, the result is false.

//true + false
// true converted to 1; false converted to 0. Then 1+0=1. Result: 1

//'4px' - 3
//'4px' couldn't be converted to number. It will be NaN(not a number)
// NaN - 3=NaN, I think result will be NaN

//'4' - 3
//'4' string converted to number 4. Result will be 1

//'6' + 3 ** 0;
//3 ** 0 = 1;
// '6' + 1 = string '61' is a result

//12 / '6' = 2 - result

//'10' + (5 === 6);
// (5 === 6) returns false
// '10' + 'false' = '10false'

//null == '' returns result 'true'

//3 ** (9 / 3); returns result 27

//!!'false' == !!'true'
//'false' and 'true' - they are non empty string
//!!'false' returns true
//!!'true' returns true
// true=true. So result is true

//0 || '0' && 1
//0 is a falsy value.
//'0' is a truthy value.
//1 is a truthy value.
// falsy || truthy = truthy
// truthy && truthy = truthy
// Result - 1

//(+null == false) < 1;
// +null  convers to number 0
// false converts to number 0
// 0 == 0 it's true
// true converts to 1
//result is 1<1 - false

//false && true || true
// false && true = false
// false || true = true
// result is true

//false && (false || true);
// (false || true) = true
// false && true = false
// result is false

//(+null == false) < 1 ** 5;
// +null=0
// false = 0
// 0 == 0 - true
// true = 1
// 1**5=1
// 1<1 - false
// result is false
