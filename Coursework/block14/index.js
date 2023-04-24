// ** create a variable called value
// if value is true print true
// if value is fasly, check the following conditions:
//     "The boolean value false is falsy"; if the value is falsy
//     "The null value is falsy"; if value is null.
//     "undefined is falsy"; if the value is undefined.
//     "The number 0 is falsy (the only falsy number)"; if the value is 0.
//     "The empty string is falsy (the only falsy string)"; if the value is empty.

let value = "25"
if (value) {
    console.log(true);
} else {
    if (value === false) {
        console.log("The boolean value false is falsy");
    } else if (value === null) {
        console.log("The null value is falsy");
    } else if (value === undefined) {
        console.log("undefined is falsy");
    } else if (value === 0) {
        console.log("The number 0 is falsy (the only falsy number)");
    } else if (value === "") {
        console.log("The empty string is falsy (the only falsy string)");
    }
}
 
// //
//     sum + " is less than -1000";
//     sum + " is a negative number";
//     sum + " is equal to 0";
//     sum + " is larger than 0";
//     sum + " is greater than 100";