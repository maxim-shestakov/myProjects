// ЦИКЛЫ!!!

let i = 0
console.log(i)
i++
console.log(i)
i++
console.log(i)
i++
console.log(i)

//Или нужно перебрать элементы массива, или свойства объекта

/* 
ЦИКЛЫ Javascript:

for
while
for ... in ...
do ... while
for ... of ...

*/

//Все циклы - инструкции

//Цикл for (Синтаксис): for (Начальная инструкция; Условие; Итерационное действие) {
//
//}

//Пример:

for (let i = 0; i < 4; i++) {
    console.log(i)
}

//Циклы for можно использовать для массивов, но не рекомендуется, для них лучше forEach map reduce

const myArray = ['first', 'second', 'third']

for (let i = 0; i<myArray.length; i++) {
    console.log(myArray[i])
}

//С forEach

myArray.forEach((element, index) => { //Индекс опционален, можно и один параметр
    console.log(element, index)
})

//Цикл while (предусловие)

i = 0

while (i<4) {
    console.log(i)
    i++
}

//Цикл do while (постусловие)

i=0

do {
    console.log(i)
    i++
} while (i<4)

//Цикл for in

/*
for (key in Object) {
    //Действия с каждым свойством объекта
    //Значения свойства - Object[key]
}
*/

const myObject = {
    x: 10, 
    y: true,
    z: 'abc'
}

for (const key in myObject) { //Объявляем переменную key в цикле for
    console.log(key, myObject[key]) //key - названия свойств, второе - значения свойств по ключу
}

//С помощью forEach

Object.keys(myObject).forEach((key) => { //Object.keys() - возвращает массив свойств объекта
    console.log(key, myObject[key])
})

Object.values(myObject).forEach((value) => { //Object.values() - возвращает значения свойств объекта
    console.log(value)
})

//С помощью методов, приведённых выше, можно конвертировать объект в массив

const mySecondArray = [true, 10, 'abc', null]

for (const key in mySecondArray) { //for in для массивов, key объявлен через const, так как каждый раз создаётся новая переменная
    console.log(mySecondArray[key])
}

//Цикл for of

/*

for (Element of Iterable) {
    //Действия с определённым элементом
}

Iterable - любое перебираемое значение

*/

const myString = 'Hey'

for (const letter of myString) {
    console.log(letter)
}

for (const element of myArray) {
    console.log(element)
}

//forEach всегда приоритетнее

/*

myArray.forEach((element) => {
    console.log(element)
})

*/

//for of НЕ ДЛЯ ОБЪЕКТОВ, ОНИ НЕ ИТЕРИРУЕМЫ

