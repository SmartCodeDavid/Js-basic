Function.prototype.bind = (context) => {
  /// 判断对象
  if (typeof context === 'function') {
    throw new Error("Type error");
  }

  // 获取arguments
  let args = [...arguments].slice(1);

  // 这个要被调用的函数
  let fn = this;

  // 返回一个函数
  return function Fn () {
    // apply调用
    return fn.apply(context, args.concat(...arguments));
  }
}