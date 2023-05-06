var a = 0;
var b = 1;
var c = 0;
var num = 21;
console.log("Fibonacci series is:");
console.log(a);
console.log(b);
while (c <= num) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
}
