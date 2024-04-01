'use strict';

// Promise is a Javascript object for asynchronous operation. --> 비동기적인걸 수행할 때 콜백 함수 대신에 쓸 수 있는 유용한 것.
// state와 producer vs consumer
// state: pending (우리가 지정한 operation이 진행되고 있을 때)-> fulfilled or rejected
// Producer vs Consumer

//1. Producer
// when new promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    //doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        resolve('ellie'); //비 동기적으로 수행하고 싶은 코드를 작성하고 성공적으로 잘했다면 resolve를 불러옴
        //reject(new Error('no network')) //실패했다면, 실패한거와 실패한 이유를 에러를 전달하게 된다.
    }, 2000);
});

//2. Consumers: then, catch, finally
promise // then과 catch를 이용해서 성공한 값, 실패한 에러를 받아와서 우리가 원하는 방식으로 작동하게 만들면 된다.
.then(value => {
    console.log(value);
})
.catch(error => {
    console.log(error);
})
.finally(() => {
    console.log('finally');
});

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2) // then에서는 값을 바로 전달해도 되고 또 다른 비동기인 promise를 전달해도 된다.
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    });
})
.then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
new Promise((resolve, reject) => {
    setTimeout(() => resolve('hen'), 1000);
});
const getEgg = hen =>
new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => egg`)), 1000);
});
const cook = egg =>
new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => fried`), 1000);
});


getHen()//
.then(getEgg)
.then(cook)
.then(console.log)
.catch(console.log);
// 콜백함수를 전달할 때 받아오는 value를 다른 함수로 바로 하나를 호출하는 경우에는 생략이 가능하다.

