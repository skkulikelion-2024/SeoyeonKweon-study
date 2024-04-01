//async & await
//clear style of using promise :) -->깔끔하게 promise를 사용할 수 있는 방법


// 1. async
async function fetchUser() {
                // do network request in 10 secs....
                return'ellie';
        }

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
} //Promise를 리턴하는데, 정해진 밀리세컨드가 지나면 resolve를 호출하는 promise를 리턴하게 된다.

async function getApple() {
        await delay(2000); // await은 async가 붙은 함수 안에서만 쓸 수 있다
        return 'apple';
}

async function getBanana() {
        await delay(1000);
        return 'banana';
}

async function pickFruits() {
        const applePromise = getApple();
        const bananaPromise = getBanana();
        const apple = await getApple();
        const banana = await getBanana();
        return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
        return Promise.all([getApple(), getBanana()]).then(fruits =>
        fruits.join(' + ')
        );
}
pickFruits().then(console.log);

function pickOnlyOne() {
        return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log); //먼저 전달된 애 하나만 전달