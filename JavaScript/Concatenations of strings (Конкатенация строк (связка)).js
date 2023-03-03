//Конкатенация строк
let Greeting

Greeting = 'Hello '+'World' //оператор + для конкатенации строк

const hello = 'hello'
const world = 'world'

const otherGreeting = hello + ' ' + world

console.log('Шаблонные строки:')
const normalGreeting = `${hello} ${world}` //ОБРАТНЫЕ КАВЫЧКИ

console.log(Greeting)
console.log(otherGreeting)
console.log(normalGreeting)

//Практика: 


const name = 'Максим'
const city = 'Санкт-Петербург'


const info = `Меня зовут ${name}, я живу в городе ${city}`

console.log(info)

//При конкатенации числа и строки, число автоматически будет переведено в строковый тип, так же и с остальными