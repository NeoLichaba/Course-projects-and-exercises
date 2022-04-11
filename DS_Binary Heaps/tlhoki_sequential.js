function seqSearch(arr, data) {                     //creates a function  to perform a sequential search on an array and its position
    for (var i = 0; i < arr.length; ++i) {          
    if (arr[i] == data) {
    return i;
    }
    }
    return -1;
   }
   

function dispArr(arr) {                           //creates function to display contents of the array
    for (var i = 0; i < arr.length; ++i) {
        console.log(arr[i] + " ");
        if (i % 10 == 9) {
            console.log("\n");                    //prints new line
        }
    }
    if (i % 10 != 0) {
        console.log("\n");                       //prints new line
    }
}
function run() {                                    
    var nums = [];                                                     //Declares the variable nums
    // nums = [1,3,10,13,22,9,8,4,24,2,11];                               //Allocates ar array to the variable nums
    for (var i = 0; i < 10; ++i) {                                   //creates variable i and starts it at 0, and increments the variable by 1 if its less than 10
    nums[i] = Math.floor(Math.random() * 11);                        //creates a variable to store our array (nums) and creates our array using the random method
   }
    var num = parseInt(prompt("Enter a number to search for: "));      //creates a variable (num) to prompt for the number we are seraching for
    console.log();                                                     //then prints the number
    var position = seqSearch(nums, num);                               //creates a variable (position) and uses seqSerach function to find the position of the number in the array
    if (position > -1) {                                               //creates an argument that if the position is less than 1, then return the number and its position in the array
        console.log(num + " is in the array at position " + position);
    }
    else {
        console.log(num + " is not in the array.");                    //otherwise print as number is not in the array
    }
    console.log();                      
    dispArr(nums);
}



