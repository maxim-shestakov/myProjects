//Деструктуризация

const userProfile = {
    name: 'Masha',
    commentsQty: 23,
    hasSignedAgreement: false,
}

const { name, commentsQty } = userProfile //объявление переменных и присвоение им значений на основе значений свойств объекта; слева - новые переменные, которые будут объявлены и присвоены аналогичным значениям из объекта
const { hasSignedAgreement } = userProfile // названия свойств объекта и, соответственно, новых переменных, которые объявляются тут же

console.log(name)
console.log(commentsQty)

//Деструктуризация массивов:

const fruits = ['Apple', 'Banana']

const [fruitOne, fruitTwo] = fruits //Деструктуризация берётся по индексам, поэтому названия не совпадают, просто пишем в нужном порядке нужные переменные, используем квадратные скобки, так как работаем с массивами. 
//Порядок следования элементов в массиве важен

console.log(fruitOne)
console.log(fruitTwo)

const userInfo = ({ name, commentsQty }) => { //Деструктуризация происходит за счёт того, что на аргумент мы берём объект, по ссылке переходим к нему и можем использовать его свойства через такой синтаксис
    if (!commentsQty) {
        return `User ${name} has no comments`
    }
    return `User ${name} has ${commentsQty} comments`
}

//сами параметры name и commentsQty мы объявили внутри функции в качестве параметров

console.log(userInfo(userProfile))