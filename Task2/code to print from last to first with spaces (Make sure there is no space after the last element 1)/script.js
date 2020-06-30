var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
for (var i = 10; i >= 0; i--) {
    if (i === 0)
        new_string += numsArr[i];
    else
        new_string += numsArr[i] + " "
}
console.log(new_string);