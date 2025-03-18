function Addition() { // Addition function
    var addition = 5 + 5;
    document.getElementById("Math").innerHTML = "5 + 5 = " + addition;  
}

function Subtraction() { //Subtraction function
    var subtraction = 5 - 2;
    document.getElementById("Math2").innerHTML = "5 - 2 = " + subtraction;  
}

function Multiplication() { //Multiplication function
    var multiplication = 5 * 5;
    document.getElementById("Math3").innerHTML = "5 * 5 = " + multiplication;  
}

function Division() { //Division function
    var division = 5 / 5;
    document.getElementById("Math4").innerHTML = "5 / 5 = " + division;  
}

function Multiple_Operations() { //Multiple operations function
    var multiple_operations = (5 + 5) * 10 / 2 - 5;
    document.getElementById("Math5").innerHTML = "5 plus 5, multiplied by 10, divided in half and then subtracted by 5 equals " + multiple_operations;  
}

function Modulus_Operator() { //Modulus operator function
    var modulus_operator = 25 % 6;
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + modulus_operator;  
}

function Negation_Operator() { //Negation operator function
    var x = 10;
    document.getElementById("Math7").innerHTML = -x;  
}

function Increment_Operator() { //Increment operator function
    var x = 5;
    x++;
    document.getElementById("Math8").innerHTML = x;  
}

function Decrement_Operator() { //Decrement operator function
    var x = 5;
    x--;
    document.getElementById("Math9").innerHTML = x;  
}

function Random_Number() { //Random number function
    var x = Math.random();
    document.getElementById("Math10").innerHTML = x;  
}

function Math_Object() { //Math object function
    var x = Math.sqrt(64);
    document.getElementById("Math11").innerHTML = x;  
}