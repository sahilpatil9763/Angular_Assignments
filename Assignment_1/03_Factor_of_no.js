function main() {
    var num = 20;
    var fact = 0;
    fact = Factor_of_no(num);
}
function Factor_of_no(num) {
    var i = 10;
    console.log("Factor of " + num + " is : " + i + ".");
    for (i = 1; i <= 10; i++) {
        if (num % i == 0)
            console.log(i);
    }
    return i;
}
main();
