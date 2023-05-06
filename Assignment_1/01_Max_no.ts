function main():void
{
	var No1:number = 28;
	var No2:number = 89;
	var No3:number = 6;
	
	var Max:number = 0;

	Max = Maximum(No1,No2,No3);
	console.log("Maximum number is : "+Max+".");

}

function Maximum(No1:number,No2:number,No3:number):number
{
	
	var Max_No:number = 0;

	if(No1>No2 && No1>No3)
	{
		return No1;
	}
	else if(No2>No1 && No2>No3)
	{
		return No2;
	}
	else
	{
		return No3;
	}
}

main();