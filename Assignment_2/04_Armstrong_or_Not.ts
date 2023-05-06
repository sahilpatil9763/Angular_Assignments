var No:number = 153;
var arm:number = 0;
var sum:number = 0;

arm = Check_Armstrong(No);

if(arm == No)
{
	console.log("Number is Armstrong");
}
else
{
	console.log("Number is not Armstrong");
}

function Check_Armstrong(no:number)
{
	var sum:number = 0;
	var rem:number = 0;
	
	while(no != 0)
	{
		rem = no % 10;
		sum += (rem * rem * rem);
		no = no / 10;
	}
	return sum;
}