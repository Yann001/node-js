var util = require('util');
function Base() {
	this.name = 'base';
	this.base = 1991;
	this.sayHello = function() {
		console.log('Hello ' + this.name);
	};
}
Base.prototype.showName = function() {
	console.log(this.name);
};
function Sub() {
	console.log(this.name);
}
// util.inherits(constructor, superConstructor)
// 是一个实现对象间原型继承的函数
util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
var objSub = new Sub();
objSub.showName();
// Sub 仅仅继承了Base 在原型中定义的函数，
// 而构造函数内部创造的 base 属 性和 sayHello 函数都没有被 Sub 继承。
//objSub.sayHello();
console.log(objSub);


