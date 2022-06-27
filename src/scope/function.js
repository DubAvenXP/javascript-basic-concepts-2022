function greeting() {

    let username = 'John';
    console.log(username); // John

    if (username === 'John') {
        console.log(`Hello ${username}`); // Hello John
    }

}

greeting();
console.log(username); // reference error: useName is not defined