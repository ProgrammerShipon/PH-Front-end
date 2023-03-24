const add = (first, second) => first + second;

const multiply = (first, second) => first * second;

// const numbers = [20, 24, 534, 54, 85,23]
// const sumReducer = (previous, current) => previous + current
// const totat = numbers.reduce(sumReducer, 0)

// const  items = [
//    {id: 1, name: 'alta', price: 100},
//    {id: 2, name: 'alta', price: 200},
//    {id: 3, name: 'alta', price: 300},
//    {id: 4, name: 'alta', price: 400},
//    {id: 5, name: 'alta', price: 500},
// ]
// const objReduce = items.reduce((previous, current) => previous + current.price ,0)
// console.log(objReduce)

const getTotal = products => { 
   return products.reduce((pre, cur) => pre + cur.price, 0)
}

export { add, multiply, getTotal }