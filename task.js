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
    let discrim = b**2 - 4 * a * c; // Вычислиение дискриминанта
    // Нахождение корней квадратного уровнения в зависимости от условий
    if (discrim < 0) { 
      result = null;
      console.log(result);
   } else if (discrim == 0) {
       result = (-b + Math.sqrt(discrim)) / (2*a);;
       console.log(result);
   } else if (discrim > 0) {
       result = [(-b + Math.sqrt(discrim)) / (2*a), (-b - Math.sqrt(discrim)) / (2*a)];
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
   let personAge = currentDate.getFullYear() - dateOfBirthday.getFullYear();
   console.log(personAge);
   let result = "";
   // Вывод сообщения на консоль в зависимости от условий
   if (personAge >= 18) {
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
    //  Вычисление среднего значения с проверкой на количество введенных оценок
    let sumResult = 0;
    let averageMark = '';
    const numberMarks = 5;
    for (let i = 0; i < marks.length; i++) {
      sumResult = sumResult + marks[i];
      if (marks.length > numberMarks) {
          console.log(marks.length);   
          marks.splice(numberMarks);
      } 
    }

    averageMark = sumResult / marks.length;
    console.log(averageMark);
    
    return averageMark;
 
}


   