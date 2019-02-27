"use strict" // Строгий режим
// ЗАДАЧА № 1
function calculateQuadraticEquation() {
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}
// Реализация функцию getResult(a,b,c)
function getResult(a,b,c){
    let result ='';
    let x1 = '';
    let x2 = '';
    let discrim = b**2 - 4 * a * c; // Вычислиение дискриминанта
    // Нахождение корней квадратного уровнения в зависимости от условий
    if (discrim < 0) { 
      result = "Нет корней"
      console.log(result);
   } else if (discrim == 0) {
       x1 = (-b + Math.sqrt(discrim)) / (2*a);
       x2 = x1;
       result = x2;
       console.log(result);
   } else if (discrim > 0) {
       x1 = (-b + Math.sqrt(discrim)) / (2*a);
       x2 = (-b - Math.sqrt(discrim)) / (2*a);
       result = [x1, x2];
       console.log(result);
   }
  
     return result;
}

// ЗАДАЧА № 2

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}
   // Реализация функцию askDrink()
function askDrink(name,dateOfBirthday){
   // Расчет возраста пользователя
   let currentDate  = new Date();
   let ageMen = currentDate.getFullYear() - dateOfBirthday.getFullYear();
   console.log(ageMen);
   let result = "";
   // Вывод сообщения на консоль в зависимости от условий
   if (ageMen >= 18) {
     result = `Не желаете ли олд-фэшн, ${name}?`;
     console.log(result);
     return result;
   } else {
     result = `Сожалею, ${name}!`;
     console.log(result);
     return result;
   }
 
}

// ЗАДАЧА № 3

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

// Реализация функцию getAverageMark(marks)
function getAverageMark(marks) {
    let sumResult = 0;
    let newMarks = [];
    // Создание массива для ввода чисел через проблем или запятную
    for (let i = 0; i < marks.length; i++) {
      if (i % 2 == 0) {
        newMarks.push(marks[i]);
      }
    }
    //  Вычисление среднего значения с проверкой на количество введенных оценок
    let averageMark = '';
      if (newMarks.length <= 5) {
        for (let i = 0; i < newMarks.length; i++) {
          sumResult = sumResult + newMarks[i];
          averageMark = sumResult / newMarks.length;
        } console.log(averageMark);
      } else if (newMarks.length > 5) {
         for (let i = 0; i < 5; i++) {
           sumResult = sumResult + newMarks[i];
           averageMark = sumResult / 5;
         } console.log(averageMark);
           console.log(newMarks.length);
       }
  
    return averageMark;
 
}