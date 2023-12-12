
// オブジェクトのプロパティで書くパターン
const Counter = {
    cnt: 0,
    CountUp: ()=>{
        Counter.cnt += 1;
        console.log(Counter.cnt)
    }
}

// クロージャを活用するパターン
const NewCounter = (function(){
    let cnt = 0;
    return function () {
        cnt += 1;
        console.log(cnt);
    };
})();

// 活用１
const TakeNumCounter = (function(){
    let cnt = 0;
    return function (num: number) {
        cnt += num;
        console.log(cnt);
    };
})();

// 活用２
const MakeCounter = function (num:number) {
    let current = 0;

    return function () {
        current = current + num;
        console.log(current + "da");
    };
};

const Incrementer = MakeCounter(1)
const Decrementer = MakeCounter(-1)

Counter.CountUp();
Counter.CountUp();
Counter.CountUp();

NewCounter()
NewCounter()
NewCounter()

TakeNumCounter(5)
TakeNumCounter(10)
TakeNumCounter(15)

Incrementer()
Decrementer()