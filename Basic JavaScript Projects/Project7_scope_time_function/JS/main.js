//main.js

//Assigning local and global variables
var X = 10;

function Add_numbers_1() {
    var X = 99;
    document.write(10 + X + "<br>");
}

function Add_numbers_2() {
    document.write(X + 11);
    console.log(X);
}

Add_numbers_1();
Add_numbers_2();

//Function to get the current date and time
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "It's not yet 6 PM";
    }
}

//Function to check if a number is even or odd
if (1 + 1 == 2) {
    document.write("The statement is true<br>");
}
else {
    document.write("The statement is false<br>");
}

//Utilizing the Age_Function
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to serve in the military<br>";
    } else {
        Vote = "You are not old enough to serve in the military<br>";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

//Utilizing the time_function
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    } else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    } else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
