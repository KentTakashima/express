const { MongoClient } = require("mongodb");
// 下のURIをご自分の値に変更してください
const uri = "mongodb+srv://2101115089:jfoiam286fkajfoijafoi@cluster0.cgjl5e6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);
async function run() {
const database = client.db('notes');
const movies = database.collection('notes');
// idが1のデータを更新
const movie = await movies.replaceOne(
{
id: 1,
title: 'ノート1のタイトルです',
subTitle: 'ノート1のサブタイトルです',
bodyText: 'ノート1の本文です'
},
{
id: 1,
title: 'ノート1のタイトル更新しました',
subTitle: 'ノート1のサブタイトルです',
bodyText: 'ノート1の本文です'
});
console.log(movie);
// 最後にクロースする
await client.close();
}
run();