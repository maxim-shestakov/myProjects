console.log('Hello World')
let a=true
a=false
b=true
console.log(a)
console.log(b)

const myName='Maxim'
console.log(myName)

let types

types = 'примитивные: symbol, string, boolean, number, null, undefined; object - ссылочный'

const objectA = {
    a: 10,
    b: true
}

const copyOfA=objectA

copyOfA.a=20
copyOfA.c='abcde'

console.log(objectA)