//JS的数据类型
//数据类型分为基本数据类型和引用数据类型
//基本数据类型有：Number，String，Boolean，Null，Undefined。
//引用数据类型只有Object（Array，Function，Date等）
//两者之间的不同：
//1.内存分配方式的不同：引用对象一般分配在堆区，其引用在栈区或堆区。基本数据类型一般分配在栈区
    //（若对象的属性是基本数据类型，那么该属性分配在栈区，没有引用指向的堆区操作系统会定期处理）
//2.赋值不同：引用数据类型赋值时涉及深浅拷贝。基本数据类zzx型不涉及深浅拷贝
var obj_a={v:a};
var obj_b=a;    //浅拷贝，堆区空间没有新开辟空间
obj_b.v="b";
console.log(obj_a,obj_b);
obj_b={v="c"};  //深拷贝，堆区新开辟内存空间
console.log(obj_a,obj_b);
//3.判等时不同：引用数据类型判等时是判断引用所指向的内存空间是否相等。
//基本数据类型是判断变量值是否相等，他们所指向的内存空间一般不等
var obj_a={v:a};
var obj_b={v:a};    //obj_a!=obj_b

