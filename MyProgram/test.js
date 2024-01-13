console.log("Hi!, I am JavaScript")

let name = "Nirav"
var email = "np123@gmail.com" // can't using out of block
const id = 14 // can't change

{
    let name = "Jignesh"
}

email = "jp@gmail.com"

console.table([name, email, id])

// primitive

// 7 types : String,  number, boolean, null, undefined, symbol, BigInt

let name1 = null;

const id1 = Symbol('123')
const anotherid = Symbol('123')

// console.log(id == anotherid)

const bign = 122345678901234567890n

// Non-primitive(reference)

// Array, Objects, Functions

// console.log(typeof bign)

const myFunction = function(){
    console.log("Hello World!")
}

// console.log(typeof myFunction) // typepf is object function

const hero = ["nirav", "np", "pn"]

// console.log(typeof id)

const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");


console.log(sym2 === sym3); // false