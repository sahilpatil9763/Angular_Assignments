var No = 153;
var arm = 0;
var sum = 0;
arm = Check_Armstrong(No);
if (arm == No) {
    console.log("Number is Armstrong");
}
else {
    console.log("Number is not Armstrong");
}
function Check_Armstrong(no) {
    var sum = 0;
    var rem = 0;
    while (no != 0) {
        rem = no % 10;
        sum += (rem * rem * rem);
        no = no / 10;
    }
    return sum;
}
