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
//objSub.sayHello();
console.log(objSub);


