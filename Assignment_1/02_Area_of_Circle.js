function main() {
    var radius = 5;
    var area = 0;
    area = Area_of_Circle(radius);
    console.log("Area of circle is : " + area + ".");
}
function Area_of_Circle(radius) {
    var pi = 3.14;
    var area = 0;
    area = pi * radius * radius;
    return area;
}
main();
