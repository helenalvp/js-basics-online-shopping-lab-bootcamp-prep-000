var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
   // write your code here

   var itemObject = {
          itemName: item,
          price: Math.floor((Math.random()*99)+1)
        };
    cart.push(itemObject);

   return `${itemObject.itemName} has been addad to your cart.`;

}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
