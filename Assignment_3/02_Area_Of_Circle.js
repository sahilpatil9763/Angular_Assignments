var CIrcle = /** @class */ (function () {
    function CIrcle(radius, PI) {
        this.radius = radius;
        this.PI = PI;
    }
    CIrcle.prototype.Area = function () {
        var ans = 0;
        ans = this.PI * this.radius * this.radius;
        return ans;
    };
    return CIrcle;
}());
var Cir1 = new CIrcle(5, 3.14);
var Cir2 = new CIrcle(10, 3.14);
var ret = 0;
console.log("By First Obj1 (Cir1)");
ret = Cir1.Area();
console.log("Area of Circle is : ", ret);
console.log("By Second Obj2 (Cir2)");
ret = Cir2.Area();
console.log("Area of Circle is : ", ret);
