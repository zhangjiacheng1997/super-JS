//JS中每个函数都是作为对象进行运行，即函数对象
//内置函数：Array，Funtion，Date（可以new一个新对象）。内置的非函数对象：Math
//typeof一个函数对象返回"funtion"而非object
//可以将函数对象赋值给一个变量，或将函数作为参数进行传递
//函数对象的类型是Funtion，类似于数组对象的类型是Array
typeof(Array);//function
typeof(Data);//function
console.log(typeof new Function());//function，创建函数的语句所以返回function
console.log(typeof new new Function());//object，创建该函数的一个对象实例
console.log(typeof new Array());	 //object
console.log(typeof new Date());	 //object
var a = new Array(5);//5个元素的数组
var b = new Array("5");//内容是5的数组

/*----------------------------------------------------------------------------------------*/

//函数对象的属性：length(形参数量),arguments.length(实参数量)
//caller callee(arguments的属性，常用于递归调用)

/*----------------------------------------------------------------------------------------*/

//函数对象属性之caller 获取调用当前函数的函数。例一
function test() {
    if (test.caller == null) {
        console.log("test is called from the toppest level");
    } else {
        console.log("test is called from the function:");
        console.log(test.caller.toString());
    }
}
test();//此时test的caller为null，只有在被嵌套时它的值才有定义
function testOuter() {
    test();
}
testOuter();//call from the function testOuter

/*----------------------------------------------------------------------------------------*/

//函数对象属性之callee 返回正被执行的 Function 对象，
//即指定的 Function 对象的正文
//callee 属性是 arguments 对象的一个成员
//该属性仅当相关函数正在执行时才可用。通常这个属性被用来递归调用匿名函数
var func = function(n){
    if (n <= 0)
        return 1;
    else
        return n * func(n - 1);
        //return n * arguments.callee(n - 1);
};
console.log(func(4));

//优点，可以是匿名函数
(function(n){
    if (n <= 0)
        return 1;
    else
        return n * arguments.callee(n - 1);
}(4));

/*----------------------------------------------------------------------------------------*/

//prototype,该函数实例化出来的对象的原型类型

//高阶函数只是将函数作为参数或返回值的函数
function f1(x){
	return x+1;
}
function f2(x){
	return x*x;
}
function foo(x,y,c1,c2){
	return 2*c1(x)-3*c2(y);
}
foo(1,1,f1,f2);//1

function pow(x) {
    return x * x;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.map(pow); // [1, 4, 9, 16, 25, 36, 49, 64, 81]，arr.map依次遍历数组中成员

/*----------------------------------------------------------------------------------------*/

//bind()绑定函数
var x = 45;
var obj = {
    x:23,
    test:function(){
		function foo(){
			console.log(this.x);
		}
		foo.bind(this)();//var fee = foo.bind(this); fee();
		foo();//原函数并没有改变
    }
};
obj.test();
//这个方法的主要作用是将函数绑定到某个对象，若函数f()调用bind()方法并以对象o作为参数则表示o拥有f方法
var sum = function(x,y){
	return (x+y);
}
var succ = sum.bind(null,1);//创建succ类似于sum，，但1已绑定到x，只传一个参数即可
succ(2);//3,
//this绑定到bind的第一个参数，其他依次绑定