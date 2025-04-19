//main.js

//A function using a while loop
function countToTen() {
    var Digit = "";
    var x = 1;
    while (x <= 10) {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

//A function using a for loop
var Instruments = [
    "Guitar",
    "Drums",
    "Piano", 
    "Bass",
    "Violin",
    "Trumpet",
    "Flute",
];
var content = "";
var y;
function forLoop() {
    for (y = 0; y < Instruments.length; y++) {
        content += Instruments[y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = content;
}

//A function with an array
function color_array() {
    var colors = [];
    colors[1] = "Green";
    colors[2] = "Red";
    colors[3] = "Blue";
    colors[4] = "Yellow";
    colors[5] = "Orange";
    colors[6] = "Purple";
    document.getElementById("Array").innerHTML = 
        "My favourite color is " + colors[4] + ".";
}

//Creating an object with the let keyword
function car() {
    let car = {
    make: "Audi",
    year: "2025",
    color: "Red"
};

document.getElementById("car").innerHTML =
    "I have a " + car.year + " " + car.color + " " + car.make + ".";
}


