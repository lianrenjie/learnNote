Function.prototype.myApply = function (new_obj= window, params) {
                                new_obj.fn = this;
                                console.log('params',params)
                            let res = new_obj.fn(...params)
delete new_obj.fn
return res
}

let foo = {
    value: 1,
  };
  
  function bar(name, age) {
    console.log(name);
    console.log(age);
    console.log(this.value);
  }
//   bar("black", "18");
  bar.apply(foo,["black", "18"]);
  bar.myApply(foo,["black", "18"]);
//   bar.myCall(foo, "black", "18");