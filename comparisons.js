// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
console.log("Is numberTeachers less than numberStudents?", numberTeachers < numberStudents);
// this should log: true

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
console.log("Is numberTeachers strictly equal to stringTeachers?", numberTeachers === stringTeachers)
// this should log: false

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
console.log("Is numberTeachers not equal to numberStudents?", numberTeachers !== numberStudents)
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
console.log("Is numberStudents greater than or equal to 20?", numberStudents >= 20)
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
console.log("Is numberStudents greater than or equal to 21?", numberStudents >= 21)
// this should log: false

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
console.log("Is numberStudents less than or equal to 20?", numberStudents <= 20)
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
console.log("Is numberStudents less than or equal to 21?", numberStudents <= 21)
// this should log: true


// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// This code is using the conditional 'less than' and is asking if the number of the left of the '<' 
// symbol is less than the number on the right. This will log the boolean result: true, as 4 is less than 9.

var books = 3;
console.log(4 < books);
// The first line of this code is establishing a variable called books, and associating the number 3 with that variable.
// If we were to `console.log(books)`, we would get the number 3. The second line of code is asking if 4 is less than books.
// Since books is currently 3, this will log the boolean result: false, since 4 is not less than 3.

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// The first two lines of code are establishing the variables 'friends' and 'siblings' as numbers 6 and 2 respectively.
// The second line of code is asking if friends is greater than siblings. Since 6 is greater than 2, the console will log the 
// boolean result: true.

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// The first two lines of code here are establishing the variables 'attendees' and 'meals' as numbers 9 and 8 respectively.
// The final line of code is asking if attendees is not strictly equal to meals. Since 9 does not equal 8, this will result
// in the boolean: true.


// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats);

// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark)

// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark)

// Determine if the dog loves to play and is a puppy
console.log("lovesToPlay & is a puppy?", lovesToPlay && age <= 1)

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: It evaluated to TRUE, because I didn't add an unestablished variable like `isAPuppy`. I interpreted the question as is
//equal to or less than 1. I'm not sure if that's what we were going for here, but it made the most sense to me to not get an
// error in the console.