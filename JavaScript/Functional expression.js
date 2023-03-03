//Функциональные выражения
function myFn(a,b) {
    let c
    a++
    c=a+b
    return c
} //Это была объявленная функция

/*function(a,b) {
    let d
    a++
    d=a+b
    return d
} 
Это функциональное выражение, отличие в отсутствии имени 
Функциональные выражения всегда анонимные, их чаще всего используют в качестве колбэк функции, АВТОНОМНО ИСПОЛЬЗОВАТЬ НЕЛЬЗЯ, поэтому оно здесь в комментариях
*/

const myFunction = function(a,b) {
    let e
    a++
    e=a+b
    return e
}

console.log(myFunction(5,3))

setTimeout(function() {
    console.log('Сообщение с задержкой в отправке')
}, 999)

console.log('Стрелочные функции:')

/*(a,b) => { //имени нет
    let c
    a++
    c=a+b
    return c
}
Стрелочная функция - выражение!!! Они всегда анонимные*/

const myStrFunction = (a,b) => {
    let c
    a++
    c=a+b
    return c
}

console.log(myStrFunction(50,3))

//Функциональные выражения стоит использовать, чтобы избежать повтора присваивания нового значения имени функции

setTimeout(() => {
    console.log('Отложенное в стрелочной функции сообщение')}, 
    1000)

/*Сокращения в стрелочных функциях:
a=> {
    //Тело функции
}

(a,b) => a+b  \\Одно выражение, опускаем фигурные скобки, return будет сделан автоматически, неявный вывод
*/

//Значения параметров по умолчанию: 
function multByFactor(value, multiplier = 1) { //Если один аргумент будет, то второй аргумент будет автоматически равняться единице, а если второй будет задан, то оба будут использованы в заданном пользователем виде
    return value * multiplier
}

console.log(multByFactor(10,2))
console.log(multByFactor(5))

const anonMultByFactor = (value, multiplier=1) => {
    return value *multiplier
}

console.log(anonMultByFactor(10,2))
console.log(anonMultByFactor(5))

console.log('Пример второй')

const newPost = (post, addedAt = Date()) => {  //addedAt имеет дефолтное значение, поэтому мы можем вызвать функцию newPost с одним параметром и при этом добавить дату поста
    const objectPost = {
        ...post, //делим, чтобы не мутировать объект
        addedAt
    }
    return objectPost  //Сокращённое название свойства, совпадающего с именем параметра
} //Круглые скобки нужны для неявного возврата объекта, якобы это одно выражение будет

const firstPost = {
    id: 1,
    author: 'Maxim'
}

console.table(newPost(firstPost))