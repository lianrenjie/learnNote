// let obj = {
//     name : 'xiao wang',
//     print: function () {
//         console.log(this, this.name)
//     }
// }

// let obj2 = {
//     name: 'Lucas'
// }

// obj.print()

// obj.print.call(obj2)

Function.prototype.myCall = function (new_obj = window, ...params) {
      new_obj.fn = this;
  let res        = new_obj.fn(...params);
  delete new_obj.fn;
  return res;
};

let foo = {
  value: 1,
};
this.value = 100;
console.log(this);

function bar(name, age) {
  console.log(name);
  console.log(age);
  console.log(this.value, this.setImmediate);
}
bar("black", "18");
bar.myCall(foo, "black", "18"); // black 18 1
