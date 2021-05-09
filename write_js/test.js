// // // var a=5
// // // class A {
// // //     a = 10
// // //     fn(){
// // //         console.log(this,this.a)
// // //     }
// // // }
// // // // const b = new A()
// // // // console.log(b,b.fn)
// // // // b.fn()

// // // const b = new A().fn
// // // b()

// // // func是构造函数，...args是需要传给构造函数的参数
// // function myNew(func, ...args) {
// //     // 创建一个空对象，并且指定原型为func.prototype
// //     var obj = Object.create(func.prototype);
// //     // new构造函数时要执行函数，同时指定this
// //     func.call(obj, ...args);
// //     // 最后return这个对象
// //     return obj;
// // }


// // function Test(name, age) {
// //     this.name = name;
// //     this.age  = age;
// //     return {
// //         person: this.name + this.age
// //     }
// // }

// // let cc = myNew(Test, '小明', 18);
// // // Chrome控制台会输出以下内容
// // // Test {name: "小明", age: 18}
// // console.log(cc, new Test('xxx', 80))

// Function.prototype.call2 = function (content = window) {
//     console.log('content',content,'this',this)
//     // content.fn = this;
//     let args = [...arguments].slice(1);
//     let res  = this(...args)
//     // let result     = content.fn(...args);
//     // delete content.fn;
//     // return result;
//     return res;
// }
// let foo = {
//     value: 1
// }

// function bar(name, age) {
//     console.log(name)
//     console.log(age)
//     console.log(this.value);
// }
// bar.call2(foo, 'black', '18') // black 18 1

// 第一版
function _bind(asThis, ...args1) {
    let fn = this;  // 函数调用时，原this其实就是这个调用函数
    return function(...args2) {  // 同时，返回的新函数也可以接受参数
        return fn.call(asThis, ...args1, ...args2);
    }
}

Function.prototype._bind = _bind;

var tea = {
    value: '奶茶'
}

function drink(name) {
    console.log(`${name} drink ${this.value}`);
}

var drinkTea = drink._bind(tea, 'dongchuan');
// var _drinkTea = drink._bind(tea, 'dongchuan');

drinkTea();  // 'dongchuan drink 奶茶'

var obj = new drinkTea();  // 'dongchuan drink undefined'

console.log(obj.value);  // undefined

