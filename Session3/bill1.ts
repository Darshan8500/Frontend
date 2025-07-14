// totalBill.ts
function calculateTotal(units: number, rate: number): number {
    return units * rate;
}

//let total = calculateTotal("300", 7.5); // ❌ Error at compile time!
let total = calculateTotal(300, 7.5);
console.log("Total:", total);
