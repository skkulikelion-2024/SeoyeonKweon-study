//1. String concatenation : +기호를 사용해서 문자열과 문자열끼리 합해서 새로운 문자열을 만들어냄
console.log('my' + ' cat');
console.log('1' + 2); //-> 문자열에 숫자를 더하게 되면 숫자가 문자열로 변환돼서 합쳐질 수 있음
console.log(`string literals: 

'''
1 + 2 = ${1 + 2}`); // -> 백틱을 활용해서 나타내기 가능. 백틱이랑 $기호 활용하면 변수값을 계산해서 string으로 포함해서 문자열을 만들 수 있다.
// 줄바꿈을 하거나 중간에 특수기호 사용해도 문자열로 바껴서 나옴.

console.log('ellie\'s book'); // 원화 키보드 눌러서 역슬래쉬 해줘야 제대로 나옴. ''랑 뭐가 연결된건지 헷갈려함
console.log("ellie's \nbook"); // 줄바꿈을 해주고 싶다면 \n을 해주기
console.log("ellie's \n\tbook"); // 줄바꾸고 tab 키까지 적용하고 싶다면 \n\t라과 하면 됨.

//2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
//counter = counter + 1;
// preIncrement = counter; 
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++; //먼저 변수의 값을 postIncrement에 할당하고 뒤에 counter의 값을 하나 증가시키는 것
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter; // 앞에 붙으면 바로 업데이트돼서 할당되고 뒤에 붙으면 값을 할당하고 그 뒤에 업데이트
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

//4. Assignment operators
let x = 3;
let y = 6;
x += y; //x = x + y;
x -= y;
x *= y;
x /= y;

//5. Comparison operators
console.log(10 < 6); //less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

//6. Logical operators:  || (or), && (and), ! (not)
const value1 = false;
const  value2 = 4 < 2;

// || (or) 처음으로 true가 나오면 거기서 멈춤. 하나라도 true이면 true
console.log(`or: ${value1 || value2 || check()}`); // 결국 check 함수는 true로 값을 return 하는 함수
// check와 같은 함수들은 (heavy한 operatoration) 제일 뒤에다 배치하는게 효율적이다.

// &&(and), finds the first falsy value (무조건 셋다 true여야함)
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress log if-statement
// nullableobject && nullableobject.something --> object가 null이면 false가 되기 때문에 뒤에가 실행이 안됨. --> nullbject가 null이 아닐때만 nullobject에 something이라는 value를 받아올 수 있다.
/* if (nullableobject != null) { // != 같지않다는 의미
    nullableobject.something;
} <-- ReferenceError: nullableobject is not defined */ 

function check () {
    for (let i = 0; i < 10; i++){
        //wasting time
        console.log(1 + 1);
    }
    return true;
}

// ! (not) 값을 반대로 바꿔주는 역할
console.log(!value1);


//7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); //문자로된 5나 숫자 5나 똑같다
console.log(stringFive != numberFive);

//=== strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); //false
console.log(ellie1 === ellie2); //false
console.log(ellie1 === ellie3); //true

// equality - puzzler
console.log(0 == false); //true
console.log(0 === false); //false
console.log('' == false); //true
console.log('' === false); //false
console.log(null == undefined); //true
console.log(null === undefined); //false


//8. Conditional operators: if
// if, else if, else     
const myName = 'ellie';
if (myName === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (myName === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(myName === 'ellie' ? 'yes' : 'no'); // ?를 활용해서 name === 'ellie'가 true니? 맞으면 yes, 틀리면 no

//10. Switch statement
// use for multiple if checks
//use for enum-like value check (열거형)
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
        case 'Chrome':
        case 'Firefox': // 출력하는 값이 같으면 이렇게 묶을 수도 있다.
                console.log('love you!');
                break;
                default:
                    console.log('same all!');
                    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {  // statement 가 false로 나오기 전까지 계속 출력
    console.log(`while: ${1}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0); // 먼저 'do while: 0' 블럭 먼저 실행하고 i가 0보다 큰지 판단
// 블럭 먼저 실행하고 싶으면 do while, 조건문이 맞을때만 블럭 실행하고 싶으면 while문


// for loop, for(begin; condition; step) begin은 딱 처음에 한번만, 조건 쓰고, 어떤 단계를 밟아나갈지
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}


// nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

// break, continue
//break : 루프를 완전히 끝내라
// continue : 지금껏만 스킵하고 다음 스텝으로 넘어가라

// 01. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i <=10; i++) {
    if (i % 2 === 0) {
        console.log(`q1. ${i}`);
    }
} //q1이 뭐징..?

// 02. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    }
    console.log(`q2.${i}`);
}

//Funtion
// 1. Function declaration
// -프로그램을 구성하는 빌딩블럭
// -subprogram은 여러번 재사용이 가능하다는 장점이 있음
// -한 가지의 과제를 수행하거나 값을 계산할 때 사용

// function name(param1, param2) { body... return; } 함수 이름 정해주고 파라미터 할당
//one function === one thing 함수 하나는 한가지 일
//naming: doSomething, command, verb 동사형태로 이름 지정해야함. 변수이름 저장할때는 nouns.
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS --> 변수에도 할당 가능하고, 파라미터로 전달도 되고, 함수를 리턴할 수도 있다.

function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);

//2. Parameters
// premotove parameters: passed by value --> 메모리에 벨류가 그대로 저장
// object parameters: passed by reference --> 메모리에 레퍼런스가 그대로 저장
function changeName(obj) {
    obj.name = 'coder';
} 
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// 3. Default parameters
function showMessage(message, from) {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters --> 배열 형태로 전달
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global'; //global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
}
printMessage();

// 6. Return a value (파라미터로 값을 전달받아서 계산한 값을 리턴할 수 있다.)
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        //long upgrade logic...
    }
}

// good (조건이 맞지 않을 때 바로 return 시켜버리는게 더 좋다)
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () { // anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function espression
function randomQuiz(answer, printYes, printNo) {
    if(answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
//anonymous function
const printYes = function () {
    console.log('yes!');
};

// named function
//better debugging in debugger's stack traces
//recursions --> 함수 안에서 함수 자신 스스로를 부르는 것것
const printNo = function print() {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function --> 함수를 간단하게 만들어줌
// always anonymous
const simplePrint1 = function () {
    console.log('simplePrint1');
};

const simplePrint2 = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply3 = (a, b) => {
    // do something more
    return a * b;
};

// IIFE: Immediately Invoked Funcion Expression
(function hello() {
    console.log('IIFE');
})();

//끄읏~ *(^^)*
//늦게제출해서 죄송합니다,,
