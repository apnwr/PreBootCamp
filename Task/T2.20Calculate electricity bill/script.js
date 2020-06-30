var unitPerHour = 100;
var days = 30;
function totalBill(ut, day) {
    var ratePerUnit = 10;
    var totalunit = ut * day;
    var totalBill = totalunit * ratePerUnit;
    return totalBill;
}

var finalBill = totalBill(unitPerHour, days);
console.log(finalBill);