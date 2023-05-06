function main():void
{
	var radius:number = 5;
	var area:number = 0;
	
	area = Area_of_Circle(radius);
	console.log("Area of circle is : "+area+".");
}

function Area_of_Circle(radius:number):number
{
	var pi:number = 3.14;
	var area:number = 0;

	area = pi*radius*radius;
	return area;
}
main();