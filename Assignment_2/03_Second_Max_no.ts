var Arr:number[] = [23,89,6,29,56,45,77,32];
var Max:number = 0;
var Second_Max:number = 0;
var j:number = 0;

Max = Maximum(Arr);
console.log(" First Maximum number is : ",+Max);

for( j=1; j<Arr.length; j++)
{
	if(Arr[j] > Second_Max && Arr[j] != Max)
	{
		Second_Max = Arr[j];
	}
}

console.log("Second Maximum number is : ",+Second_Max);

function Maximum(Arr:number[])
{
	var i:number = 0;
	var Max_number:number = 0;
	
	for(i = 0; i < Arr.length; i++)
	{
		if(Arr[i] > Max_number)
		{
			Max_number = Arr[i];
		}
	}
	return Max_number;
}