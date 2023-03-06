
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
