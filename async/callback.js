'use strict';
//Javascript is synchronous. 자바스크립트는 동기적인 아이
//Execute the code block by orger after hoisting. --> 호이스팅 된 이후부터 코드가 작성한 순서에 맞춰 하나씩 실행된다는 뜻
//hoisting: var, function declaration 함수 선언들이 젤 위로 올라가는 것
console.log('1');
setTimeout(function() {

}, 1000) // setTimeout: 우리가 지정한 시간이 지나면 우리가 전달한 콜백 함수를 호출. 콜백 함수: 전달해준 함수를 너가 나중에 불러줘~
// 여기서 1초()=1000밀리세컨) 가 지나면 우리가 전달한 함수가 실행되는 것
console.log('2');
console.log('3');

//synchronous : 정해진 순서에 맞게 코드가 실행되는 것
//aysnchronous : 비동기적으로 언제 코드가 실행될지 예측할 수 없는것

console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');


//synchronous callback 동기적으로 실행하는 콜백
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));

//aysnchronous callback 언제 실행될지 모르는 콜백
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(()=> console.log('async callback'), 2000);


//콜백지옥
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
                } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

/*  prompt is not defined. 질문하기
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user, 
            userWithRole => {
                alert(
                    `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                    );
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);
*/












