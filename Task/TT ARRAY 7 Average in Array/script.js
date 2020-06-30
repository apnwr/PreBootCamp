//Find the average in the array below. 
//Make sure you add only the numbers and do avg.
const friendsInfo = [6, 12, "Mari", 1, true, "Munnabai", "200", "CaptianAmerica", 8, 10];
function AvgOfNo(friends) {
    sum = 0;
    for (var i = 0; i < friends.length; i++){
        if (typeof(friends[i]) === "number")
            sum = sum + friends[i];
    }
    console.log(sum);
}
AvgOfNo(friendsInfo);