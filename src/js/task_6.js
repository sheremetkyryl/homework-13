function calculateTotalPrice(allProdcuts, productName) {
    let totalPrice = 0;
    for(const { name, price, quantity } of allProdcuts) {
            totalPrice += price * quantity;
    }
    return totalPrice;
}

const products = [
    { name: 'apple', price: 5, quantity: 10 },
    { name: 'banana', price: 3, quantity: 5 },
    { name: 'orange', price: 4, quantity: 8 }
];

console.log(calculateTotalPrice(products))