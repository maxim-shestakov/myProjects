//Классы и прототипы!!!!!

//Классы позволяют создавать прототипы для объектов

//На основании протоипов создаются экземпляры
//Экземпляры могут иметь собственные свойства и методы
//Экземпляры наследуют свойства и методы прототипов

//ПРИМЕР!!

class Comment { //Pascal case Notation, классы с большой буквы
    constructor(text) {  //Конструктор вызывается при создании нового экземпляра класса
        this.text = text   //Переменная this указывает на экземпляр класса
        this.votesQty = 0
    }

    upvote() { //Наследуется каждым экземпляром класса Comment
        this.votesQty += 1
    }
    static mergeComments(first, second) { //СТАТИЧЕСКИЙ МЕТОД, ДОСТУПЕН КАК СВОЙСТВО КЛАССА И НЕ НАСЛЕДУЕТСЯ ЭКЗЕМПЛЯРАМИ КЛАССА
        return `${first} ${second}` //Объединение с помощью шаблонной строки
    }
}

const firstComment = new Comment('First comment') //Создание экземпляра, с помощью new вызывается функция constructor

console.log(firstComment) //Текст и количество голосов являются собственными свойствами класса, а метод upvote() - унаследованным методом родительского класса comment!!!

//Наследование по цепочке:
//Цепочка прототипов - firstComment -> экземпляр класса Comment -> Comment наследует все методы объекта, который является глобальным классом JavaScript

//Проверка принадлежности: instanceof

console.log(firstComment instanceof Comment)
console.log(firstComment instanceof Object)

//Вызов методов

firstComment.upvote()

console.log(firstComment.votesQty) // Переменная this из класса будет динамически указывать на объект firstComment

//Класс comment не наследует методов массивов!!!

//Проверка принадлежности свойств экземпляру объекта

console.log(firstComment.hasOwnProperty('text')) //hasOwnProperty выполняет проверку наличия свойств, данное свойство есть
console.log(firstComment.hasOwnProperty('votesQty')) //Это свойство тоже есть
console.log(firstComment.hasOwnProperty('upvote')) //Это метод наследуется от родительского класса Comment
console.log(firstComment.hasOwnProperty('hasOwnProperty')) //Этот метод доступен на уровне объекта, он так же наследуется

//Создание нескольких экземпляров

const secondComment = new Comment('Second Comment')
const thirdComment = new Comment('Third Comment')

secondComment.upvote()
secondComment.upvote()

thirdComment.upvote()
thirdComment.upvote()
thirdComment.upvote()

console.log(secondComment.votesQty) //Количество голосов второго комментария 2
console.log(firstComment.votesQty) //Количество голосов первого комментария 1
console.log(thirdComment.votesQty) //Количество голосов третьего комментария 3

console.log('СТАТИСТИЧЕСКИЕ МЕТОДЫ')

console.log(Comment.mergeComments('First Comment.', 'Second Comment.'))
//Статический метод нужен в тех случаях, когда его наследование всеми экземплярами бессмысленно, но он имеет отношение к классу
//Вызывается такой метод точечной записью, так как он будет доступен, как свойство класса
//Примеры: Object.keys() Object.assign() Object.values() - статические методы объекта
//ГЛАВНОЕ О НИХ - ОНИ НЕ НАСЛЕДУЮТСЯ ЭКЗЕМПЛЯРАМИ КЛАССА

console.log('Расширение других классов')

class NumbersArray extends Array { //Родительский конструктор вызовется автоматически
    sum() {
        return this.reduce((el, acc) => acc += el, 0) //reduce использует колбэк функцию, но у него есть 2 параметра, 
        //элемент и аккумулятор (переменная, изменяемая в процессе итерации по массиву), 0 - начальное значение acc, на каждой итерации добавляем значение элемента
    }
}

const myArray = new NumbersArray(2,5,7) //Конструктора нет, но свойства для объекта мы не создаём

//Экземпляр в данном случае сначала наследует методы класса NumbersArray, NumbersArray наследует методы Array, а Array методы объекта

console.log(myArray)
console.log(myArray.sum())

//С reduce разобраться самому!!!!

//Цепочка прототипов: myArray -> NumbersArray -> Array -> Object

//Прототип - можно найти с помощью скрытого свойства - '.'__proto__'

console.log(Comment.prototype === firstComment.__proto__)

//JS - не объектно-ориентированный язык программирования

//Строки и числа ведут себя, как объекты

const myName = 'Maxim'

console.log(myName.toUpperCase())

const mySecondName = new String('Shestakov')
console.log(mySecondName)

/*В каждом классе опционально существует конструктор, ибо если расширяем другой класс, там его не будет, если создаём свой, то есть, новые экземпляры создаём через new,
свойства, описанные в конструкторе, будут собственными свойствами объекта, методы наследуются от класса, есть статические методы, которые не наследуются экземплярами, так как
в этом нет необходимости

*/

//МОЯ ЛИЧНАЯ ПРАКТИКА

class Car {
    constructor(nameOfTheBrand, color, price) {
        this.nameOfTheBrand = nameOfTheBrand
        this.color = color
        this.price = price
    }
    upPrice(upperCoff) {
        this.price+=upperCoff
    }
    lowPrice(lowwerCoff) {
        this.price-=lowwerCoff
    }
    changeColor(newColor) {
        this.color = newColor
    }
}

myMercedes = new Car('Mercedes', 'White', 4500000)

console.log(myMercedes)

myMercedes.changeColor('Black Cobra')

console.log(myMercedes.color)

myMercedes.upPrice(1)
console.log(myMercedes.price)

console.log(Car.constructor() === Car)
