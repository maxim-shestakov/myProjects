console.log(1)
const myCity = {
    city: 'New York',
    popular: true,
    country: 'USA',
}
console.log(myCity)

//порядок свойств не имеет значения order doesn't matter, технически объекты будут одинаковыми

console.log(myCity.city)

myCity.city='Las Vegas'

console.log(myCity.city)

const myData = {
    age: 18,
    name: 'Maxim'
}

myData.surname = 'Shestakov'
console.log(myData)

//через const объявляется ссылка, а сам объект мы можем менять

delete myCity.popular

console.log(myCity)

//Доступ к значениям свойств с использованием скобок

myCity['popular'] = true

console.log(myCity)

//Используется для отсутствия конфронтации переменных с одинаковым значением, как у ключей

const countryPropertyName = 'square'

myCity[countryPropertyName] = '180000 km'

console.log(myCity)

// Свойство создаётся с ключом square, а не countryPropertyName, так как мы присвоили значению этой переменной square


//ВЛОЖЕННЫЕ СВОЙСТВА ОБЪЕКТОВ

console.log(2)

const myCurrentCity = {
    city: 'Saint-Petersburg',
    info: {
        isPopular: true,
        country: 'Russia'
    }
}

console.log(myCurrentCity.info.country) //точечная запись

delete myCurrentCity.info['isPopular'] //запись с квадратными скобками

console.log(myCurrentCity)

console.log(3)

const name = 'Maxim'
const postQty = 19

const userProfile = {
    name: name,
    postQty: postQty,
    hasSignedAgreement: false,
}

console.log(userProfile)

//сокращённый вариант при дублирующей записи:
//const name = 'Maxim'
//const postQty = 19
//const userProfile = {
//    name,
//    postQty,
//    hasSignedAgreement: false,
//}

console.log(3)

console.log('Глобальные объекты')
//global - node.js; window - браузер
//globalThis -унифицированный
console.log(10) 
globalThis.console.log(10)

//одинаковый вывод
