//1. use strict
//added in ES 5
//use this for Valina Javascript.
'use strict';

//2. Variable, rw(read/write) 읽고 쓰는게 가능. let name이라 했다가 Hello로 바꿔도 문제가 없는게 그 이유
//let (added in ES6) ES6에 추가된것 이라는 뜻. ES6 자바스크립트 문법 버전
let globalName = 'global name'; //글로벌한거는 어느 곳에서나 접근이 가능함.
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
// console.log(name); {} 안에 들어간건 밖에서 읽지 못함.
console.log(globalName);
// var (don't ever use this!)
// var hosting (move declaration from bottom to top) 어디 선언했냐 상관없이 선언한걸 위로 끌어올려주는것
// has no block scope -블럭을 철저히 무시함. 블럭 안에 작성해도 출력됨.
{
    age = 4;
    var age;
}
console.log(age);

// 3. Constant, r(read only) 읽기만 가능해서 다른 값으로 바꿀 수가 없는것 :한번 할당하면 절대 안바뀌는 값
//use const whenever possible.
//only use let if variable needs to change.

// favor immutable data type always for a few reasons:
// -security
// -thread safety
// -reduce human mistakes
const daysInWeek = 7;
const maxnumber = 5;

//Note!
// Immutable (데이터 자체를 변경 불가능. ellie를 통째로 메모리에 올렸다가 다른 문자열로 바꾸는건 가능하지만, ellie를 elle라고 쓰거나 데이터 자체를 바꾸는건 불가능) data types: primitive types, frozen objects (i.e. object. freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// -security
// -thread safety
// -reduce human mistakes

// 4. Variable types
// primitive (값 자체가 value로 메모리에 바로 저장됨), single item: number, string, boolean, null, undefined, symbol
// object (메모리에 한번에 다 못올라감. object를 가리키는 reference가 메모리에 저장됨. const ellie라고 선언하고 object를 할당하면 ellie가 가리키는 곳에는 reference가 있다. *ref가 object를 가리킴. const ellie라고 하면 ellie가 가리키는 포인터만 잠기고 name이나 age는 안 잠겨서 얘네들은 값 계속 바꿔도 됨.), box container (single item들을 하나로 묶어서 관리)
// function, first-class function (function도 다른 데이터 타입처럼 변수에 할당이 가능하고 함수의 파라미터로도 전달이 되고 함수를 리턴할 수 있다.)

/* c언어
//int main() {
    short a = 12; 아래 3개 정수 할당할 때 많이 씀
    int a = 12;
    long b = 1234;
    float d = 1.2f 아래 두개 소수나 실수 할당할 때 주로 쓰임
    double e = 8.2;
    return 0;
}
*/


const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1/ 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting ='hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string) // 백틱기호를 이용해서 원하는 문자열을 적고 $과 기호를 이용하면 변수의 값이 자동적으로 붙여져서 출력함.
console.log(`vale: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob); // --> 백틱 사용 안하면 띄어쓰기 + , 다 고려해서 작성해야함.

// boolean
// false: 0, null, undefined NaN, '' 요것들은 다 false로 간주됨.
// true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null; //너는 명확하게 텅텅 비어있어. empty
console. log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined // 선언은 되었는데 아무것도 값이 지정되지 않음.
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
// symbol 고유한 식별자가 필요하거나 동시다발적으로 일어날 때 우선순위를 주고싶을 때 사용. symbol은 동일한 아이들을 활용해서 만들지만 동일하지 않음. 동일한 string을 작성했어도 다른 symbol로 만들어진다.
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id'); //--> 동일한 심볼을 만들고 싶다? symbol.for('id')
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof x}`); //.description 활용해서 심볼을 꼭 string으로 변환해서 출력해야함.
// 윗부분 기억안남 다시들어 

//object, real-life object, data structure --> 물건과 물체를 대표할 수 있는 박스형태
const ellie = { name: 'ellie', age: 20}; // 그냥 변수 네임 age는 아무것도 설명 못하지만 ellie라는 object를 만들어서 ellie의 이름과 나이를 지정해줌.

// 5. Dynamic typing: dynamically typed language 자바스크립트는 변수를 선언할 때 어떤 타입인지 선언하지 않고 run할 때 할당된 값에 따라서 타입이 변경될 수 있다.
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5; // 문자열에 +가 있으니까 5를 문자열로 바꿔줌
console. log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2'; //숫자연산에 쓰이는 나누기 연산자를 썼네? 그리고 문자열 안에 들어가있는게 실제로도 숫자 값이잖아? --> 숫자로 바꿔
console.log(`value: ${text}, type: ${typeof text}`);

