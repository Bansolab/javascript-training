// ch1-2 alert message
//alert('こんにちは');

// --------------------------
// ch1-4 console message
// --------------------------
const a = 10;
const b = 20;
const sum = a + b;
console.log(sum);

console.log('こんにちは', '現在', new Date(), 'です');

// --------------------------
// ch1-6 変数(let)を使いたい
// --------------------------
console.log('-------- ch1-6 --------');

// 様々な代入
let myString = '鈴木'; // 文字列を代入
let currentDtate = new Date(); // 現在の日付を代入
let myFunction = () => console.log('関数です'); // 関数を代入

// 数値の変数同士の足し算
let number1 = 10;
let number2 = 20;
let sumNumber = number1 + number2;
console.log(sumNumber); //結果：30

// 文字列の変数を結合
let familyName = '鈴木';
let firstName = '太郎';
let fullName = familyName + firstName;
console.log(fullName); // 結果：鈴木太郎

// 変数を別の変数に代入する
let value1 = 100;
let value2 = value1;
console.log(value2); // 結果：100（value1と同じ）

