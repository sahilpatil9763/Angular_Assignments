var Arr = [23, 6, 7, 4, 5, 7];
var Sum = 0;
Sum = Summation(Arr);
console.log("Summation of all numbers is : ", Sum);
function Summation(Arr) {
    var i = 0;
    var Summation_of_all = 0;
    for (i = 0; i < Arr.length; i++) {
        Summation_of_all = Summation_of_all + Arr[i];
    }
    return Summation_of_all;
}
