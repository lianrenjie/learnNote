function SuperType(){
    this.colors = ["red", "blue", "green"];
    this.name   = 'hua hua'
  }
  //实例继承（原型链）
  function SubType(){}
  SubType.prototype = new SuperType();

  var instance1 = new SubType();
  instance1.colors.push("black");
  instance1.name = 'xiao bai'

console.log(new SuperType())

  console.log(instance1.colors, instance1.name ); //"red,blue,green,black"
  
  var instance2 = new SubType();
  console.log(instance2.colors, instance2.name ); //"red,blue,green,black"
  
  console.log(instance1.colors===instance2.colors)