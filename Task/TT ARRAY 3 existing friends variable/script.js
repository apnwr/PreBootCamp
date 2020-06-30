let friends = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK chandran"];
function dataHandling(input) {
    for (var i = 0; i < input.length; i++) {
        if (friends[i] === "Mari")
            friends.splice(i, 1, "Munnabai");
    }
}
dataHandling(friends);
console.log(friends);