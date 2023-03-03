// ASYNC/AWAIT - специальный синтаксис для упрощения работы с промисами

//Асинхронная функция - функция, которая вместо значения возвращает Промис

//Два варианта задания:

/*
async function asyncFn() {
    //Всегда возвращает Промис
}

const asyncFn = async () => {
    //Всегда возвращает Промис
}
*/

const asyncFn = async () => {
    return 'Success' //В данном случае Промис мгновенно резолвится, исполняется
}

asyncFn()
 .then(value => console.log(value))

const asyncErrorFn = async () => {
    throw new Error('There was an error!!!')
}

asyncErrorFn()
 .then(value => console.log()) //Обработка действий в случае resolve
 .catch(error => console.log(error.message)) //Обработка действий в случае reject

 //AWAIT

 /*
 const asyncAwaitFn = async () => {  //await используется только в асинхронной функции
    await <Promise>
 }

 asyncAwaitFn()

 */

 const timerPromise = () => 
   new Promise((resolve,reject) => 
     setTimeout(() => resolve(), 2000))

const asyncAwaitFn = async () => {
    console.log('Timer starts!')
    const startTime = performance.now()   //с помощью performance.now() можно засечь время
    await timerPromise() //Ждём исполнения Промиса, только после этого переходим к следующим строкам
    const endTime = performance.now()
    console.log('Timer ended...', endTime - startTime)
}

asyncAwaitFn()

//Переход с промисов на async/await

/*
 const getData = (url) => //Возвращает промис, но это делается неявно, так как вызов функции это выражение
   new Promise((resolve, reject) => 
   fetch(url)
    .then(response=> response.json())
    .then(json => resolve(json))
    .catch(error => reject(error))
   )

   getData('https://jsonplaceholder.typicode.com/todos')
    .then(data => console.log(data))  //data указывает на resolve(json)
    .catch(error => console.log(error.message)) //error указывает на reject(error)

*/

const getData = async url => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

const url = 'https://jsonplaceholder.typicode.com/todos'

try {
    const data = await getData(url) //Так как здесь нет обработки ошибки, делаем блок try catch
    console.log(data)
} catch(error) {
    console.log(error.message)
}

/*
Главное в ASYNC/AWAIT:
1)Это синтаксическая надстройка над промисами
2)await синтаксис возможен только внутри async функций
3)

*/