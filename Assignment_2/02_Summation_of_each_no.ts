
var Arr:number[] = [23,6,7,4,5,7];
var Sum:number = 0;

Sum = Summation(Arr);

console.log("Summation of all numbers is : ",Sum);

function Summation(Arr:number[])
{
	var i:number = 0;
	var Summation_of_all:number = 0;
	for(i=0;i<Arr.length;i++)
	{
		Summation_of_all = Summation_of_all + Arr[i];
	}

	return Summation_of_all;
}