/* How would you represent the following data using a combination of object literals and arrays?
 (You can describe a strategy without typing or writing out the whole thing.) 
 Guvi, Geek, 6, IIT - M RP, Chennai.
 Amazon, Inc, 31, SP Infocity, Chennai.
 Google, Alphabet, 34 Amphitheater Parkway, MountainView.
 Tesla, Inc, 32, 333 Santana Row, San Jose.*/

var myobj = [
    {"Org" : "Guvi", "Program" : "Geek","Address" : "6, IIT - M RP, Chennai"},
    {"Org": "Amazon", "Program": "Inc", "Address" : "31, SP Infocity, Chennai"},
    { "Org": "Tesla", "Program": "Inc", "Address": "32, 333 Santana Row, San Jose" }
]
console.log(myobj[1]);