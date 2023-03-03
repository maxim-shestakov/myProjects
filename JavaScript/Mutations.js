//Мутация в JAVASCRIPT

const a = 10

let b = a

b=30

console.log(a) //10
console.log(b) //30

//Мутация объекта происходит за счёт изменения свойств

const person = {
    name: 'Bob',
    age: 25,
}

const person2 = person //копирование ссылки, изменяем мы в итоге все объекты с данной ссылкой

person2.age = 26
person2.isAdult = true

console.log(person.isAdult)
console.log(person.age)

//КАК ИЗБЕЖАТЬ МУТАЦИЙ (вариант 1): Создание нового объекта с теми же свойствами и значениями *примечание, избегаем только мутаций корневых свойств, ссылки на вложенные сохраняются

const human = {
    name: 'Oleg',
    age: '55',
    city: 'Perm'
}

const human2 = Object.assign({}, human)

human2.age = 26
console.log(human2.age)
console.log(human.age)

//КАК ИЗБЕЖАТЬ МУТАЦИЙ (вариант 2): С помощью оператора разделения объекта на свойства создаём новый объект  *с вложенными тоже не получится
//const person2 = {...person}

//КАК ИЗБЕЖАТЬ МУТАЦИЙ (вариант 3): Полное избежание мутаций, конвертация в строку, а дальше конвертация в объект *топ-метод
//const person2 = JSON.parse(JSON.stringify(person))