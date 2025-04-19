//main.js

//Utilizing the .concat() method
function full_sentence() {
    var part1 = "Guess what day";
    var part2 = " it is...";
    var part3 = "April Fools' Day!";
    var whole_sentence = part1.concat(part2, part3);
    document.getElementById("StringMethod").innerHTML = whole_sentence;
}

//Utilizing the .slice() method
function slice_method() {
    var sentence = "All work and no play makes Johnny a dull boy";
    var section = sentence.slice(27, 33);
    document.getElementById("Slice").innerHTML = section;
}

//Utilizing the .toString() method
function string_method() {
    var x = 182;
    document.getElementById("ToString").innerHTML = x.toString();
}

//Utilizing the .toPrecision() method
function precision_method() {
    var x = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = x.toPrecision(10);
}