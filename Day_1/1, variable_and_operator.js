
//-----------------------------  INPUT AND OUTPUT-----------------------------//
// input is a method or a way to obtain data form user input by using methods like prompt or other method like event listener
// output is a method or a way to show an information to user like console.log 

//-----------------------------  VARIABLES -----------------------------// 
// technically it is just a identifier to hold a value, for example the name 'place' is a varibale thah hold string value of a place like "Russia"
// 3 Type of ways to define a variable

// Let is the type of varibble that can be used to change the value inside of it
let let_var_a=1
let_var_a = 2
console.log(let_var_a) // this will overwrtie value 1 to 2

if (true) { //example of how let cannt be accesed outside { }
    let result_let="yeay its let var"
}
console.log(result_let) // it will result and error that says result_let is not defined

// var act the same like let but it can be accesed outside a bracjet {}
if (true) { //example of ho var can be accesed outside {}
    var result="yeay its var"
}
console.log(result)

//const it basicalle a varibale that can  be changed or overwrited
const const_var_a=1
const_var_a = 2 // it thorws an error cause const can be assignet or overwrited by a new valuie

//BEST PRACTICE : USE 'LET' TO DEFINEN VARIABLE TO AVOID BUG, BECAUSE 'VAR' CAN BE ACCESED OUTSIDE BRACKET (IT CAN BE USED BUT WITH SPECIFIC CASE FOR ACCESING VARIBLE VALUE)

//----------------------------- OPERATOR : BY USING CHATGPT -----------------------------//

//arithmetic operators
let a = 10;
let b = 5;

console.log(a + b); // Penjumlahan (Output: 15)
console.log(a - b); // Pengurangan (Output: 5)
console.log(a * b); // Perkalian (Output: 50)
console.log(a / b); // Pembagian (Output: 2)
console.log(a % b); // Modulus (Sisa bagi, Output: 0)
console.log(a ** b); // Pangkat (Output: 100000)

//comparation operator
let x = 10;  // Sama dengan (=)
x += 5;      // x = x + 5 (Output: 15)
x -= 3;      // x = x - 3 (Output: 12)
x *= 2;      // x = x * 2 (Output: 24)
x /= 4;      // x = x / 4 (Output: 6)
x %= 2;      // x = x % 2 (Output: 0)

console.log(10 == "10");  // Sama nilai (true)
console.log(10 === "10"); // Sama nilai & tipe (false)
console.log(10 != 5);     // Tidak sama (true)
console.log(10 > 5);      // Lebih besar (true)
console.log(10 < 5);      // Lebih kecil (false)
console.log(10 >= 10);    // Lebih besar atau sama (true)
console.log(10 <= 5);     // Lebih kecil atau sama (false)