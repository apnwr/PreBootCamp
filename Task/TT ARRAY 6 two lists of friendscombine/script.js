// We have two lists of friends below.Use array methods to combine them into one alphabetically - sorted list.
var friends1 = ["Mari", "MaryJane", "CaptianAmerica", "Munnabai", "Jeff", "AAK chandran"];
var friends2 = ["Gabbar", "Rajinikanth", "Mass", "Spiderman", "Jeff", "ET"];
var friends = friends1.concat(friends2);
console.log(friends);
function dataHandling(input) {
    input.sort();
    console.log(input);//Your code goes here
}
dataHandling(friends);

//Get the first item, the middle item and the last item of the array

function fml(a) {
    var f = a[0];
    var m = a[Math.round(a.length / 2)-1];
    var l = a[a.length - 1];
    console.log(f);
    console.log(m);
    console.log(l);
}

fml(friends);

//Add your name to the end of the friends array, and add another name to beginning.

function add(h) {
    h.push("Ayush");
    h.unshift("Piyush");
    console.log(h);
}

add(friends);

// Add Mr or Ms to the names in the friends array

function rmrs(q) {
    for (var i = 0; i < q.length; i++){
        q[i] = "Mr." + q[i];
    }
    console.log(q);
}

rmrs(friends);

//Concat all the names the friends array and return as comma “,” seperated string.

function concatnam(friend) {
    
    var pi = friend.toString();
    console.log(pi);
}
concatnam(friends);

//Find the friends names who has letter ‘a’ and return the list.

function findA(f) {
    var arr = [];
    for (var i = 0; i < f.length; i++){
        for (j = 0; j < f[i].length; j++){
            if (f[i].charAt(j) === "a") {
                arr.push(f[i]);
                break;
            }
        }
    }
    console.log(arr);
}

findA(friends);

//6. Find the avg length of all the friends names. Get the individual length of the names and do the avg.

function avglength(l) {
    sum = 0;
    for (var i = 0; i < l.length; i++){
        var m = l[i].length;
        sum = sum + m;
    }
    var avgl = Math.round(sum / l.length);
    console.log(avgl);
}

avglength(friends);
//7. Find the names and return the list starting with letter M.
function startingM(m) {
    var arrM = [];
    for (var i = 0; i < m.length; i++){
        if (m[i].charAt(3) === "M") {
            arrM.push(m[i]);
        }
    }
    console.log(arrM);
}
startingM(friends);

//8.Find the name with max characters and return the name.
function maxchar(c) {
    var maxc;
    for (var i = 0; i < c.length-1; i++){
            if (maxc === undefined)
                maxc = c[i];
            else if(maxc.length < c[i].length){
                maxc = c[i];
            }
    }  
    return maxc;
}
var maxm = maxchar(friends);
console.log("Name with maximum characters : " + maxm);

//9.Find the name with min characters and return the name.

function minchar(c) {
    var minc;
    for (var i = 0; i < c.length - 1; i++) {
        if (minc === undefined)
            minc = c[i];
        else if (minc.length > c[i].length) {
            minc = c[i];
        }
    }
    return minc;
}
var minm = minchar(friends);
console.log("Name with minimum characters : " + minm);

