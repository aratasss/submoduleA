
// 接続
const kv = await Deno.openKv();

// 書き込みデータ
const sample_1 = {
  title: "hoge",
  desc: "very hoge."
}

// 書き込み
await kv.set(["books", sample_1.title], sample_1);

// 読み取り
const result = await kv.get(["books", sample_1.title]);

// 結果出力
console.log(result.value)