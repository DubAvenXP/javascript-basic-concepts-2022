const myGlobal = 0;

function myFunction() {
    const myNumber = 1;
    console.log(myGlobal);

    function parent() { // inner function
        const inner = 2;
        console.log(myNumber, myGlobal);
        
        function child() { // inner function
            console.log(inner, myNumber, myGlobal);
        }

        return child();
    }
    return parent();
}

myFunction();