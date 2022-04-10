// new 实现

function myNew(context) {
  const obj = new Object();
  obj.__proto__ = context.prototype;
  const res = context.apply(obj, [...arguments].slice(1));
  return typeof res === "object" ? res : obj;
}

function myNew (context) {
  // 先创建一个对象
  let obj = {};

  // 对象__proto_
  obj.__proto__ = context.prototype;

  // 执行原型方法
  const res = context.apply(obj, [...arguments].slice(1));

  // 返回对象
  return typeof res === 'object' ? res : obj;
}