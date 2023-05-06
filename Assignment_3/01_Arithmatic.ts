class Arithmatic
{
	// Characteristics
	No1:number;
	No2:number;

	constructor(a:number,b:number)
	{
		this.No1 = a;
		this.No2 = b;
	}

	Addition():number	//Behaviour
	{
		var ans:number = 0;
		ans = this.No1 + this.No2;
		return ans;
	}

	Substraction():number	//Behaviour	
	{
		var ans:number = 0;
		ans = this.No1 - this.No2;
		return ans;
	}

	Multiplication():number
	{
		var ans:number = 0;
		ans = this.No1 * this.No2;
		return ans;
	}

	Division():number
	{
		var ans:number = 0;
		ans = this.No1 / this.No2;
		return ans;
	}
}



// Object Creation
var obj1 = new Arithmatic(10,20);
var obj2 = new Arithmatic(40,50);

var ret:number = 0;

console.log("By First Object");

ret = obj1.Addition();
console.log("Addition is : ",ret);

ret = obj1.Substraction();
console.log("Substraction is : ",ret);

ret = obj1.Multiplication();
console.log("Multiplication is : ",ret);

ret = obj1.Division();
console.log("Division is : ",ret);

console.log("By Second Object");

ret = obj2.Addition();
console.log("Addition is : ",ret);

ret = obj2.Substraction();
console.log("Substraction is : ",ret);

ret = obj2.Multiplication();
console.log("Multiplication is : ",ret);

ret = obj2.Division();
console.log("Division is : ",ret);

// Output
// C:\Users\HP\Desktop\Typescript\Assignment_3>node 01_Arithmatic.js
// By First Object
// Addition is :  30
// Substraction is :  -10
// Multiplication is :  200
// Division is :  0.5

// By Second Object
// Addition is :  90
// Substraction is :  -10
// Multiplication is :  2000
// Division is :  0.8
// C:\Users\HP\Desktop\Typescript\Assignment_3>
