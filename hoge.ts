const Price = {
    // オブジェクトのメソッドとして関数を作る場合は従来の関数で書く
    x: 100,
    yen1: function(){
        // 従来の関数ならばthisへアクセス可能
        return this.x + "円";
    },
    yen2: () => {
        // アロー関数ではThisにアクセスできない
        return this.x + "円";
    },
    yen3: function(){
        // オブジェクトの変数名を用いればOK
        return Price.x + "円";
    }
}

console.log(Price.yen1())
// console.log(Price.yen2())
console.log(Price.yen3())

// アロー関数にはarguments変数が使えない
function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.currentTarget.value);
  }


function foo(_a1:number, _a2:number) {
  return function() {
    return arguments._a1 + arguments._a2;
  };
}

  const f = foo(1, 2);
  console.log(f()); // 3
  console.log("hogehoge");
  