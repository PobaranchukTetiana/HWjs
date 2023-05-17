//Перетворити завдання з попередньої домашки на функції. Усі змінні, котрі використовувались в якості вхідних даних передавати в функції в якості параметрів.
//1
function mcDonalds (hamburger,fries) {
if(hamburger >= 4 && fries >= 1){
    console.log('всі поїли')
} else {
    console.log('Ми йдемо в інше кафе')
}
}
mcDonalds(3,2)

//2

function price (price1) {    
if(price1 >= 1000 && price1 <= 1900){
    console.log('ціна товару у проміжку між 1000 та 1900')
} else {
    console.log('ціна товару НЕ у проміжку між 1000 та 1900')
}
}
price(2000)


//3
(1 варіант )

function price (price2) {    
    if(price2 >= 1000 && price2 <= 1900){
        console.log('ціна товару у проміжку між 1000 та 1900')
    } else {
        console.log('ціна товару не у проміжку між 1000 та 1900')
   }
    }
    price(2000)

    (2 варіант)

    function price (price2) {    
if(!(price2 >= 1000 && price2 <= 1900)){
         console.log('ціна товару не у проміжку між 1000 та 1900')
} else {
         console.log('ціна товару у проміжку між 1000 та 1900')
}
    }
    price(1900)
        
//4
function DiznaysyaPoruRoku (poraRoku) {    

if (poraRoku == 1)
    console.log('Vesna')
else 
if (poraRoku == 2)
    console.log('Lito')
else 
if (poraRoku == 3)
    console.log('Osin')
else 
if (poraRoku == 4)
    console.log('Zyma')
else
    console.log('введіть цифру від 1-4 якщо хочете дізнатись пору року')
}

DiznaysyaPoruRoku(4)

//5

function avg (a,b,c) {    

    if(a < b && b < c){
        console.log('B is the average number')
    } else if (b < a && a < c) {
        console.log('A is the average number')
    } else if(c < a && a < b) {
        console.log('A is the average number')
    } else if(c < b && b < a) {
        console.log('B is the average number')
    }
      else if(b < c && c < a) {
        console.log('C is the average number')
    } else if(a < c && c < b) {
        console.log('C is the average number')
    } else {
        console.log('Other non-valid cases')
    }
}

avg(1,2,3)

//6

function  DenTyjnya(number) {    

switch(number){
    case 1: 
        console.log('Понеділок');
        break;
    case 2: 
        console.log('Вівторок');
        break;
    case 3: 
        console.log('Середа');
        break;
    case 4: 
        console.log('Четвер');
        break;  
    case 5: 
        console.log('Пятниця');
        break;
    case 6: 
        console.log('Субота');
        break;
    case 7: 
        console.log('Неділя');
        break;
    default:
        console.log('Щоб побачити назву тижня введіть число від 1-7');
        break;  
}
}
DenTyjnya(5)

//7

let dodavannya = (a,b) => {
    return (a + b)
    }
let vidnimannya = (a,b) => {
    return (a - b)
    }
let mnojennya = (a,b) => {
    return (a * b)
    }
let dilennya = (a,b) => {
    return (a / b)
    }
console.log(dodavannya(3, 5));

//8

function str() {
let str = "I love JavaScript";
let regexp = str.replace(/[aeiouy]/gi, '')
console.log(regexp)
}
str()

//9

function metr1 (metr) {    

let kilometr = metr/1000
let arr = [metr,kilometr]
let result = "";

for (let i = 0; i<arr.length; i++){
let number = arr[i];
let ending = "";
if (number===Math.round(number)) {
    if (number % 10 ===0 || (number %10>=5 && number % 10 <=19)){
        ending = "ів"
    }else if (number %10 ===1){
        ending = ""
    }else if (number %10 >=2 && number %10 <=4){
        ending = "и"
    }
  }
  else {
    ending = "а"
  }
  if (i===0) {
    result = (`${metr} метр${ending}= `)
  } else {
    result = `${result} ${kilometr} кілометр${ending}`
  }
 }
 console.log(result)
}
 metr1(5000)