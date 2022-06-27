const products = [
    { title: 'Pizza', price: 121, id: 1 },
    { title: 'Burger', price: 121, id: 2 },
    { title: 'Hot cakes', price: 121, id: 3 },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const productIndex = products.findIndex(product => product.id === 1);

if (productIndex !== -1) {
    myProducts.push(products[productIndex]);
    products.splice(productIndex, 1);
}

// Update
const productsV2 = [
    { title: 'Pizza', price: 121, id: 1 },
    { title: 'Burger', price: 121, id: 2 },
    { title: 'Hot cakes', price: 121, id: 3 },
];

const update = {
    id: 3,
    changes: {
        price: 10,
        title: 'My new hot cakes',
    }
}

const productIndexV2 = productsV2.findIndex(product => product.id === update.id);
productsV2[productIndexV2] = { ...productsV2[productIndexV2], ...update.changes };

console.log("productsV2", productsV2);