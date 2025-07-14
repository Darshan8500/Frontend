// totalBill.ts
function calculateTotal(units, rate) {
    return units * rate;
}
//let total = calculateTotal("300", 7.5); // ❌ Error at compile time!
var total = calculateTotal(300, 7.5);
console.log("Total:", total);
