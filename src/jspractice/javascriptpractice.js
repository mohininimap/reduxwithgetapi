
let days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const d = new Date();
let day = d.getDay()
let today = days.indexOf(days[day])
console.log(today)
switch (today) {
  case 0:
    document.write(`day is ${days[0]}`);
    break;
    case 1:
        document.write(`day is ${days[1]}`);
        break;
  case 2:
    document.write(`day is ${days[2]}`);
    break;
  case 3:
    document.write(`day is ${days[3]}`);
    break;
  case 4:
    document.write(`day is ${days[4]}`);
    break;
  case 5:
    document.write(`day is ${days[5]}`);
    break;
  case 6:
    document.write(`day is ${days[6]}`);
    break;

    default:
        document.write(`day is very happy today`);
}
// --------------------------
// var a=10;

// function fun1(){
//  console.log(a) 
// }

// fun1() //output is 10

// ------------------------
// a=10;

// function fun1(){
//  console.log(a) 
// }

// fun1() //output 10
// ---------------------------
// console.log(a)

// function fun1(){
//  var a=10;
// }

// fun1() // a is not defined
// ------------------

// function fun1(){
//   console.log(a)
// var a=10;
// }

// fun1() //undefined
// ------------------------

// console.log(a) //undefined
// {
//   var a=10;
// }

// --------------------
// var a=2;
// function fun1(){
//   console.log(a)
// a=10;
// }

// fun1() //output 2

// -------------------
// var a=2;
// function fun1(){
//   console.log(a)
// var a=10;
// }

// fun1() //output undefined



