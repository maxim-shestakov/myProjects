//МАССИВЫ

//Массив - объект с цифровыми именами свойств

//Формат записи массивов

const myArray = [1,2,3]
console.log(myArray)

const myArray2 = new Array(1,2,3) //с помощью new создаём новый экземпляр класса массивов
console.log(myArray2)

//Могут хранить разные типы значений!

const maxArray = [1, false, 'Maxim']

let lenght = maxArray.length

console.log(lenght)

//Два массива не будут равны, так как объекты имеют разные ссылки в памяти

const myArray3 = myArray

if (myArray === myArray3) {
    console.log('Массивы равны') //Выполнится, так как мы скопировали и ссылку
}

//Массивы очень похожи на объект, по сути им и являются, но отличаются выводом, так же отличаются прототипом

//Значения свойства в объекте от увеличения их количества не изменится, а в массиве изменится

//Чтение значений массива!!!

console.log(myArray[0])
console.log(myArray[1])
console.log(myArray.length)

//Точечная запись недопустима

//Если мы вручную изменим свойство длины массива, он создаст пустые места до нужного количества

//ПРИМЕР!!!

const myArr = [1,2,3,4]
console.log(myArr)
console.log(myArr.length)

myArr[2] = 'abc' //Перезапись элемента массива
console.log(myArr)
console.log(myArr[2])

myArr[4] = true //Добавление элемента в массив на 5 позицию, (так как индексация с нуля)
console.log(myArr)
console.log(myArr.length)

/* 

Методы массивов:

push - добавление элемента в конец массива
shift - удаление первого элемента в массиве
forEach - перебор элементов массива с использованием функции в качестве аргумента, возвращает метод значение undefined
pop - удаление последнего элемента в массиве
unshift - добавление элемента в начало массива
map - использует функцию в качестве аргумента, но возвращает новый массив с изменёнными данными, длина при этом у них будет одинаковая

*/

//Методы массивов - функции высшего порядка в массивах, функции прототипов, методы прототипов

//PUSH

const myArrPr = [1,2,3]
console.log(myArrPr)

myArrPr.push(4) // Добавление 4 в конец массива

console.log(myArrPr)

myArrPr.push(true) //Добавление 5 в конец массива

console.log(myArrPr)

myArrPr.pop() //Удаление последнего элемента, в данном случае true
console.log(myArrPr)

const removedElement = myArrPr.pop() //pop так же возвращает значение удалённого элемента

console.log(myArrPr)
console.log(removedElement)

myArrPr.unshift(0) //Добавили в начало ноль
console.log(myArrPr)

myArrPr.unshift('abc') // Добавили в начало строку "abc"
console.log(myArrPr)

myArrPr.shift()
console.log(myArrPr) // Удалили первый элемент в массиве, в данном случае строку 'abc', так же, как и pop, возвращает удалённый элемент

//Методы мутируют оригинальный массив, но задан он через const, можно, так как ссылочный тип и переменная хранит ссылку, сам массив можем менять

myArrPr.forEach(el => console.log(el*2)) //Аргумент - функция!!! Нужно анонимную функцию, либо стрелочную, либо выражение

//скобочки у el опустили, так как аргумент у функции один и в стрелочной это допустимо

console.log(myArrPr) //Оригинальный массив не изменился, но вывод всех его чисел, умноженных на 2 был совершён

const newArray = myArrPr.map(el => el*3)

console.log(newArray)
//Оригинальный массив так же не изменится

/* const newArray = myArrPr.map((el) => {
    el*3
})
Данная функция пернёт 3 undefined, потому что теперь она возвращает ничего, то есть возвращает undefined. Блок мы добавили, а return нет, если его добавим перед el - всё заработает 
*/