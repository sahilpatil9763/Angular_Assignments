class CIrcle
{
	radius:number;
	PI:number;

	constructor(radius:number,PI:number)
	{
		this.radius = radius;
		this.PI = PI;
	}

	Area()
	{
		var ans:number = 0;
		ans = this.PI * this.radius * this.radius;
		return ans;
	}
}

var Cir1 = new CIrcle(5,3.14);
var Cir2 = new CIrcle(10,3.14);

var ret:number = 0;

console.log("By First Obj1 (Cir1)");

ret = Cir1.Area();
console.log("Area of Circle is : ",ret);

console.log("By Second Obj2 (Cir2)");

ret = Cir2.Area();
console.log("Area of Circle is : ",ret);

// Output
// By First Obj1 (Cir1)
// Area of Circle is :  78.5
// By Second Obj2 (Cir2)
// Area of Circle is :  314