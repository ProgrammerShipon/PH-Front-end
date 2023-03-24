
const addToDb = (id) => {
   let shoppingCart;

   // get the shopping cart 
   const storedItem =  localStorage.getItem('shopping-card')
   if (storedItem) {
      shoppingCart = JSON.parse(storedItem)
   } else {
      shoppingCart = {}
   }

   // add quantity
   const quantity = shoppingCart[id]
   if(quantity) {
      const newQuantity = quantity + 1;
      shoppingCart[id] = newQuantity
   } else {
      shoppingCart[id] = 1
   }

   localStorage.setItem('shopping-card', JSON.stringify(shoppingCart))
}

const deleteFromDb = (id) => {
   const storedItem =  localStorage.getItem('shopping-card')
   if (storedItem) {
      const shoppingCart = JSON.parse(storedItem)
      if ( id in shoppingCart) {
         delete shoppingCart[id]
         localStorage.setItem('shopping-card', JSON.stringify(shoppingCart))
      }
   }
}
 
export { addToDb, deleteFromDb }