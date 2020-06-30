//Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.


let friends = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK chandran"];

function dataHandling(input) {
    var i = 0;
        while(input[i] !== "CaptianAmerica"){
            console.log(input[i]);   
        i++;
    }
}
dataHandling(friends);
