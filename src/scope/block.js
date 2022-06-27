function fruits() {
    if (true) {
        var fruit1 = 'Apple';
        let fruit2 = 'Orange';
        const fruit3 = 'Banana';
        console.log(fruit2); // Orange
        console.log(fruit3); // Banana
    }
    console.log(fruit1); // Apple
    console.log(fruit2); // undefined
    console.log(fruit3); // undefined
}