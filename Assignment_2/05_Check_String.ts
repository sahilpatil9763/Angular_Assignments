var str1:string = "Pune Kothrud Marvellous Infosystem";
var str2:string = "Marvellous";
var bret:number = 0;

bret = Check_String(str1,str2);

if(bret == 1)
{
	console.log("String contains Marvellous in it");
}	
else
{
	console.log("String does not contains Marvellous in it");
}

function Check_String(str1:string,str2:string)
{
	var i:number = str1.length;
	var j:number = str2.length;
	var flag:number = 0;
	
	for(i = 0; i < str1.length; i++)
	{
		if(str1[i] == str2[0])
		{
			for(j = 0; j < str2.length; j++)
			{
				if(str1[i+j] != str2[j])
				{
					break;
				}
			}
			if(j == str2.length)
			{
				flag = 1;
				break;
			}
		}
	}
	return flag;
}