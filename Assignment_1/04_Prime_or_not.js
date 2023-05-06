function main() {
    var num = 11;
    var bRet;
    bRet = Prime_or_Not(num);
    if (bRet == true) {
        console.log("Number is prime.");
    }
    else {
        console.log("Number is not prime.");
    }
    return num;
}
function Prime_or_Not(num) {
    if (num % 2 != 0) {
        return true;
    }
    else {
        return false;
    }
}
main();
