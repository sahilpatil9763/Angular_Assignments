var Arr = [23, 89, 6, 29, 56, 45, 77, 32];
var Max = 0;
Max = Maximum(Arr);
console.log("Maximum number is : ", Max);
function Maximum(Arr) {
    var i = 0;
    var Max_number = 0;
    for (i = 0; i < Arr.length; i++) {
        if (Arr[i] > Max_number) {
            Max_number = Arr[i];
        }
    }
    return Max_number;
}
