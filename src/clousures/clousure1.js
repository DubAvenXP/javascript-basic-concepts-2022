const defineBudget = (budget) => {
    return (bills) => {
        return budget - bills;
    }
}

const myBudget = defineBudget(1000);

const myCurrentMoney1 = myBudget(200);
const myCurrentMoney2 = myBudget(300);

console.log(myCurrentMoney1);
console.log(myCurrentMoney2);