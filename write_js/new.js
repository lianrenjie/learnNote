/*
new做了什么
它创建了一个全新的对象。
它会被执行[[Prototype]]（也就是__proto__）链接。
它使this指向新创建的对象。。
通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上。
如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，那么new表达式中的函数调用将返回该对象引用。

*/
// func是构造函数，...args是需要传给构造函数的参数
function myNew(func, ...args) {
    // 创建一个空对象，并且指定原型为func.prototype
    var obj = Object.create(func.prototype);
    // new构造函数时要执行函数，同时指定this
    let ret = func.call(obj, ...args);
    if ((typeof ret === "object" || typeof ret === "function") && ret !== null) {
        return ret;
    }
    return obj;
  }
  
  function Test() {
    this.name = 'jack';
    this.age  = 18;
    this.arr  = [1,2,3]
    return {
      content: '我有freestyle'
    }
  }
  
  console.log(new Test())
  // Chrome控制台会输出以下内容
  // {content: "我有freestyle"}

  console.log(myNew(Test))
let my_t1 = myNew(Test)
let my_t2 = myNew(Test)
  console.log(my_t1.arr===my_t2.arr)