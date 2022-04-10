Function.prototype.apply = (context) => {

  /// [object Object]

  if (typeof context === 'function') {
    throw new Error("Type error");
  }

  // 给context对象绑定关联当前函数
  // symbol 
  // 与上面代码相比，我们使用 Symbol 来保证属性唯一
  // 也就是保证不会重写用户自己原来定义在 context 中的同名属性
  const fnSymbol = Symbol();
  context[fnSymbol] = this || window;

  let result = null;

  // 执行要被调用的方法
  if (arguments[1]) {
    result = context[fnSymbol](...arguments[1]);
  } else {
    result = context[fnSymbol]();
  }

  // 执行完毕后删除context.fn
  delete context[fnSymbol];

  // 将结果返回
  return result;

  // 其实就是给传入进来的context绑定一个成员变量，赋值当前函数给到这个成员变量然后在去调用它
}