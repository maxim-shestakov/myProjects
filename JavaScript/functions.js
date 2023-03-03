let a = 5
let b = 3

let c

c = a + b
console.log(c) //8, одинаковй блок кода, который дальше заменяем на функцию

a = 8
b = 12

c = a + b
console.log(c) //20, второй блок одинакового кода

function sum(a,b) {
    const c = a + b
    console.log(c)
}

sum(a,b)

a=134
b=485885

sum(a,b)

//Функция может быть 1)именованной, 2)присвоена переменной, 3)анонимной, 4)аргументом при вызове другой функции, 5)значением свойства (метода) объекта
//ФУНКЦИЯ - ЭТО ОБЪЕКТ

function myFn(a,b) {
    let c
    a = a + 1
    c = a + b
    return c
}

console.dir(myFn)

//Если нет return, вернёт undefined
//не путать аргументы с параметрами, параметры при создании функции, аргументы при вызове

console.log(myFn(10,3)) //14

function myFnTheShortest() {} //Самая короткая
console.log(console.log(myFnTheShortest()))

console.log('Создание копии объекта')

const personOne = {
    name: 'Anton',
    age: 24
}

/*Вариант с мутацией внешнего объекта (не рекомендуется):
 function increasePersonAge(person) {
    person.age += 1
    return person
}
increasePersonAge(personOne)
console.log(personOne.age)
*/

//Хороший вариант (объект personOne не меняется по итогу): 
function increasePersonAge(person) {
    const updatedPerson = Object.assign({}, person)
    updatedPerson.age += 1
    return updatedPerson
}

const updatedPersonOne = increasePersonAge(personOne)
console.log(personOne.age)
console.log(updatedPersonOne.age)

console.log('КОЛБЭК ФУНКЦИИ (Одна вызывает другую)')


function anotherFunction() {
    //Действия...
}

function fnWithCallback(callbackFunction) {
    callbackFunction()
}
fnWithCallback(anotherFunction)

console.log('Пример колбэк функции:')

function printMyName() {
    console.log('Maxim')
}
setTimeout(printMyName, 1000) //setTimeout вызывает другую функцию через время в миллисекундах (встроенная джаваскрипт функция)