/*
var string = "Hello";
string += "World";
console.log(string + "!");


// Regular math operators: + - * /
console.log((5+4)/3);
console.log(undefined/5);


// Equality
var x = 4, y = 4;
if (x == y){
    console.log("x=4 is equal to y=4");
}

x = "4";
if (x == y){
    console.log("x='4' is equal to y=4");
}


// Strict equality
if (x === y){
    console.log("Strict: x='4' is equal to y=4");
}
else{
    console.log("Strict: x='4' is NOT equal to y=4");
}


// If statement (all false)
if (false || null || undefined || "" || 0 || NaN){
    console.log("This line won't ever execute");
}
else{
    console.log("All false");
}


// If statement (all true)
if (true && "hello" && 1 && -1 && "false"){
    console.log("All true");
}


// For loop
var sum = 0;
for (var i = 0; i < 5; i++){
    sum = sum + i;
}
console.log("sum of 0 through 4 is: " + sum);


// Default values
function orderChickenWith(sideDish){
    sideDish = sideDish || "whatever!";
    console.log("Chicken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();
*/

/*
// Object creation
var company = new Object();
company.name = "Facebook";
console.log(company);

company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "blue";

console.log(company);
console.log("Company CEO name is: " + company.ceo.firstName);

console.log(company["name"]);
company["stock of company"] = 110;
//console.log("Stock price is: " + company["stock of company"]);

var stockPropName = "stock of company";
company[stockPropName] = 120;
console.log("Stock price is: " + company[stockPropName]);
*/

// Better way: object literal
var facebook = {
    name: "Facebook",
    ceo: {
        firstName: "Mark",
        favColor: "blue"
    },
    "stock of company": 110
};

console.log(facebook.ceo.firstName);