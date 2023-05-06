function main():void
{
	var num:number = 20;
	var fact:number = 0;
	
	fact = Factor_of_no(num);
}

function Factor_of_no(num:number):number
{
	var i:number = 10;
	
	
	console.log("Factor of "+num+" is : "+i+".");

	for( i = 1; i<=10; i++)
	{
		if(num % i == 0)
		console.log(i);
	}
	return i;
}
main();