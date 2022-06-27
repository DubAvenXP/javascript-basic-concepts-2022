const greeting = () => {
    let username = 'John';
    return () => `Hello ${username}`;
}

greeting();

console.log(greeting()); // function
console.log(greeting()()); // Hello John

