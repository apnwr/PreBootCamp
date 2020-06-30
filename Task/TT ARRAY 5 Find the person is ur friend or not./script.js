//Find the person is ur friend or not.

const friends = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK chandran"];


function dataHandling(input, name) {
    var a;
    for (var i = 0; i < input.length; i++) {
        
        if (input[i] === name) {
            a = "found";
            break;
        }
        else
            a = "not found";
    }
    console.log(a);
}
let found = dataHandling(friends, "Jeff");
console.log(found);
