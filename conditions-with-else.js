// задание 1
const userAge = 20;


/*
  напиши ниже условие, которое выведет в консоль текст "ты пацан" 
  если userAge меньше 35, иначе выведет текст "не по-пацански"
*/
// тут твой код
if (userAge > 35){
    console.log('you pacan')
}
else {
    console.log('ne po pacancky')
}


//задание 2
const isUser = false;

/* 
  напиши ниже условие, которое выведет в консоль текст "привет, юзер", если 
  значение константы isTrue истинно, иначе нужно вывести "не пользователь ты мне"
*/
// тут твой код
if(isUser === true){
    console.log('привет, юзер')
}
else{
    console.log('не пользователь ты мне')
}


//задание 3
const password = "sherlock";
const realPassword = "holmes";

/* 
   напиши ниже условие, которое выведет в консоль текст "правильный пароль" 
   только в том случае, если значения констант password и realPassword совпадают,
   иначе необходимо вывести "неверный пароль".
*/   
// тут твой код
if(password === realPassword){
    console.log("правильный пароль")
}
else{
    console.log("неверный пароль")
}

// задание 4 (со звездочкой)
const email = "admin@intocode.ru";

/*
  напиши ниже условие, которое выведет в консоль текст "неверный эмайл" если
  в значении переменной email нет символа "@", иначе выведи "ты зареган"
  Тебе понадобится метод indexOf: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
*/
// тут твой код
if( email.indexOf("@") === 0){
    console.log('неверный пароль')
}
else{
    console.log('ты зареган')
}

// задание 5
const x = 2.7;
const y = -6;
/*
  напиши ниже условие, которое выведет в консоль значение переменной x, если
  оно больше значения переменной y, иначе выведи значение переменной y
*/
// тут твой код
if( x > y){
    console.log(x)
}
else{
    console.log(y)
}