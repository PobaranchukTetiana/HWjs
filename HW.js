
 Домашка:

1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)


let hamburger = 4;
let fries = 1;

if(hamburger >= 4 && fries >= 1){
    console.log('всі поїли')
} else {
    console.log('Ми йдемо в інше кафе')
}

2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.

 let price1 = 1000
 
 if(price1 >= 1000 && price1 <= 1900){
    console.log('ціна товару у проміжку між 1000 та 1900')
} else {
    console.log('ціна товару НЕ у проміжку між 1000 та 1900')
}

3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.

    (1 варіант )

let price2 = 1000
    
if(price2 >= 1000 && price2 <= 1900){
     console.log('ціна товару у проміжку між 1000 та 1900')
 } else {
     console.log('ціна товару не у проміжку між 1000 та 1900')
}

    (2 варіант)

    let price2 = 1000
    
if(!(price2 >= 1000 && price2 <= 1900)){
         console.log('ціна товару не у проміжку між 1000 та 1900')
} else {
         console.log('ціна товару у проміжку між 1000 та 1900')
}
    
4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.

    let poraRoku = 4

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

5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.
    
    let a = 1
    let b = 1
    let c = 10

    if (a >= b && a >= c ) {
        console.log('avg=a')
    } else
    if (b >= c && b >= a){
    console.log('avg=b')
    } else
    if (c >= a && c >= b){
        console.log('avg=c')
    }else {
        console.log('all numbers are equal') 
    }
  

6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.

    let number = 0;

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


7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.

   let obchyslennya = '+'
    let a = 1;
    let b = 2;

    switch(obchyslennya){
        case '+': 
            console.log(a+b);
            break;
        case '-': 
             console.log(a-b);
            break;
        case '*': 
             console.log(a*b);
            break;
        case '/':
            console.log(a/b);
            break;  
        default:
            console.log('Введіть один з символів  "+", "-", "*", "/". щоб провести операцію');
            break;  
    }

 8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

let str = "I love JavaScript";
let regexp = str.replace(/[aeiouy]/gi, '')
console.log(regexp)

//цю задачу не змогла вирішити сама тож додала відповідь з нашого останнього уроку.
9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

let metr = 5000
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

 
