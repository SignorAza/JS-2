// var age = +prompt ('Введите ваш возраст');

// if(age<=18){
//     console.log('Вы еще молоды, Вам нужно учиться');
// }else if (age <= 50){
//     console.log('Вам нужно работать');
// }else if (age <= 59){
//     console.log('Вам скоро на пенсию');
// }else if (age <= 100){
//     console.log('Вы пенсионер');
// }else {
//     console.log('Что-то пошло не так')} 
var text = +prompt ('Готовы?');
var age = +prompt ('Введите ваш возраст');

if(age<=18){
    alert('Вы еще молоды, Вам нужно учиться');
}else if (age <= 50){
    alert('Вам нужно работать');
}else if (age <= 59){
    alert('Вам скоро на пенсию');
}else if (age <= 100){
    alert('Вы пенсионер');
}else {
    alert('Что-то пошло не так')}


    var text2 = +prompt ('Не расслабляемся');
var time = +prompt('Введите время в числах')
    switch(time) {
    case 0:
            alert('Полуночь');
            break;
    case 1:
            alert('1 час ночи');
            break;
    case 1:
            alert('1 час ночи');
            break;
    case 2:
            alert('2 часа ночи');
            break;
    case 3:
            alert('3 часа ночи');
            break;
    case 4:
            alert('4 часа ночи');
            break;
    case 5:
            alert('5 часа ночи');
            break;
    case 6:
            alert('6 часа ночи');
            break;
    case 7:
            alert('7 часов утра');
            break;
    case 8:
            alert('8 часов утра');
            break;
    case 9:
            alert('9 часов утра');
            break;
    case 10:
            alert('10 час ночи');
            break;
    case 11:
            alert('11 часов дня ');
            break;
    case 12:
            alert('12 часов дня');
            break;
    case 13:
            alert('1 час дня');
            break;
    case 14:
            alert('2 часа дня');
            break;
    case 15:
            alert('3 часа ночи');
            break;
    case 16:
            alert('4 часа дня');
            break;
    case 17:
            alert('5 часов дня');
            break;
    case 18:
            alert('6 часов вечера');
            break;
    case 19:
            alert('7 часов вечера');
            break;
    case 20:
            alert('8 часов вечера');
            break;
    case 21:
            alert('9 часов вечера');
            break;
    case 22:
            alert('10 часов вечера');
            break;
    case 23:
            alert('11 часов вечера');
            break;
    default:
            alert('Выберите заного');
            break;
    }        


 
var text3 = +prompt ('И последнее задание');       
var a = +prompt ('Выберите первое число')       
var b = +prompt ('Выберите второе число')       
var c = +prompt ('Выберите третье число')

if ((b>a) && (b<c) || (b<a) && (b>c)){
    alert('Ваше среднее число ' + b);
}else {alert(c)}   

var text3 = +prompt ('Красавчик');





// switch(day) {
//     case 1:
//         alert('Пн');
//         break;
//     case 2:
//         alert('Вт');
//         break;
//     case 3:
//         alert('Ср');
//         break;
//     default: 
//         alert('такого дня недели нету');
//         break;
// }


    // Условие

// 2 == '2' - не строгое сравнение, сравнивает оба значения между собой
// 2 === '2' - строгое сравнение, сравнивает оба значения и тип данных между собой


// if(1 === '1') {
//     console.log('Good');
// }else {
//     console.log('bad');
// }


// var a = prompt('Введите слово Привет');

// if(a == 'Привет') {
//     console.log('Молодец');
// }else {
//     console.log('Холодец');
// }


// var mark = +prompt('Введите свою оценку');

// if(mark == 5) {
//     console.log('Покупаем айфон');
// }else if(mark == 4) {
//     console.log('Покупаем airpods');
// }else if(mark == 3) {
//     console.log('Покупаем машину');
// }else if(mark == 2) {
//     console.log('Сразу в детдом');
// }else {
//     console.log('The end');
// }


// var word = prompt('Введите секретное слово');

// if( word == 'admin' || word == 'админ' || word == 'zafar') {
//     console.log('Доступ открыт');
// }else {
//     console.log('Доступ закрыт');
// }


// || - оператор ИЛИ
// && - оператор И
//  ! - оператор не - ставиться перед значением или функцией - возвращает противоположное значение
// isNaN() - функция проверяет на NaN если внутри NaN то отдаст true иначе false


// var one = +prompt('Введите первое число');
// var two = +prompt('Введите второе число');

// if(one > two && !isNaN(one) && !isNaN(two) ) {
//     console.log(one + ' больше чем ' + two);
// }else if(two > one && !isNaN(one) && !isNaN(two) ) {
//     console.log(two + ' больше чем ' + one);
// }else if(one == two && !isNaN(one) && !isNaN(two)) {
//     console.log(one + ' равно ' + two);
// }else {
//     console.log('Вы ввели не число');
// }


// var day = +prompt('Введите день недели'); 

// switch(day) {
//     case 1:
//         alert('Пн');
//         break;
//     case 2:
//         alert('Вт');
//         break;
//     case 3:
//         alert('Ср');
//         break;
//     default: 
//         alert('такого дня недели нету');
//         break;
