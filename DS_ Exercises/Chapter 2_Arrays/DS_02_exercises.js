//Exercises

/* 1. Create a grades object that stores a set of student grades in an object. Provide a
function for adding a grade and a function for displaying the student’s grade average.
*/

var studentGrades = [65, 35, 3, 69, 75, 99, 89, 12, 78, 99];
var average = 0.0;
for (var i = 0; i < studentGrades.length; i++) {
    average += studentGrades[i];
    var avg = (average / studentGrades.length);
}
console.log("Grade Average: " + (average) / studentGrades.length); //displays Grade Average: 62.4

/*2 Store a set of words in an array and display the contents both forward and backward.*/

var words = ["I ", "am ", " a ", "Programming ", "Genius"]
var sentence = words.reduce(concat);
console.log(sentence) // displays the text forwards - "I am a Programming Genius"

var words = ["I ", "am ", " a ", "Programming ", "Genius"];
var sentence = words.reduceRight(concat);
console.log(sentence); // displays the text in reverse - "Genius Programming a am I" 

/*3 Modify the weeklyTemps object in the chapter so that it stores a month’s worth of
data using a two-dimensional array. Create functions to display the monthly average,
a specific week’s average, and all the weeks’ averages. */

// create an array
var monthTemps = [[20, 28, 32, 23, 12, 14, -8], [32, -1, 40, 23, 12, 6, 13], [12, 34, 23, 12, 4, 8, 9], [23, 12, -2, 19, 23, 13, 17]];

// getting array length
        length = monthTemps.length;

        // default sium value.
        sum = 0;

// sum of all values in array using for loop
for (var i = 0; i < array.length; i++) {
    sum += monthTemps[i];
}
 
    average = sum / length;

console.log("Average of Monthly temperature: " + average);




var monthTemps = [[20, 28, 32, 23, 12, 14, -8], [32, -1, 40, 23, 12, 6, 13], [12, 34, 23, 12, 4, 8, 9], [23, 12, -2, 19, 23, 13, 17]];

week1 = [20, 28, 32, 23, 12, 14, -8];
week2 = [32, -1, 40, 23, 12, 6, 13];
week3 = [12, 34, 23, 12, 4, 8, 9];
week4 = [23, 12, -2, 19, 23, 13, 17];

function monthTemps() {
    this.dataStore = [];
    this.add = add;
    this.averageWeek = averageWeek;
    this.averageAllWeeks = averageAllWeeks;
    this.averageMonthly = averageMonthly;
}
function add(temp) {
    this.dataStore.push(temp);
}
function averageMonthly() {
    var total = [monthTemps];
    for (var i = 0; i < this.monthTemps.length; ++i) {
        total += this.monthTemps[i];
    }
    return total / this.monthTemps.length;
}
console.log("Monthly Temperature Average: " + (total) / monthTemps.length);

var thisWeek = new weekTemps();
thisWeek.add(52);
thisWeek.add(55);
thisWeek.add(61);
thisWeek.add(65);
thisWeek.add(55);
thisWeek.add(50);
thisWeek.add(52);
thisWeek.add(49);
console.log(thisWeek.average()); 