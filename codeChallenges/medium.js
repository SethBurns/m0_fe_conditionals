// Using the following variables:

// ```javascript
// var goodDrivingRecord = true;
// var age = 24;
// ```

// Write a program that evaluates the status of the variables above, and uses logic to print one of three possible messages:
// - If the driving record is good and user is over 25 years old, they should get a discount on the car rental
// - If the user either has a good record or is over 25 years old, they should pay full price
// - If the user is not over 25 and has a bad driving record, they need to have someone else sign for the rental


var goodDrivingRecord = false;
var age = 24;

if (goodDrivingRecord === true && age > 25) {
    console.log("You get a discount!")
} else if (goodDrivingRecord === true || age > 25) {
    console.log("You must pay full price.")
} else {
    console.log("You must have someone else sign for this rental.")
}

// At first I had the end of my code with:
// if (goodDrivingRecord === false && age <= 25) {
//     console.log("You must have someone else sign for the rental.")
// } else {
//     console.log("This should never come up.")
// }
// But I realized I could just do else since all other combinations of the variables would fall under the 3rd option.