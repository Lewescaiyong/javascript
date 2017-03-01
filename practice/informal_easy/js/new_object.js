function student(name,age) {
    this.name = name;
    this.age = age;
    this.study = function () {
        alert("studying");
    };
    this.eat = function () {
        alert("eating");
    };
}
var student1 = new student("caiyong",25);
var student2 = new student("xukeng",24);
var x = student1.name;
var y = student1.age;
document.getElementById('my_div1').innerHTML = x;
document.getElementById('my_div2').innerHTML = y;
student1.study();
