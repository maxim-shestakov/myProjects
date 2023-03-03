//Условные инструкции: if, if else, if else if, switch, тернарный оператор (выражение)
//if (/*Условие)*/) {
    //Блок кода, выполняемый однократно при правдивом выполнении условия
//}

let valFirst = 10

if (valFirst>5) {
    valFirst+=20
}

console.log(valFirst)

const person = {
    age: 20,
}

if (!person.name) {
    console.log('Имя не указано')
}

//!undefined = true

//if else

let valSecond = -10

if (valSecond < 5) {
    valSecond+=10
} else {
    valSecond-=20
}

console.log(valSecond)

const age = 25

if (age>18) {
    console.log('Is adult')
} else if (age>=12) {
    console.log('Is teenager')
} else {
    console.log('Is child')
}

const sumPositiveNumbers = (a,b) => {
    if (typeof a!== 'number' || typeof b!= 'number') {
        return 'One of the arguments is not a number'
    }

    if (a<= 0 || b<=0) {
        return 'Numbers are not positive'
    }

    return a+b

}

//Конструкции if else if выполняются за счёт того, что при вводе return функция завершит своё выполнение автоматически, что позволяет не писать дополнительные else

let a = 5

let b = 10

console.log(sumPositiveNumbers(a,b))

//switch

/*Синтаксис switch (аналога if else if)
switch (Выражение) {
    case A:
        //Действия, если Выражение === А
        break //Выход с условной инструкции
    case B:
        //Действия, если Выражение === B
        break
    default:
        //Действия по умолчанию
}
*/ 

//Пример:

const month = 2

switch (month) {
    case 12:
        console.log('Декабрь')
        break
    case 1:
        console.log('Январь')
        break
    case 2:
        console.log('Февраль')
        break
    default: //Действия в случае, если все блоки не выполнены, то есть их условия были ложны
        console.log('Это не зимний месяц')
}

//ТЕРНАРНЫЙ ОПЕРАТОР - ТРИ ОПЕРАНДА, КОНСТРУКЦИЯ С НИМ - ВЫРАЖЕНИЕ, А ВЫРАЖЕНИЕ ВСЕГДА ВОЗВРАЩАЕТ ЗНАЧЕНИЕ

//СИНТАКСИС: УСЛОВИЕ ? ВЫРАЖЕНИЕ 1 : ВЫРАЖЕНИЕ 2 
//Если условие правдиво, возвращается результат выражения 1, если ложно, то второго

//Рекомендуется писать на 3 разных строках

//Пример: 

const valThird = 11

console.log("Пример первый")

valThird
? console.log('Условие истинно')
: console.log('Условие ложно')

//Вернёт так и так undefined, так как используется console.log()

//Пример второй
console.log('Пример второй')

function myFn1(x,y) {
    console.log(x+y)
}

function myFn2() {
    console.log('Параметры ложны')
}

valFirst&&valSecond
? myFn1(valFirst, valSecond)
: myFn2() //Вызов функции - это выражение

console.log('Пример третий')

let valFourth = 11
console.log(valFourth >= 0 ? valFourth : -valFourth)

valFourth = -5
const res = valFourth >= 0 ? valFourth : -valFourth //Присвоение значения выражения результату
console.log(res)

//Итог - тернарный оператор лучше if else if тем, что он является выражением, соответственно мы можем присвоить результат его работы переменной, уместившись в одну строку, что было бы невозможно при конструкции if else if
