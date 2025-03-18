document.write (typeof "Word"); // string
document.write (typeof 3); // number
document.write (3 + "3"); // 33
document.write (2E310); // infinity
document.write (-2E310); // -infinity
document.write (10 > 2); // true
document.write (10 < 2); // false
console.log (2 + 2); // 4
console.log (2 > 2); // false
document.write (10 == 10); // true
document.write (10 == 2); // false
X = 10;
Y = 10;
document.write (X === Y); // true
A = 10;
B = "11";
document.write (A === B); // false
C = 10;
D = "10";
document.write (C === D); // false
E = 10;
F = 11;
document.write (E === F); // false
document.write (5 > 2 && 10 > 4); // true
document.write (5 > 10 && 10 > 4); // false
document.write (5 > 10 || 10 > 4); // true
document.write (5 > 10 || 10 > 20); // false
function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10); // false
}
function not_Function2() { // 
    document.getElementById("Not2").innerHTML = !(5 > 10); // true
}