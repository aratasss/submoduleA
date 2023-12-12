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
