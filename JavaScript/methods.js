//Метод - свойство объекта, значением которого является функция

const myCity = {
    city: 'Perm',
    cityGreeting: function () {
        console.log('Greetings!!!')
    }
}

myCity.cityGreeting()

/* Сокращённый метод : 
const myCity = {
    city: 'Perm',
    cityGreeting() {
        console.log('Greetings!!!')
    }
} */

//Свойство - myCity.city;  Метод - myCity.cityGreeting()

/*JSON
{
    "userId": 1,
    "id": 1,
    "title": "Test title",
    "status": {
        "completed": false
    }
}
Отличается тем, что ключи пишутся в двойных кавычках
{"userId": 1,"id": 1,"title": "Test title","status": {"completed": false}}
*/

//Конвертация JSON в объект - JSON.parse() 
//Конвертация объекта в JSON - JSON.stringify()

//Практика:

const post = {
    title: 'My post',
    likesQty: 5,
}
console.log(post)

const postStringified = JSON.stringify(post)

console.log(postStringified)

parsedPost = JSON.parse(postStringified)

console.log(parsedPost)

