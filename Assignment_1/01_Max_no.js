function main() {
    var No1 = 28;
    var No2 = 89;
    var No3 = 6;
    var Max = 0;
    Max = Maximum(No1, No2, No3);
    console.log("Maximum number is : " + Max + ".");
}
function Maximum(No1, No2, No3) {
    var Max_No = 0;
    if (No1 > No2 && No1 > No3) {
        return No1;
    }
    else if (No2 > No1 && No2 > No3) {
        return No2;
    }
    else {
        return No3;
    }
}
main();
