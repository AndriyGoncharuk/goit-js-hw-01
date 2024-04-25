function makeTransaction(quantity, pricePerDroid ) {
    const transaction = `You ordered ${quantity} droids worth ${pricePerDroid * quantity} credits!`;
    return transaction;
}

console.log(makeTransaction(5, 3000)); 
console.log(makeTransaction(3, 1000)); 
console.log(makeTransaction(10, 500));